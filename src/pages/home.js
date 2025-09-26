import { StatusBar } from "expo-status-bar";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";

import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

import { removeItem } from "../components/AsyncStorage";

export default function Home() {
  const navigation = useNavigation();

  const logOut = async () => {
    await removeItem("login");
    navigation.push("Login");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/lua.jpg")}
    >
      <View style={{ alignItems: "center", gap: 20 }}>
        <Text style={styles.titulo}>BEM VINDO (A)!</Text>
      </View>

      <Text style={styles.subTitulo}>
        Aqui você encontra os filmes mais em alta no momento! Prepare-se para
        escolher sua próxima sessão!
      </Text>

      <View style={{ gap: 20, height: 10 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Filmes")}
        >
          <Text style={styles.login}>Ver galeria de filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bntSair} onPress={logOut}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
