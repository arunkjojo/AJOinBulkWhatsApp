import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const value= await AsyncStorage.getItem(key);
    console.log("getData: ",key, value);
    return (value !== null ? value : '');
  } catch(e) {
    console.error("getData Error: ", e)
  }
}

export default getData;