import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome back, Ravi 👋</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tests")}>
        <Text style={styles.cardText}>Upload/Record Test Video 🎥</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Progress")}>
        <Text style={styles.cardText}>My Progress 📊</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Leaderboard")}>
        <Text style={styles.cardText}>Leaderboard 🏆</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Recommended Sports ⚽🏋️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
  },
  cardText: { fontSize: 18 },
});
