import {
    ActivityIndicator,
    Text,
    ViewPropTypes,
    SafeAreaView, ViewStyle,
} from 'react-native';
import React from 'react';

import {fetchImages} from '../utils/api';
import CardList from '../components/CardList';

interface P {
    style?: ViewStyle
    commentsForItem: string[]
    onPressComments: (GestureResponderEvent) => void
}

interface S {
    loading: boolean
    error: boolean
    items: any[]
}

export default class Feed extends React.Component<P, S> {
    static defaultProps = {
        style: null,
    };

    state = {
        loading: true,
        error: false,
        items: [],
    };

    async componentDidMount() {
        try {
            const items = await fetchImages();
            this.setState({loading: false, items});
        }
        catch (e) {
            this.setState({loading: false, error: true});
        }
    }

    render() {
        const {commentsForItem, onPressComments, style} = this.props;
        const {loading, error, items} = this.state;

        if (loading) {
            return <ActivityIndicator size="large" />;
        }

        if (error) {
            return <Text>Error...</Text>;
        }

        return (
            <SafeAreaView style={style}>
                <CardList items={items} commentsForItem={commentsForItem} onPressComments={onPressComments} />
            </SafeAreaView>
        );
    }
}