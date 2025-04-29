import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { getChargingStates } from '../../redux/slices/chargeStatusSlice';
import Card from '../../components/card';
import { listStyles } from './listStyles';
import GoHome from '../../components/buttons/goHome';
import { RootState } from '../../types/battaryStatusType';

const ChargingList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { states, loading, error } = useSelector((state: RootState) => state.charging);

  useEffect(() => {
    if (states.length === 0) {
      dispatch(getChargingStates());
    }
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text style={listStyles.error}>{error}</Text>;
  }

  return (
    <View style={listStyles.container}>
      <GoHome />
      <FlatList
        data={states}
        keyExtractor={(item) => item.internalEventId.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card
            date={new Date(item.date)}
            chargingLevel={item.chargingLevel}
            index={index} />
        )}
      />
    </View>
  );
};


export default ChargingList;