import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {colors} from '../theme';

class ResponsiveLineChart extends React.Component {
  state = {};

  containerOnLayout = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }) => {
    let {containerHeight, containerWidth} = this.state;
    if (containerHeight !== height || containerWidth !== width) {
      this.setState({containerHeight: height, containerWidth: width});
    }
  };

  render() {
    const {containerHeight, containerWidth} = this.state;
    let {
      data,
      backgroundColor = colors.white,
      chartAreaDefaultBackgroundColor = colors.primary,
      labelColor = colors.secondary,
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onLayout={this.containerOnLayout}>
        {containerHeight !== undefined && containerWidth !== undefined && (
          <LineChart
            data={data}
            width={containerWidth}
            height={containerHeight}
            chartConfig={{
              color: () => labelColor,
              fillShadowGradient: chartAreaDefaultBackgroundColor,
              fillShadowGradientOpacity: 1,
              fillShadowGradientEndOpacity: 1,
              backgroundGradientFrom: backgroundColor,
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: backgroundColor,
              backgroundGradientToOpacity: 1,
              strokeWidth: 1,
              useShadowColorFromDataset: true,
            }}
            withInnerLines={false}
            withOuterLines={false}
            withDots={false}
          />
        )}
      </View>
    );
  }
}

export default ResponsiveLineChart;
