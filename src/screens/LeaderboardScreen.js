import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import leaderboard from "../data/leaderboard";

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>#{item.rank}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
      <Text style={styles.highlight}>You are #4 in your district 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  row: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1, borderColor: "#eee" },
  rank: { fontWeight: "bold" },
  name: { flex: 1, marginLeft: 10 },
  score: { fontWeight: "600" },
  highlight: { marginTop: 20, textAlign: "center", fontSize: 16, color: "#1E90FF" },
});
