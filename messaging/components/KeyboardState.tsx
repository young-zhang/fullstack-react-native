import {Keyboard, Platform} from "react-native";
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
}