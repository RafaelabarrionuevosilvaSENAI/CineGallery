import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

// Import reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

// Import axios
import axios from "axios";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

function Photo({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.6, 1, 1.6]
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [15, 1, -15]
          )}deg`,
        },
      ],
    };
  });

  return (
    <View
      style={{
        width: imageWidth,
        height: imageHeight,
        overflow: "hidden",
        borderRadius: 20,
      }}
    >
      <Animated.Image
        id={index}
        source={{ uri: item }}
        style={[{ flex: 1 }, stylez]}
      />
    </View>
  );
}

function BackdropPhoto({ photo, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });

  return (
    <Animated.Image
      id={index}
      source={{ uri: photo }}
      style={[StyleSheet.absoluteFillObject, stylez]}
      blurRadius={20}
    />
  );
}

export default function Filmes() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  // useSharedValue => Reativo as animações, quando o nosso scroll.X.value fro alterado
  // todas as animações serão alteradas.
  const scrollX = useSharedValue(0);

  // useAnimatedScrollHandler => Hook do reanimated, que serve para "escutar"o evento de
  // rolagem (onScroll) da nossa lista
  const onScroll = useAnimatedScrollHandler((e) => {
    // e.contentOffset.x => Distância em pixels que a lista já foi rolada na horizontal
    // scroll.X.value = 320 / (300 + 20)
    // scroll.X.value = 0
    // scroll.X.value = 1
    // scroll.X.value = 2

    scrollX.value = e.contentOffset.x / (imageWidth + spacing);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=Avengers&apikey=bd82cbf1&page=1`
      );
      const moviePosters = res.data.Search.map((movie) => movie.Poster);
      setData(moviePosters);
    } catch (error) {
      console.log("Erro ao buscar as imagens: ", RangeError);
    }
  };

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((phoster, index) => (
          <BackdropPhoto
            key={index}
            photo={phoster}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={(index) => String(index)}
        horizontal
        snapToInterval={imageWidth + spacing}
        // Pode substituir por: alignItems: "center"
        style={{ flexGrow: 0 }}
        // Intervalos de parada do scroll,
        // faz com que a rolagem pare exatamente a cada intervalo especificado
        // neste caso, o tamanho da imagem, mais o gap (spacing)
        decelerationRate={"fast"}
        // decelerationRate => Controla a velocidade da desaceleração da nossa rolagem
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
        }}
        //contentContainerStyle => Aplicar estilo no conteúdo interno do nosso FlatList
        renderItem={({ item, index }) => (
          <Photo item={item} index={index} scrollX={scrollX} />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        //scrollEventThrottle => Define a frequência que o evento onScroll é chamado (60FPS)
        showsHorizontalScrollIndicator={false}
      // showHorizontalScrollIndicator => Oculta a "barrinha" horiozontal da nossa "rolagem"
      />

      <TouchableOpacity
        style={{
          backgroundColor: "rgb(139, 17, 17)",
          width: 100,
          height: 40,
          borderRadius: 30,
          top: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
