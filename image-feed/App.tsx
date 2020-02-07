import React from 'react';
import {AsyncStorage, Modal, Platform, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';

import Comments from './screens/Comments';
import Feed from './screens/Feed';

interface S {
    commentsForItem: string[]
    showModal: boolean
    selectedItemId: string
}

export default class App extends React.Component<{}, S> {
    state = {
        commentsForItem: [],
        showModal: false,
        selectedItemId: null,
    };

    onSubmitComment = async text => {
        const { selectedItemId, commentsForItem } = this.state;
        const comments = commentsForItem[selectedItemId] || [];

        const updated = {
            ...commentsForItem,
            [selectedItemId]: [...comments, text],
        };

        this.setState({ commentsForItem: updated });
    };

    openCommentScreen = id => {
        this.setState({showModal: true, selectedItemId: id});
    };

    closeCommentScreen = () => {
        this.setState({showModal: false, selectedItemId: null});
    };

    render() {
        const {commentsForItem, showModal, selectedItemId} = this.state;

        return (
            <View style={styles.container}>
                <Feed style={styles.feed} commentsForItem={commentsForItem} onPressComments={this.openCommentScreen} />
                <Modal visible={showModal} animationType="slide" onRequestClose={this.closeCommentScreen}>
                    <Comments style={styles.comments}
                              comments={commentsForItem[selectedItemId] || []}
                              onClose={this.closeCommentScreen}
                              onSubmitComment={this.onSubmitComment} />
                </Modal>
            </View>
        );
    }
}

const platformVersion: number =
    Platform.OS === 'ios'
        ? parseInt(Platform.Version.toString(), 10)
        : parseInt(Platform.Version.toString(), 10);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    feed: {
        flex: 1,
        marginTop:
            Platform.OS === 'android' || platformVersion < 11
                ? Constants.statusBarHeight
                : 0,
    },
    comments: {
        flex: 1,
        marginTop:
            Platform.OS === 'ios' && platformVersion < 11
                ? Constants.statusBarHeight
                : 0,
    },
});