import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// Componente reutilizable para mostrar el estado de carga de la API.
const LoadingScreen = ({ message = "Cargando productos..." }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0B2B1E" />
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  message: {
    color: "#66736B",
    fontSize: 14,
    marginTop: 12,
    textAlign: "center",
  },
});
