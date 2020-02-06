import {FlatList, ListRenderItem} from 'react-native';
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
}

export default class CardList extends React.Component<P> {
    renderItem: ListRenderItem<ListItem> = (o: { item: ListItem }) => {
        const {id, author} = o.item;
        return (<Card fullname={author} image={{uri: getImageFromId(id)}} />)
    };

    render() {
        const {items} = this.props;
        return (
            <FlatList data={items} renderItem={this.renderItem} keyExtractor={keyExtractor} />
        );
    }
}
