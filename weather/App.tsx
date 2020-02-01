import React from 'react';
import {
    ActivityIndicator,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {fetchLocationId, fetchWeather} from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

interface AppState {
    loading: boolean
    error: boolean
    location: string
    temperature: number
    weather: string
}

export default class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            location: '',
            temperature: 0,
            weather: ''
        };
    }

    componentDidMount() {
        // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
        this.handleUpdateLocation('San Francisco');
    }

    handleUpdateLocation = (city: string) => {
        console.log("handleUpdateLocation(" + city + ")");
        this.setState({location: city});
    };

    render() {
        const {location} = this.state;

        return (
            <KeyboardAvoidingView style={styles.container} behavior="height">
                <ImageBackground
                    source={getImageForWeather('Clear')}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <View style={styles.detailsContainer}>
                        <Text style={[styles.largeText, styles.textStyle]}>
                            {location}
                        </Text>
                        <Text style={[styles.smallText, styles.textStyle]}>
                            Light Cloud
                        </Text>
                        <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

                        <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation}/>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },
    textStyle: {
        textAlign: 'center',
        // fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        ...Platform.select({
            ios: {fontFamily: 'AvenirNext-Regular'},
            android: {fontFamily: 'Roboto'}
        }),
        color: 'white',
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
});
