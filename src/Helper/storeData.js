import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key,value) => {
  try {
    console.log(key, value)
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
    console.log(e)
  }

  console.log('Done');
}

export default storeData