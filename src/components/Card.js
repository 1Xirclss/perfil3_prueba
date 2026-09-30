import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function Card({ show }) {
  const image = show.image?.medium;
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.poster} resizeMode="cover" />
      ) : (
        <View style={[styles.poster, styles.placeholder]}><Text style={styles.placeholderText}>TV</Text></View>
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{show.name}</Text>
        <Text style={styles.meta}>{show.language || 'Sin idioma'} · {show.premiered?.slice(0, 4) || 'Sin año'}</Text>
        <View style={styles.genreRow}>
          {(show.genres || []).slice(0, 2).map((genre) => <Text key={genre} style={styles.genre}>{genre}</Text>)}
        </View>
        <Text style={styles.summary} numberOfLines={4}>{show.summary}</Text>
        <Text style={styles.rating}>★ {show.rating?.average ?? 'N/D'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: 16, marginBottom: 14, overflow: 'hidden', elevation: 2, shadowColor: '#2E1065', shadowOpacity: 0.08, shadowRadius: 7, shadowOffset: { width: 0, height: 3 } },
  poster: { width: 112, minHeight: 172, backgroundColor: colors.border },
  placeholder: { alignItems: 'center', justifyContent: 'center' },
  placeholderText: { color: colors.textLight, fontSize: 25, fontWeight: '800' },
  content: { flex: 1, padding: 13 },
  title: { color: colors.text, fontSize: 18, fontWeight: '800', marginBottom: 4 },
  meta: { color: colors.textLight, fontSize: 12, marginBottom: 7 },
  genreRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 7 },
  genre: { color: colors.primary, backgroundColor: '#EDE9FE', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3, marginRight: 5, fontSize: 10, fontWeight: '700' },
  summary: { color: colors.textLight, fontSize: 12, lineHeight: 17, flex: 1 },
  rating: { color: '#B45309', fontSize: 12, fontWeight: '800', marginTop: 6 },
});
