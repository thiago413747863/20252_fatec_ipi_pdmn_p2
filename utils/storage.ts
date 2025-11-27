import AsyncStorage from '@react-native-async-storage/async-storage';
import { nasaClient } from './axios';
import { PicDayResponse } from '../components/PicDay';

export const getPicsDayStorage = async () => {
  try {
    const res = await nasaClient.get('/pic-day');
    const newPicDay = res.data.picDay as PicDayResponse;

    const storage = await AsyncStorage.getItem('pics-day');

    if (!storage) {
      await AsyncStorage.setItem('pics-day', JSON.stringify([newPicDay]));
      return [newPicDay];
    }

    const picsDayStorage = JSON.parse(storage) as PicDayResponse[];
    const existingPicDay = picsDayStorage.find(pic => pic.date === newPicDay.date);

    if (existingPicDay) return picsDayStorage;

    const updatedPicsDayStorage = [...picsDayStorage, newPicDay];
    await AsyncStorage.setItem('pics-day', JSON.stringify(updatedPicsDayStorage));
    return updatedPicsDayStorage;
  } catch (e) {
    console.log('Ocorreu um erro ao buscar a foto do dia no storage');
  }
};
