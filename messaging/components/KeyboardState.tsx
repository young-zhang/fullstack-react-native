import {EmitterSubscription, Keyboard, KeyboardEvent, Platform} from "react-native";
import React from 'react';

interface Layout {
    x: number,
    y: number,
    width: number,
    height: number,
}

interface P {
    layout: Layout
    children: any
}

interface S {
    contentHeight: number,
    keyboardHeight: number,
    keyboardVisible: boolean,
    keyboardWillShow: boolean, // iOS only
    keyboardWillHide: boolean,
    keyboardAnimationDuration: number
}

const INITIAL_ANIMATION_DURATION = 250;

export default class KeyboardState extends React.Component<P, S> {
    constructor(props) {
        super(props);
        const {layout: {height}} = props;
        this.state = {
            contentHeight: height,
            keyboardHeight: 0,
            keyboardVisible: false,
            keyboardWillShow: false,
            keyboardWillHide: false,
            keyboardAnimationDuration: INITIAL_ANIMATION_DURATION,
        };
    }

    private subscriptions: EmitterSubscription[];

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.subscriptions = [
                Keyboard.addListener('keyboardWillShow', this.keyboardWillShow),
                Keyboard.addListener('keyboardWillHide', this.keyboardWillHide),
                Keyboard.addListener('keyboardDidShow', this.keyboardDidShow),
                Keyboard.addListener('keyboardDidHide', this.keyboardDidHide),
            ];
        }
        else {
            this.subscriptions = [
                Keyboard.addListener('keyboardDidHide', this.keyboardDidHide),
                Keyboard.addListener('keyboardDidShow', this.keyboardDidShow),
            ];
        }
    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => subscription.remove());
    }

    keyboardWillShow = (event: KeyboardEvent) => {
        this.setState({keyboardWillShow: true});
        this.measure(event);
    };

    keyboardDidShow = (event: KeyboardEvent) => {
        this.setState({
            keyboardWillShow: false,
            keyboardVisible: true,
        });
        this.measure(event);
    };

    keyboardWillHide = (event: KeyboardEvent) => {
        this.setState({keyboardWillHide: true});
        this.measure(event);
    };

    keyboardDidHide = () => {
        this.setState({
            keyboardWillHide: false,
            keyboardVisible: false
        });
    };

    measure = (event: KeyboardEvent) => {
        const {layout} = this.props;

        const {
            endCoordinates: {height, screenY},
            duration,
        } = event;

        this.setState({
            contentHeight: screenY - layout.y,
            keyboardHeight: height,
            keyboardAnimationDuration: duration || INITIAL_ANIMATION_DURATION,
        });
    };

    render() {
        const {children, layout} = this.props;
        const {
            contentHeight,
            keyboardHeight,
            keyboardVisible,
            keyboardWillShow,
            keyboardWillHide,
            keyboardAnimationDuration,
        } = this.state;

        return children({
            containerHeight: layout.height,
            contentHeight,
            keyboardHeight,
            keyboardVisible,
            keyboardWillShow,
            keyboardWillHide,
            keyboardAnimationDuration,
        });
    }
}