import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Content = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img_icone}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />

        <Text>renato_cariani</Text>
      </View>

      <Image style={styles.img} source={require("../../img/127792707.png")} />

      <View style={styles.icons}>
        <TouchableOpacity style={styles.icons} onPress={handlePress}>
          <Feather name="heart" size={24} color={isLiked ? "red" : "black"} />
          <Text style={styles.texts}>39,2K</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            alert("Muito feio");
          }}
        >
          <Feather name="message-circle" size={24} color="black" />
          <Text style={styles.texts}>325</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <Feather name="send" size={24} color="black" />
          <Text style={styles.texts}>113</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  img: {
    width: "100%",
    height: "50%",
  },

  img_icone: {
    borderRadius: 13,
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 8,
    paddingVertical: 3,
  },

  texts: {
    fontSize: 16,
  },
});

export default Content;
