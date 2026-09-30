import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import InfoRow from '../components/InfoRow';
import colors from '../config/colors';
import student from '../config/student';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.hero}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <Text style={styles.eyebrow}>EVALUACIÓN PRÁCTICA · 15%</Text>
        <Text style={styles.title}>TV Explorer</Text>
        <Text style={styles.subtitle}>React Native + Expo</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Información del estudiante</Text>
        <View style={styles.card}>
          <InfoRow label="Nombre" value={student.nombre} />
          <InfoRow label="Carnet" value={student.carnet} />
          <InfoRow label="Sección y grupo" value={student.seccionGrupo} />
        </View>
        <CustomButton title="Explorar series" onPress={() => navigation.navigate('Shows')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primaryDark },
  hero: { flex: 0.9, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  logo: { width: 112, height: 112, borderRadius: 28, marginBottom: 18 },
  eyebrow: { color: '#D8B4FE', fontSize: 11, fontWeight: '800', letterSpacing: 1.2, marginBottom: 8 },
  title: { color: colors.white, fontSize: 34, fontWeight: '900' },
  subtitle: { color: '#C4B5FD', fontSize: 15, marginTop: 5 },
  body: { flex: 1.1, backgroundColor: colors.background, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24 },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '800', marginBottom: 14 },
  card: { backgroundColor: colors.card, borderRadius: 16, paddingHorizontal: 18, marginBottom: 22, elevation: 2, shadowColor: '#2E1065', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 3 } },
});
