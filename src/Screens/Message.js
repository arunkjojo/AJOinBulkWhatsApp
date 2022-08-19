import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";
import User from "../Components/User";
import AsyncStorageHelper from "../Helper/AsyncStorageHelper";

const Message = () => {
  
  const [whatsAppMsg, setWhatsAppMsg] = useState("");
  const [arrayOfNumber, setArrayOfNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState([]);

  const [timeInterval, setTimeInterval] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [totalMessageCount, setTotalMessageCount] = useState('')

  useEffect(() => {
    AsyncStorageHelper.getData("timeInterval", setTimeInterval);
    AsyncStorageHelper.getData("totalMessageCount", setTotalMessageCount);
  }, []);

  const initiateWhatsApp = () => {
    let numbers = arrayOfNumber.split(/\s+/).join("");
    setWhatsAppNumber(numbers.split(","));
    // setWhatsAppNumber([...whatsAppNumber, arrayOfNumber.split(',')]);

    let x = 0;
    

    // Check for perfect 10 digit length
    if (whatsAppMsg.length < 1) {
      alert("Please Enter Messages");
      return;
    }
    let count=messageCount;
    var timer = setInterval(() => {
      if (x < whatsAppNumber.length) {
        let url =
          "whatsapp://send?text=" + whatsAppMsg + "&phone=" + whatsAppNumber[x];

        // Linking.openURL(url)
        //   .then((data) => {})
        //   .catch(() => {
        //     alert("Make sure Whatsapp installed on your device");
        //   });

        // console.log(url);
      } else {
        clearInterval(timer);
      }
      count++;
      console.log("Count",count);
      AsyncStorageHelper.storeData("messageCount", count.toString());
      AsyncStorageHelper.getData("messageCount", setMessageCount);
      x++;
    }, parseInt(timeInterval));
  };

  return (
    <SafeAreaView style={styles.container}>
      <User />
      <Text style={styles.titleText}>
        Message Count: {messageCount} in {totalMessageCount}
      </Text>
      {messageCount < totalMessageCount ? ( 
        <View style={styles.container}>
          <Text style={styles.titleTextSmall}>
            WhatsApp Numbers(include country code, 91)
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            editable={true}
            minLength={10}
            value={arrayOfNumber}
            onChangeText={(whatsAppNumberArray) =>
              setArrayOfNumber(whatsAppNumberArray)
            }
            placeholder={"WhatsApp Number"}
            style={styles.textInputArea}
          />

          <Text style={styles.titleTextSmall}>WhatsApp Message</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            editable={true}
            value={whatsAppMsg}
            onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
            placeholder={"WhatsApp Message"}
            style={styles.textInputArea}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={initiateWhatsApp}
          >
            <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.errorText}>
            Please Upgrade you Bulk Message Plan
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={initiateWhatsApp}
          >
            <Text style={styles.buttonTextError}>Send WhatsApp Message to Team</Text>
          </TouchableOpacity>
        </View>
      )
      }
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleTextSmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  errorText: {
    marginVertical: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  buttonTextError: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: "center",
  },
  textInputArea: {
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
