import {Alert, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import Status from './components/Status';
import MessageList from './components/MessageList';
import {createImageMessage, createLocationMessage, createTextMessage, MessageShape,} from './utils/MessageUtils';

export default class App extends React.Component {
    state = {
        messages: [
            createImageMessage('https://unsplash.it/300/300'),
            createTextMessage('World'),
            createTextMessage('Hello'),
            createLocationMessage({
                latitude: 37.78825,
                longitude: -122.4324,
            })
        ]
    };

    handlePressMessage = (msg: MessageShape) => {
        let {id, type} = msg;
        switch (type) {
        case 'text':
            Alert.alert(
                'Delete message?',
                'Are you sure you want to permanently delete this message?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () => {
                            const {messages} = this.state;
                            this.setState({messages: messages.filter(message => message.id !== id)});
                        }
                    }
                ]
            );
            break;
        case 'image':
            this.setState({
                fullscreenImageId: id,
                isInputFocused: false,
            });
            break;
        default:
            break;
        }
    };

    renderMessageList(): ReactNode {
        const {messages} = this.state;
        return (
            <View style={styles.content}>
                <MessageList messages={messages} onPressMessage={this.handlePressMessage} />
            </View>
        );
    }

    renderInputMethodEditor(): ReactNode {
        return (<View style={styles.inputMethodEditor} />);
    }

    renderToolbar(): ReactNode {
        return (<View style={styles.toolbar} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <Status />
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