import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const buttonStyles = StyleSheet.create({
  backLink: {
    fontSize: 16,
    color: colors.buttonTxt,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: colors.buttonBg,
    padding: 20,
    display: "flex",
    width: "100%",
  },
});
