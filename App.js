import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Onboarding from "../CineGallery/src/pages/Onboarding"
import login from "./src/pages/login"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

