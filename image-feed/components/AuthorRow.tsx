import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

interface P {
    fullname: string
    linkText: string
    onPressLinkText: (event: GestureResponderEvent) => void
}

const AuthorRow: React.FC<P> = (p) => {
    const {fullname, linkText, onPressLinkText} = p;
    return (
        <View style={styles.container}>
            <Avatar size={35}
                    initials={getInitials(fullname)}
                    backgroundColor={getAvatarColor(fullname)} />
            <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
            {!!linkText && (
                <TouchableOpacity onPress={onPressLinkText}>
                    <Text numberOfLines={1}>{linkText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default AuthorRow;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
    },
});