import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface P {
    name?: string,
    avatar: string,
    phone?: string,
    textColor?: string
    onPress?: (event: GestureResponderEvent) => void,
}

const ContactThumbnail: React.FC<P> = ({name, phone, avatar, textColor, onPress}) => {
    const colorStyle = {color: textColor};
    //const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            {onPress
                ? (<TouchableOpacity onPress={onPress}><Image source={{uri: avatar}} style={styles.avatar} /></TouchableOpacity>)
                : (<View><Image source={{uri: avatar}} style={styles.avatar} /></View>)
            }
            {name !== '' && (
                <Text style={[styles.name, colorStyle]}>{name}</Text>
            )}

            {phone !== '' && (
                <View style={styles.phoneSection}>
                    <Icon name="phone" size={16} style={{color: textColor}} />
                    <Text style={[styles.phone, colorStyle]}>{phone}</Text>
                </View>
            )}
        </View>
    );
};

export default ContactThumbnail;

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
