import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageHelper {
  static async storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      // console.log("storeData Value: ", key, value)
    } catch (err) {
      console.error("storeData Error: ", err)
    }
  }
  static async getData(key, modifyValue) {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result != null) {
        // console.log("getData Value: ", key, result)
        modifyValue(result);
      }
    } catch (err) {
      console.error("getData Error: ", err)
      modifyValue('');
    }
  }
}
