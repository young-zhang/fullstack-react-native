import {Dimensions, FlatList, ListRenderItem, ListRenderItemInfo, PixelRatio, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

interface P {
    data: any;
    renderItem: (any) => React.ReactElement | null
    numColumns: number
    itemMargin: number
}

export default class Grid extends React.Component<P> {
    static defaultProps = {
        numColumns: 4,
        itemMargin: StyleSheet.hairlineWidth,
    };

    renderGridItem: ListRenderItem<any> = (info) => {
        const { index } = info;
        const {renderItem, numColumns, itemMargin} = this.props;

        // We want to get the device width on render, in case the device is rotated
        const {width} = Dimensions.get('window');

        // Fix visual inconsistencies by aligning to the nearest pixel
        const size = PixelRatio.roundToNearestPixel((width - itemMargin * (numColumns - 1)) / numColumns);

        // We don't want to include a `marginLeft` on the first item of a row
        const marginLeft = index % numColumns === 0 ? 0 : itemMargin;
        // We don't want to include a `marginTop` on the first row of the grid
        const marginTop = index < numColumns ? 0 : itemMargin;

        return renderItem({ ...info, size, marginLeft, marginTop });
    };

    render() {
        const {numColumns, itemMargin} = this.props;
        return (
            <FlatList {...this.props} renderItem={this.renderGridItem} />
        );
    }
}