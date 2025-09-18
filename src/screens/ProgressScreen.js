import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProgressChart from "../components/ProgressChart";
import badges from "../data/progress";

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Progress</Text>
      <ProgressChart />

      <Text style={styles.subTitle}>Badges</Text>
      <FlatList
        data={badges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.badge}>
            <Text>{item.icon} {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  subTitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  badge: { padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 8, marginBottom: 10 },
});
