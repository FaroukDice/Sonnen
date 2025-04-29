import React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { RowDataItem } from '../../types/rowDataType';
import { colors } from '../../constants/colors';


export function BattaryChart({ rowData }: { rowData: RowDataItem[] }) {
    const chartData = rowData.map(item => ({
        value: item.chargingLevel,
        label: new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }));

    return (
        <View>
            {chartData.length === 0 ? (
                <Text>No data available</Text>
            ) : (
                <LineChart
                    data={chartData}
                    areaChart
                    color={colors.chartLine}
                    thickness={3}
                    startFillColor={colors.chartStartFill}
                    endFillColor={colors.chartEndFill}
                    startOpacity={0.9}
                    endOpacity={0.3}
                    noOfSections={5}
                    yAxisLabelTexts={['0%', '20%', '40%', '60%', '80%', '100%']}
                    yAxisLabelWidth={40}
                    xAxisLabelTextStyle={{
                        position: 'absolute',
                        bottom: 0,
                        fontSize: 10,
                        color: colors.black,
                    }}
                    spacing={20}
                    textShiftX={-10}
                    textShiftY={-10}
                    textColor={colors.black}
                    showVerticalLines

                    verticalLinesSpacing={0}
                />
            )}
        </View>
    );
}