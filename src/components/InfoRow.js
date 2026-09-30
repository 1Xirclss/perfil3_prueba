import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { paddingVertical: 13, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  label: { color: colors.textLight, fontSize: 12, fontWeight: '700', letterSpacing: 0.7, marginBottom: 4, textTransform: 'uppercase' },
  value: { color: colors.text, fontSize: 17, fontWeight: '600' },
});
