This repo is just me working through the book
[Fullstack React Native: The complete guide to React Native!](https://www.newline.co/fullstack-react-native/)
[using TypeScript](https://facebook.github.io/react-native/docs/typescript).

`npm install yarn --global`

## Getting Started with React Native
p14: `yarn global add expo-cli@3.11.7`

p15: `expo init weather --template expo-template-blank-typescript@sdk-36 --yarn`

## React Fundamentals
p96: `expo init time-tracking --template expo-template-blank-typescript@sdk-36 --yarn`

See: [Building React Stateless Functional Components with TypeScript](https://www.pluralsight.com/guides/typescript-building-react-components)

p119: `expo install uuid`

p164: [Default props with class component for TypeScript](https://stackoverflow.com/a/37282264/584829)

## Core Components, Part 1
p171: `expo init image-feed --template expo-template-blank-typescript@sdk-36 --yarn`

p196: `expo install expo-constants`

## Core APIs, Part 1
p274: `expo init messaging --template expo-template-blank-typescript@sdk-36 --yarn`

p274: `expo install expo-constants expo-permissions expo-media-library expo-cameraroll@0.0.1 @react-native-community/netinfo react-native-maps`

p292: `expo install @react-native-community/netinfo@5.0.0` to fix the 
"[RNCNetInfo.getCurrentState got 3 arguments, expected 2](https://github.com/react-native-community/react-native-netinfo/issues/297)"
error.

p295: [TypeScript equivalent of `PropTypes.oneOf(['Foo', 'Bar'])`](https://stackoverflow.com/questions/50248807/what-is-the-typescript-equivalent-of-proptypes-oneof-restrict-a-variable-to-s)

p305: Nested types such as `MapView.Marker` [require s special handling](https://stackoverflow.com/questions/57376708/why-mapview-marker-does-not-exist-on-type-typeof-mapview),
with `import MapView, {Marker} from 'react-native-maps';` to resolve   
the error message `MapView.Marker does not exist on type 'typeof MapView'`.

p345: Expo 36.0.0 [change log](https://github.com/expo/expo/blob/master/CHANGELOG.md) 
under **Breaking Changes** says 
_removed CameraRoll from react-native core, 
developers are encouraged to use [expo-media-library](https://docs.expo.io/versions/latest/sdk/media-library/) instead_.

p347: [iOS requires asking for Permissions.CAMERA_ROLL](https://github.com/expo/expo/issues/1696).

## Navigation
p400: `expo init contact-list --template expo-template-blank-typescript@sdk-36 --yarn`

p401: `expo install uuid@3.1.0`