import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { battaryStyles } from './battaryStyles';
import { colors } from '../../constants/colors';

interface BatteryIconProps {
  percentage: number;
}

export const BatteryIcon = ({ percentage, }: BatteryIconProps) => {
  // Clamp percentage between 0 and 100
  const cappedPercentage = Math.min(100, Math.max(0, percentage));
  
  // Map size to dimensions
  const getSizeStyle = () => {
    return { width: 80, height: 40, borderWidth: 2 };
  };

  const { width, height, borderWidth } = getSizeStyle();

  const fillColor =
    cappedPercentage > 70 ? colors.highCharge :
    cappedPercentage > 30 ? colors.mediumCharge :
    colors.lowCharge;

  const innerWidth = width - borderWidth * 2;
  const fillWidth = (cappedPercentage / 100) * innerWidth;

  return (
    <View style={battaryStyles.container}>
      <View
        style={[
          battaryStyles.batteryBody,
          {
            width,
            height,
            borderWidth,
            borderColor: fillColor,
          },
        ]}
      >
        <View
          style={[
            battaryStyles.fill,
            {
              width: fillWidth,
              backgroundColor: fillColor,
            },
          ]}
        />
      <Text style={battaryStyles.label}>{`${Math.round(cappedPercentage)}%`}</Text>
      <View style={[battaryStyles.batteryEdge,{backgroundColor: fillColor}]}/>
      </View>
    </View>
  );
};

