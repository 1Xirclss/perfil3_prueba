import React from "react";
import { FlatList, RefreshControl, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import LoadingScreen from "../components/LoadingScreen";
import useProducts from "../hooks/useProducts";
import colors from "../config/colors";
import globalStyles from "../styles/globalStyle";

const ProductsScreen = () => {
  const { products, total, query, setQuery, loading, error, reload } = useProducts();

  if (loading && products.length === 0) {
    return <LoadingScreen message="Cargando productos..." />;
  }

  if (error && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>No fue posible cargar el catálogo</Text>
        <Text style={styles.status}>{error}</Text>
        <View style={styles.retry}>
          <CustomButton title="Intentar de nuevo" onPress={reload} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView edges={["bottom"]} style={[globalStyles.container, styles.container]}>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card product={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} tintColor={colors.primary} colors={[colors.primary]} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Explora el catálogo</Text>
            <Text style={styles.subtitle}>{total} productos desde Fake Store API</Text>
            <TextInput
              accessibilityLabel="Buscar producto"
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar un producto..."
              placeholderTextColor={colors.textLight}
              style={styles.search}
              autoCapitalize="none"
              returnKeyType="search"
            />
          </View>
        }
        ListEmptyComponent={<View style={styles.empty}><Text style={styles.errorTitle}>Sin resultados</Text><Text style={styles.status}>Prueba con otro nombre.</Text></View>}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, paddingBottom: 28 },
  header: { marginBottom: 16 },
  title: { color: colors.text, fontSize: 25, fontWeight: "900", marginBottom: 4 },
  subtitle: { color: colors.textLight, fontSize: 13, marginBottom: 14 },
  search: { height: 49, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 15, color: colors.text, fontSize: 15 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 30, backgroundColor: colors.background },
  status: { color: colors.textLight, textAlign: "center", lineHeight: 21, marginTop: 12 },
  errorTitle: { color: colors.text, fontSize: 20, fontWeight: "800", textAlign: "center" },
  retry: { marginTop: 20, minWidth: 200 },
  empty: { alignItems: "center", paddingVertical: 50 },
});
