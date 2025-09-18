import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProgressChart() {
  // Dummy placeholder chart (replace later with VictoryChart or Recharts)
  return (
    <View style={styles.chart}>
      <Text>📈 Weekly Progress Graph (placeholder)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chart: { height: 200, borderWidth: 1, borderColor: "#ddd", justifyContent: "center", alignItems: "center" },
});
