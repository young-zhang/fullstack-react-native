import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

export default class App extends React.Component {
    renderMessageList(): ReactNode {
        return (
            <View style={styles.content} />
        );
    }

    renderInputMethodEditor(): ReactNode {
        return (
            <View style={styles.inputMethodEditor} />
        );
    }

    renderToolbar(): ReactNode {
        return (
            <View style={styles.toolbar} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderMessageList()}
                {this.renderToolbar()}
                {this.renderInputMethodEditor()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputMethodEditor: {
        flex: 1,
        backgroundColor: 'white',
    },
    toolbar: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.04)',
        backgroundColor: 'white',
    },
});