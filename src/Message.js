import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Message = () => {

    const navigation = useNavigation();

    const [whatsAppMsg, setWhatsAppMsg] = useState('');
    const [arrayOfNumber, setArrayOfNumber] = useState('');
    const [whatsAppNumber, setWhatsAppNumber] = useState([]);

    const initiateWhatsApp = () => {
        let numbers = arrayOfNumber.split(/\s+/).join('');
        setWhatsAppNumber(numbers.split(','));
        // setWhatsAppNumber([...whatsAppNumber, arrayOfNumber.split(',')]);

        let x=0;

        // Check for perfect 10 digit length
        if (whatsAppMsg.length < 1) {
        alert('Please Enter Messages');
        return;
        }

        var timer = setInterval(() => {
        if(x < whatsAppNumber.length) {
            let url = 'whatsapp://send?text=' + whatsAppMsg + '&phone=' + whatsAppNumber[x];

            Linking.openURL(url).then((data) => {}).catch(() => {alert('Make sure Whatsapp installed on your device')});

            // console.log(url);
        } else {
            clearInterval(timer);
        }

        x++;
        }, 5000);
        
    };
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.titleTextsmall}>
            WhatsApp Numbers(include country code, 91)
            </Text>
            <TextInput
            multiline={true}
            numberOfLines={5}
            editable={true}
            minLength={10}
            value={arrayOfNumber}
            onChangeText={
                (whatsAppNumberArray) => setArrayOfNumber(whatsAppNumberArray)
            }
            placeholder={'WhatsApp Number'}
            style={styles.textInputArea}
            />

            <Text style={styles.titleTextsmall}>
            WhatsApp Message
            </Text>
            <TextInput
            multiline={true}
            numberOfLines={5}
            editable={true}
            value={whatsAppMsg}
            onChangeText={
                (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
            }
            placeholder={'WhatsApp Message'}
            style={styles.textInputArea}
            />
            <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={initiateWhatsApp}>
            <Text style={styles.buttonTextStyle}>
                Send WhatsApp Message
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#8ad24e', textAlign: 'right', marginTop: 40}}>
                    Register Now
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};
 
export default Message;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInputArea: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10
  }
});