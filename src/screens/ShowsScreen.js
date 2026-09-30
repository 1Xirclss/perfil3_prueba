import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import useShows from '../hooks/useShows';
import colors from '../config/colors';

export default function ShowsScreen() {
  const { shows, total, query, setQuery, loading, error, reload } = useShows();

  if (loading && shows.length === 0) {
    return <View style={styles.center}><ActivityIndicator size="large" color={colors.primary} /><Text style={styles.status}>Cargando series…</Text></View>;
  }

  if (error && shows.length === 0) {
    return <View style={styles.center}><Text style={styles.errorTitle}>Algo salió mal</Text><Text style={styles.status}>{error}</Text><View style={styles.retry}><CustomButton title="Intentar de nuevo" onPress={reload} /></View></View>;
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card show={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} tintColor={colors.primary} colors={[colors.primary]} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Descubre tu próxima serie</Text>
            <Text style={styles.subtitle}>{total} resultados desde TVMaze</Text>
            <TextInput
              accessibilityLabel="Buscar serie"
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar por nombre…"
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
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16, paddingBottom: 28 },
  header: { marginBottom: 16 },
  title: { color: colors.text, fontSize: 25, fontWeight: '900', marginBottom: 4 },
  subtitle: { color: colors.textLight, fontSize: 13, marginBottom: 14 },
  search: { height: 49, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 15, color: colors.text, fontSize: 15 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: colors.background },
  status: { color: colors.textLight, textAlign: 'center', lineHeight: 21, marginTop: 12 },
  errorTitle: { color: colors.text, fontSize: 20, fontWeight: '800' },
  retry: { marginTop: 20, minWidth: 200 },
  empty: { alignItems: 'center', paddingVertical: 50 },
});
