import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import Header from "./src/Screens/Header";
import Settings from "./src/Screens/Settings";
import Message from "./src/Screens/Message";

const Stack = createStackNavigator();
const SettingItem = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{ marginLeft: 20, marginRight: 15 }}
        onPress={() => navigation.navigate("Settings")}
      >
        <MaterialIcons name="settings" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bulk-Message"
        component={Message}
        options={{
          headerTitle: () => <Header name="Bulk Message" />,
          headerRight: () => <SettingItem />,
          headerStyle: styles.headerStyle,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: () => <Header name="Settings" />,
          headerStyle: styles.headerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    borderBottomLeftRadius: 0, //50
    borderBottomRightRadius: 0, //50
    elevation: 25,
    backgroundColor: "#8ad24e",
    shadowColor: "#fff",
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
