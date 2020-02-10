import {FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet} from 'react-native';
import React from 'react';
import {MessageShape} from '../utils/MessageUtils';

interface P {
    messages: MessageShape[]
    onPressMessage: (any) => any
}

const keyExtractor = item => item.id.toString();

export default class MessageList extends React.Component<P> {
    static defaultProps = {
        onPressMessage: () => {
        },
    };

    renderMessageItem = (item: ListRenderItemInfo<MessageShape>): React.ReactElement => {
        return (<view />);
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
});