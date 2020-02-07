import {GestureResponderEvent, SafeAreaView, ViewStyle} from 'react-native';
import React from 'react';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

interface P {
    style?: ViewStyle
    comments: string[]
    onClose: (event: GestureResponderEvent) => void
    onSubmitComment: (string) => void
}

const Comments: React.FC<P> = (props) => {
    const {style, comments, onClose, onSubmitComment} = props;
    return (
        <SafeAreaView style={style}>
            <NavigationBar title="Comments" leftText="Close" onPressLeftText={onClose} />
            <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
            <CommentList items={comments} />
        </SafeAreaView>
    );
};

export default Comments;

Comments.defaultProps = {
    style: null,
};