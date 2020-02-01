import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface SearchInputProps {
    placeholder: string
    location: string
}

export default class SearchInput extends React.Component<SearchInputProps> {
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // see: https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3
    handleChangeText = (newLocation: string) => {
        this.props.location = newLocation; // doesn't work because this.props is immutable
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
});
