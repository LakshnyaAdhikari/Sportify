import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function VideoResultScreen({ route, navigation }) {
  const { test } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{test} Results</Text>
      <Text style={styles.result}>Score: 11 valid reps</Text>
      <Text style={styles.tip}>Tip: Keep your back straight. Try again tomorrow.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Result</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#aaa" }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  result: { fontSize: 18, marginBottom: 10 },
  tip: { fontSize: 16, color: "gray", marginBottom: 20 },
  button: { backgroundColor: "#1E90FF", padding: 15, borderRadius: 8, alignItems: "center", marginVertical: 5 },
  buttonText: { color: "#fff", fontSize: 16 },
});
