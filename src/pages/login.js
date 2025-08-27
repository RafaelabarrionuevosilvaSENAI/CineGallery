import { ImageBackground, Text, View, TouchableOpacity, Pressable, TextInput } from 'react-native';

import { StatusBar } from 'expo-status-bar'

// Import Styles!
import { styleslogin } from '../styles/styleslogin'
import { styles } from '../styles/styles';

//import { StylesOnboarding } from '../styles/StylesOnboarding';

// Import Icon!
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function login() {
  return (
    <ImageBackground
      style={styleslogin.container}
      source={require("../images/lua.jpg")} blurRadius={15}>
      <View style={{
        width: "100%", height: "100%", backgroundColor: "#white", padding: 40,
        justifyContent: 'center',
      }}>
        <MaterialCommunityIcons name="flower-tulip-outline" size={50} color="white" style={{ marginBottom: 20 }} />
        <Text style={styleslogin.title}>Sign Up</Text>
        <Text style={styleslogin.text}>Sign up now for free films.</Text>

        <View style={{ marginTop: 80 }}>
          <TextInput style={styleslogin.input} placeholderTextColor={"#white"} placeholder='Name' />
          <TextInput style={styleslogin.input} placeholderTextColor={"#white"} placeholder='Password' />
        </View>

        <TouchableOpacity style={[styles.btn, { marginTop: 80, width: "100%" }]} >
          <Text style={styles.txt}>Sign Up</Text>
        </TouchableOpacity>

      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
