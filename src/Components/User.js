import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appConfiguration } from '../Config';
import AsyncStorageHelper from '../Helper/AsyncStorageHelper';


export default function User() {
    
    const [email, setEmail] = React.useState(null)
    const [version, setVersion] = React.useState(null)
    const [balance, setBalance] = React.useState(null)
    const [totalMessageCount, setTotalMessageCount] = React.useState(null);
    const [messageCount, setMessageCount] = React.useState(null);
    const [timeInterval, setTimeInterval] = React.useState(null);

    React.useEffect(()=>{
        AsyncStorageHelper.getData('userEmail', setEmail);
        AsyncStorageHelper.getData('appVersion', setVersion);
        AsyncStorageHelper.getData('balanceCount', setBalance);
        AsyncStorageHelper.getData('timeInterval', setTimeInterval);
        AsyncStorageHelper.getData('totalMessageCount', setTotalMessageCount);
        AsyncStorageHelper.getData('messageCount', setMessageCount);

        if(version === '' || version !== 'Paid'){
            AsyncStorageHelper.storeData('appVersion', appConfiguration.baseVersion.toString())
        }
        if(totalMessageCount === '' && version == 'Trial'){
            AsyncStorageHelper.storeData('totalMessageCount', appConfiguration.baseCount.toString())
        }
        if(messageCount > 0){
            let newBalance = totalMessageCount-messageCount;
            AsyncStorageHelper.storeData('balanceCount', newBalance.toString())
        }
    },[]);

    return (
        <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
                Hi, {email}
            </Text>
            <Text style={styles.userInfoText}>
                Version: {version} Version
            </Text>

            <Text style={styles.userInfoText}>
                Total Message Count: {totalMessageCount}
            </Text>
            <Text style={styles.userInfoText}>
                Message Count: {messageCount}
            </Text>
            <Text style={styles.userInfoText}>
                Balance Message Count: {balance}
            </Text>

            <Text style={styles.userInfoText}>
                Time Delay: {timeInterval / 1000}s
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo: {
      marginTop: 2,
      padding: 10,
      backgroundColor: '#8ad24e',
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    userInfoText: {
      fontSize: 15,
      paddingLeft: 10,
    },
});