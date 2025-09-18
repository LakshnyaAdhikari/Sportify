import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const slides = [
  { id: 1, text: "Fair & cheat-proof evaluations.", image: require("../../assets/onboarding1.png") },
  { id: 2, text: "Gamified progress tracking.", image: require("../../assets/onboarding2.png") },
  { id: 3, text: "Get noticed by national scouts.", image: require("../../assets/onboarding3.png") },
];

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.text}>{slide.text}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  slide: { marginVertical: 15, alignItems: "center" },
  image: { width: 200, height: 200, resizeMode: "contain" },
  text: { fontSize: 18, textAlign: "center", marginTop: 10 },
  button: { backgroundColor: "#1E90FF", padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16 },
});
