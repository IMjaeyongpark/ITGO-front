import AsyncStorage from "@react-native-async-storage/async-storage";
//storage setter
export const saveDataToStorage = async (key, data) => {
    try {
      const dataString = JSON.stringify(data);
      console.log('save')
      await AsyncStorage.setItem(key, dataString);
    } catch (error) {
      console.error(`Error saving data to AsyncStorage (${key}):`, error);
    }
  };
//storage getter
export const loadDataFromStorage = async (key) => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      console.log('load')
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error(`Error loading data from AsyncStorage (${key}):`, error);
      return null;
    }
  };