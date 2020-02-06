import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';

import Feed from './screens/Feed';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Feed style={styles.feed} />
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
});