import { StyleSheet } from "react-native";

// Estilos base compartidos, siguiendo la organización de ProNatural Móvil.
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#102B1E",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#F3F1EB",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(16, 43, 30, 0.1)",
  },
  button: {
    backgroundColor: "#0B2B1E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default globalStyles;
export { globalStyles };
