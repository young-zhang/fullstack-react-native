export interface Coordinate {
    latitude: number
    longitude: number
}

export interface MessageShape {
    id: number
    type: 'text' | 'image' | 'location',
    text?: string
    uri?: string
    coordinate?: Coordinate
}

let messageId: number = 0;

function getNextId() {
    messageId += 1;
    return messageId;
}

export function createTextMessage(text: string): MessageShape {
    return {
        type: 'text',
        id: getNextId(),
        text
    };
}

export function createImageMessage(uri: string): MessageShape {
    return {
        type: 'image',
        id: getNextId(),
        uri
    };
}

export function createLocationMessage(coordinate: Coordinate): MessageShape {
    return {
        type: 'location',
        id: getNextId(),
        coordinate
    };
}