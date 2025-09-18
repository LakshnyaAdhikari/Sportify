import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TestScreen({ navigation }) {
  const tests = ["Push-ups", "Squats", "Jump"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Test</Text>
      {tests.map((test, i) => (
        <TouchableOpacity
          key={i}
          style={styles.card}
          onPress={() => navigation.navigate("VideoResult", { test })}
        >
          <Text style={styles.cardText}>{test}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#f0f0f0", padding: 20, borderRadius: 12, marginVertical: 10 },
  cardText: { fontSize: 18 },
});
