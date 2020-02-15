import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';

import colors from '../utils/colors';

interface P {
    name: string
    avatar: string
    phone: string
    onPress?: any
}

const ContactListItem: React.FC<P> = ({name, avatar, phone, onPress}) => {
    return (
        <TouchableHighlight underlayColor={colors.grey}
                            style={styles.container}
                            onPress={onPress}>
            <View style={styles.contactInfo}>
                <Image style={styles.avatar}
                       source={{uri: avatar}} />
                <View style={styles.details}>
                    <Text style={[styles.title]}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};
export default ContactListItem;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar: {
        borderRadius: 22,
        width: 44,
        height: 44,
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20,
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,
    },
});