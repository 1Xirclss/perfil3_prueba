import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import InfoRow from "../components/InfoRow";
import colors from "../config/colors";
import student from "../config/student";
import globalStyles from "../styles/globalStyle";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.hero}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <Text style={styles.eyebrow}>EVALUACIÓN PRÁCTICA · 15%</Text>
        <Text style={styles.title}>Fake Store Explorer</Text>
        <Text style={styles.subtitle}>Catálogo de productos</Text>
      </View>
      <View style={[globalStyles.container, styles.body]}>
        <Text style={styles.sectionTitle}>Información del estudiante</Text>
        <View style={[globalStyles.card, styles.card]}>
          <InfoRow label="Nombre" value={student.nombre} />
          <InfoRow label="Carnet" value={student.carnet} />
          <InfoRow label="Sección y grupo" value={student.seccionGrupo} />
        </View>
        <CustomButton title="Explorar productos" onPress={() => navigation.navigate("Products")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primaryDark },
  hero: { flex: 0.9, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 },
  logo: { width: 112, height: 112, borderRadius: 28, marginBottom: 18 },
  eyebrow: { color: "#D3E5D8", fontSize: 11, fontWeight: "800", letterSpacing: 1.2, marginBottom: 8 },
  title: { color: colors.white, fontSize: 29, fontWeight: "900", textAlign: "center" },
  subtitle: { color: "#D8E1DA", fontSize: 15, marginTop: 5 },
  body: { flex: 1.1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24 },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: "800", marginBottom: 14 },
  card: { paddingHorizontal: 18, marginBottom: 22 },
});
