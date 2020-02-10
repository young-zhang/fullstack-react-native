import {FlatList, GestureResponderEvent, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import React from 'react';
import {MessageShape} from '../utils/MessageUtils';

interface P {
    messages: MessageShape[]
    onPressMessage: (MessageShape) => void;
}

const keyExtractor = item => item.id.toString();

export default class MessageList extends React.Component<P> {
    static defaultProps = {
        onPressMessage: () => {
        },
    };

    renderMessageBody = (item: MessageShape): React.ReactElement | null => {
        let {type, text, uri, coordinate} = item;
        switch (type) {
        case 'text':
            return (
                <View style={styles.messageBubble}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            );
        case 'image':
            return <Image style={styles.image} source={{uri}} />;
        case 'location':
            return (
                <MapView style={styles.map}
                         initialRegion={{
                             ...coordinate,
                             latitudeDelta: 0.08,
                             longitudeDelta: 0.04,
                         }}>
                    <Marker coordinate={coordinate} />
                </MapView>
            );
        default:
            return null;
        }
    };

    renderMessageItem = (renderItem: ListRenderItemInfo<MessageShape>): React.ReactElement => {
        let item = renderItem.item;
        const {onPressMessage} = this.props;

        return (
            <View key={item.id} style={styles.messageRow}>
                <TouchableOpacity onPress={() => onPressMessage(item)}>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const {messages} = this.props;
        return (
            <FlatList style={styles.container}
                      inverted
                      data={messages}
                      renderItem={this.renderMessageItem}
                      keyExtractor={keyExtractor}
                      keyboardShouldPersistTaps={'handled'} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible', // Prevents clipping on resize!
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginRight: 10,
        marginLeft: 60,
    },
    messageBubble: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(16,135,255)',
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    map: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
});