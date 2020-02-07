import {FlatList, GestureResponderEvent, ListRenderItem} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {getImageFromId} from '../utils/api';
import Card from './Card';

interface ListItem {
    id: number
    author: string
}

const keyExtractor: (item: ListItem, index: number) => string = ({id}) => id.toString();

interface P {
    items: ListItem[]
    commentsForItem: string[]
    onPressComments: (GestureResponderEvent) => void
}

export default class CardList extends React.Component<P> {
    renderItem: ListRenderItem<ListItem> = (o: { item: ListItem }) => {
        const {id, author} = o.item;
        const {commentsForItem, onPressComments} = this.props;
        const comments = commentsForItem[id];

        return (
            <Card fullname={author}
                  image={{uri: getImageFromId(id)}}
                  linkText={`${comments ? comments.length : 0} Comments`}
                  onPressLinkText={() => onPressComments(id)} />
        );
    };

    render() {
        const {items, commentsForItem} = this.props;

        return (
            <FlatList data={items} renderItem={this.renderItem} keyExtractor={keyExtractor} extraData={commentsForItem} />
        );
    }
}
