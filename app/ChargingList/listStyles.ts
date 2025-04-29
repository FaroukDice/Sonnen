import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const listStyles = StyleSheet.create({
  container: { 
    paddingHorizontal: 16,
    paddingTop: 40, 
    paddingBottom: 120,
  },

  loader: { flex: 1, justifyContent: "center" },
  error: { color: colors.red, textAlign: "center", marginTop: 20 },
});
