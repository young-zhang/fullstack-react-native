export interface MessageShape {
    id: number
    type: 'text' | 'image' | 'location',
    text?: string
    uri?: string
    coordinate?: {
        latitude: number
        longitude: number
    }
}