import { useMemo } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const chipText = useMemo(() => "ПОГРУЖЕНИЕ В НОВОЕ ПОКОЛЕНИЕ", []);

  return (
    <View style={styles.root}>
      {/* Background */}
      <LinearGradient
        colors={["#050914", "#05030B", "#02030A"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Glow blobs */}
      <View style={[styles.blob, styles.blobLeft]} />
      <View style={[styles.blob, styles.blobRight]} />

      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.brand}>
          <LinearGradient
            colors={["#35D6FF", "#9D5CFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logo}
          />
          <Text style={styles.brandText}>WALLSENSE</Text>
        </View>

        <View style={styles.topActions}>
          <Pressable style={styles.topBtnGhost}>
            <Text style={styles.topBtnGhostText}>Войти</Text>
          </Pressable>

          <LinearGradient
            colors={["#35D6FF", "#7A5CFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.topBtnFillWrap}
          >
            <Pressable style={styles.topBtnFill}>
              <Text style={styles.topBtnFillText}>Регистрация</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        {/* Chip */}
        <BlurView intensity={18} tint="dark" style={styles.chip}>
          <View style={styles.chipDot} />
          <Text style={styles.chipText}>{chipText}</Text>
        </BlurView>

        {/* Headline */}
        <Text style={styles.h1}>Virtual</Text>

        <Text style={styles.h2Wrap}>
          <Text style={styles.h2A}>Rea</Text>
          <Text style={styles.h2B}>lity</Text>
        </Text>

        {/* Subtitle */}
        <Text style={styles.sub}>
          Окунитесь в мир цифровых технологий с глубиной и присутствием.
          Физические ограничения растворяются в бесконечных возможностях.
        </Text>

        {/* CTA */}
        <View style={styles.ctaRow}>
          <Pressable style={styles.ctaPrimary}>
            <Text style={styles.ctaPrimaryText}>Войти в симуляцию</Text>
          </Pressable>

          <Pressable style={styles.ctaSecondary}>
            <Text style={styles.ctaSecondaryText}>Просмотр спецификаций</Text>
          </Pressable>
        </View>
      </View>

      {/* Right “panel” like on screenshot */}
      <View style={styles.panelWrap}>
        <LinearGradient
          colors={["rgba(157,92,255,0.25)", "rgba(53,214,255,0.08)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.panel}
        >
          <View style={styles.panelInner} />
        </LinearGradient>
      </View>

      {/* Decorative lines */}
      <View style={styles.lines} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },

  blob: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 999,
    opacity: 0.35,
    backgroundColor: "#7A5CFF",
  },
  blobLeft: {
    left: -140,
    top: 120,
    backgroundColor: "#35D6FF",
    opacity: 0.25,
  },
  blobRight: {
    right: -160,
    top: 220,
    backgroundColor: "#9D5CFF",
    opacity: 0.22,
  },

  topBar: {
    paddingTop: 18,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: { flexDirection: "row", alignItems: "center", gap: 10 },
  logo: { width: 22, height: 22, borderRadius: 6 },
  brandText: { color: "#EAF1FF", fontSize: 14, fontWeight: "700", letterSpacing: 1 },

  topActions: { flexDirection: "row", alignItems: "center", gap: 10 },
  topBtnGhost: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  topBtnGhostText: { color: "#DDE6FF", fontWeight: "600" },

  topBtnFillWrap: { borderRadius: 999, padding: 1 },
  topBtnFill: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  topBtnFillText: { color: "#EAF1FF", fontWeight: "700" },

  hero: {
    paddingHorizontal: 18,
    paddingTop: 42,
    maxWidth: 520,
  },

  chip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(53,214,255,0.25)",
    backgroundColor: "rgba(10,14,28,0.35)",
    overflow: "hidden",
  },
  chipDot: { width: 8, height: 8, borderRadius: 99, backgroundColor: "#35D6FF" },
  chipText: { color: "#BFEFFF", fontWeight: "700", fontSize: 12, letterSpacing: 0.5 },

  h1: {
    marginTop: 18,
    fontSize: 54,
    fontWeight: "800",
    color: "#EAF1FF",
    letterSpacing: -1.5,
  },

  h2Wrap: {
    marginTop: -8,
    fontSize: 56,
    fontWeight: "900",
    letterSpacing: -1.5,
  } as any,
  h2A: { color: "#35D6FF" },
  h2B: { color: "#9D5CFF" },

  sub: {
    marginTop: 14,
    color: "rgba(235,243,255,0.70)",
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 430,
  },

  ctaRow: { marginTop: 22, flexDirection: "row", gap: 12, flexWrap: "wrap" },
  ctaPrimary: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },
  ctaPrimaryText: { color: "#0A0F1E", fontWeight: "800" },

  ctaSecondary: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  ctaSecondaryText: { color: "#EAF1FF", fontWeight: "700" },

  panelWrap: {
    position: "absolute",
    right: 18,
    top: 170,
    width: Math.min(260, width * 0.42),
    height: 150,
    borderRadius: 22,
    overflow: "hidden",
  },
  panel: { flex: 1, padding: 1, borderRadius: 22 },
  panelInner: {
    flex: 1,
    borderRadius: 21,
    backgroundColor: "rgba(10, 8, 18, 0.55)",
    borderWidth: 1,
    borderColor: "rgba(157,92,255,0.28)",
  },

  lines: {
    position: "absolute",
    right: 18,
    top: 120,
    width: 44,
    height: 3,
    borderRadius: 99,
    backgroundColor: "rgba(53,214,255,0.6)",
    shadowOpacity: 0.3,
  },
});
