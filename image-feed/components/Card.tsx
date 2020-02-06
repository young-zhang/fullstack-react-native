import {GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import AuthorRow from './AuthorRow';

interface P {
    fullname: string
    image: ImageSourcePropType
    linkText?: string
    onPressLinkText?: (event: GestureResponderEvent) => void
}

interface S {
    loading: boolean
}

export default class Card extends React.Component<P, S> {
    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {
        },
    };

    state = {
        loading: true
    };

    handleLoad = () => {
        this.setState({loading: false});
    };

    render() {
        const {fullname, image, linkText, onPressLinkText} = this.props;
        const {loading} = this.state;

        return (
            <View>
                <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText} />
                <Image style={styles.image} source={image} onLoad={this.handleLoad} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});