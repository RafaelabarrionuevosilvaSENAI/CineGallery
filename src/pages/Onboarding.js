import { ImageBackground, Text, View, TouchableOpacity, Pressable } from "react-native";

import { StatusBar } from "expo-status-bar";

// Import styles!
import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

// import icon!
import MaterialCommunityIcons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function Onboarding() {
  const navigation = useNavigation()


  return (
    <ImageBackground
      style={styles.container}
      source={require("../../src/images/lua.jpg")}>

      <MaterialCommunityIcons name="logo-octocat" size={24} color="white" />


    </ImageBackground>
  )
}
