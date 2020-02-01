import React from 'react';
import {NativeSyntheticEvent, StyleSheet, TextInput, TextInputSubmitEditingEventData, View} from 'react-native';

interface SearchInputProps {
    placeholder: string
    onSubmit: (string) => void
}

export default class SearchInput extends React.Component<SearchInputProps, { text: string }> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // see: https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3
    handleChangeText = (text: string) => {
        this.setState({text});
    };

    handleSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        const {onSubmit} = this.props;
        const {text} = this.state;
        if (!text) return;
        onSubmit(text);
        this.setState({text: ''});
    };

    render() {
        const {placeholder} = this.props;
        const {text} = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
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
