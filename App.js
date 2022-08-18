import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Alert, View, TouchableOpacity } from "react-native"

import Header from "./src/Header"
import Home from "./src/Home"
import Message from "./src/Message"

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerTitle: () => <Header name="Home" />,
          headerRight: () => (
            <View>
              <TouchableOpacity style={{marginLeft: 20, marginRight: 15}}>
                <MaterialCommunityIcons 
                  name='dots-vertical' 
                  size={28} 
                  color='#000'
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            elevation: 25,
            backgroundColor: '#8ad24e',
            shadowColor: '#fff',
          }
        }}
      />
      <Stack.Screen 
        name="Bulk-Message" 
        component={Message} 
        options={{
          headerTitle: () => <Header name="Bulk-Message" />,
          headerRight: () => (
            <View>
              <TouchableOpacity style={{marginLeft: 20, marginRight: 15}}>
                <MaterialCommunityIcons 
                  name='dots-vertical' 
                  size={28} 
                  color='#000'
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            elevation: 25,
            backgroundColor: '#8ad24e',
            shadowColor: '#fff',
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}