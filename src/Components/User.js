import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import getData from '../Helper/getData';


export default function User() {
    
    const [email, setEmail] = React.useState('')
    const [version, setVersion] = React.useState('')
    const [balance, setBalance] = React.useState('')

    React.useEffect(()=>{
        const emailData= getData('@userEmail');
        setEmail(emailData !== null ? emailData : '');
        const appVersion= getData('@appVersion');
        setVersion(appVersion !== null ? appVersion : '');
        const balanceCount= getData('@balanceCount');
        setBalance(balanceCount !== null ? balanceCount : '');
    },[]);

    return (
        <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
                Hi, {email}
            </Text>
            <Text style={styles.userInfoText}>
                Version: {version}
            </Text>
            <Text style={styles.userInfoText}>
                Balance Message Count: {balance}
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