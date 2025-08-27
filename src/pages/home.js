import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
//import reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';

// import  axios
import axios from 'axios';

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

function Photo({ item, index, scrollx }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollx.value, [index - 1, index, index + 1], [1.6, 1, 1.6])
        },
        {
          rotate: `${interpolate(scrollx.value, [index - 1, index, index + 1], [15, 1, -15])}deg`
        }
      ]
    }
  })

  return (
    <View style={{ width: imageWidth, height: imageHeight, overflow: 'hidden', borderRadius: 20 }}>
      <Animated.Image source={{ uri: item.src.large }} style={[{ flex: 1 }, stylez]} />
    </View>
  )
}

function BackdropPhoto({ photo, index, scrollx }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollx.value, [index - 1, index, index + 1], [0, 1, 0])
    }
  })

  return (
    <Animated.Image source={{ uri: photo.src.large }} style={[StyleSheet.absoluteFillObject, stylez]} />
  )
}

export default function App() {
  const [data, setData] = useState({ photos: [] });

  const scrollx = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {

    scrollx.value = e.contentOffset.x / (imageWidth + spacing);
  })

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(
        ` http://www.omdbapi.com/?i=tt3896198&apikey=dde6de6a`,
      );
      const posterFilme = res.data.search.map(movie => movie.Poster)
      setData(posterFilme);
      console.log(posterFilme)
    } catch (error) {
      console.log("Erro ao buscar a imagens ", error)
    }
  }

  if (data.photos.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        {data.photos.map((photo, index) => (
          <BackdropPhoto key={photo.id} photo={photo} index={index} scrollx={scrollx} />
        ))}
      </View>

      <FlatList
        data={data.photos}
        keyExtractor={(item) => String(item.id)}
        horizontal
        snapToInterval={imageWidth + spacing}
        decelerationRate={"fast"}
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
          alignItems: "center"
        }}
        renderItem={({ item, index }) => <Photo item={item} index={index} scrollx={scrollx} />}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}
