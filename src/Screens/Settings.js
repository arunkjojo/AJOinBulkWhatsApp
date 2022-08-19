import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import User from '../Components/User'
import { storeData } from '../Helper/storeData';

const Settings = () => {
    const [email, setEmail] = useState('')

    const initiateRegister = () => {
        console.log(">>>Email: " + email);
        storeData('userEmail', email)
    }
    return (
        <SafeAreaView style={styles.container}>
            <User />
            <View style={styles.emailContainer}>
                <Text style={styles.titleTextSmall}>
                    Registered Email ID
                </Text>
                <TextInput
                    placeholder={'Enter Your Email ID'}
                    keyboardType='email-address'
                    textContentType= 'emailAddress'
                    autoFocus
                    editable
                    style={styles.emailInput}
                    onChangeText={(emailId)=>setEmail(emailId)}
                />
                
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.updateButton}
                    onPress={initiateRegister}
                >
                    <Text style={styles.buttonText}>
                        Update Email ID
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.faqContainer}>
                <Text style={styles.titleTextSmall}>
                    FAQ:
                </Text>
                <View style={styles.faqSubContainer}>
                    <Text style={styles.faqQuestion}>
                        What is FAQ?
                    </Text>
                    <Text style={styles.faqAnswer}>
                        A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur
                    </Text>
                    <Text style={styles.faqQuestion}>
                        What is FAQ?
                    </Text>
                    <Text style={styles.faqAnswer}>
                        A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emailContainer: {
        padding: 10,
    },
    faqContainer: {
        paddingTop: 50,
        marginHorizontal: 10,
    },
    titleTextSmall: {
        textAlign: 'left',
        marginVertical: 8,
        fontSize: 16,
    },
    emailInput: {
        borderColor: '#8ad24e',
        borderWidth: 1,
        paddingHorizontal: 25,
        height: 40,
        width: '100%',
    },
    updateButton: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        paddingHorizontal: 35,
        height: 40,
        width: '100%',
        backgroundColor: '#8ad24e'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

    faqSubContainer: {
        paddingTop: 10
    },
    faqQuestion: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    faqAnswer: {
        fontWeight: 'normal',
        marginLeft: 15,
    }
});

export default Settings