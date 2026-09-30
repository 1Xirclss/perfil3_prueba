import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

// Tarjeta reutilizable para mostrar los productos recibidos por props.
const Card = ({ product }) => {
  const imageUrl = product.image;

  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.placeholderText}>Sin imagen</Text>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.category}</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={4}>
          {product.description || "Sin descripción disponible."}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${Number(product.price || 0).toFixed(2)}</Text>
          <Text style={styles.rating}>
            ★ {product.rating?.rate ?? "N/D"} ({product.rating?.count ?? 0})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F1EB",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(16, 43, 30, 0.1)",
    overflow: "hidden",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 175,
    backgroundColor: "#FFFFFF",
  },
  imagePlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#66736B",
    fontSize: 13,
  },
  content: {
    padding: 14,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
    gap: 8,
  },
  title: {
    color: "#102B1E",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  badge: {
    maxWidth: 105,
    backgroundColor: "rgba(32, 139, 81, 0.12)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#0B2B1E",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  description: {
    color: "#66736B",
    fontSize: 13,
    lineHeight: 19,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  price: {
    color: "#208B51",
    fontSize: 17,
    fontWeight: "bold",
  },
  rating: {
    color: "#66736B",
    fontSize: 12,
    fontWeight: "600",
  },
});
