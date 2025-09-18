import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  const notifications = [
    "🎯 New test challenge available!",
    "🔥 You’re just 5 reps away from Silver Badge.",
    "Your district has moved into Top 10 hotspots.",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notifications.map((note, i) => (
        <Text key={i} style={styles.note}>{note}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  note: { fontSize: 16, marginBottom: 10 },
});
