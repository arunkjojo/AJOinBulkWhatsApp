import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')

    const initiateRegister = () => {
        console.log(">>>Email: " + email)
    }
    return (
        <SafeAreaView  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>
                    Register
                </Text>
                <TextInput
                    placeholder={'Enter Your Email ID'}
                    keyboardType='email-address'
                    textContentType= 'emailAddress'
                    autoFocus
                    editable
                    style={{
                        borderColor: '#8ad24e',
                        borderWidth: 1,
                        paddingHorizontal: 25,
                        height: 40,
                        width: '100%',
                    }}
                    onChangeText={(emailId)=>setEmail(emailId)}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        justifyContent: 'center',
                        marginTop: 15,
                        padding: 10,
                        backgroundColor: '#8ad24e'
                    }}
                    onPress={initiateRegister}
                >
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                    }}>
                        Send WhatsApp Message
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Bulk-Message')} style={{marginTop: '40%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: '#8ad24e'}}>
                        Trial Version
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home