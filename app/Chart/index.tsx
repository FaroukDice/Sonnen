import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { BattaryChart } from '../../components/chart/chart'
import { AppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { getChargingStates } from '../../redux/slices/chargeStatusSlice'
import { useDispatch } from 'react-redux'
import { chartStyles } from './chartStyles'
import GoHome from '../../components/buttons/goHome'
import { RootState } from '../../types/battaryStatusType'




const index = () => {
  const dispatch: AppDispatch = useDispatch();
  const { states, loading, error } = useSelector((state: RootState) => state.charging);
  console.log('states', states)
  useEffect(() => {
    if (states.length === 0) {
      dispatch(getChargingStates());
    }
  }, [dispatch]);


  return (
    <View style={chartStyles.chartContainer}>
      <GoHome />
      <Text style={chartStyles.chartTitle}>Charging Chart</Text>
      {loading && <Text style={chartStyles.loader}>Loading...</Text>}
      {error && <Text style={chartStyles.error}>{error}</Text>}
      {states.length === 0 && <Text style={chartStyles.error}>No data available</Text>}
      {states.length > 0 && <Text style={chartStyles.chartSubtitle}>        The chart below displays the charging levels over time. Each data point represents a specific event with its corresponding charging level and timestamp.
      </Text>}
      {!loading && !error && <BattaryChart rowData={states.map(state => ({
        ...state,
        id: state.internalEventId
      }))} />}
    </View>
  )
}

export default index