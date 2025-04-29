import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const chartStyles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },

  chartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.black,
  },
  chartSubtitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    color: colors.red,
    textAlign: "center",
    marginTop: 20,
  },
  noData: {
    fontSize: 16,
    color: colors.gray,
    textAlign: "center",
    marginTop: 20,
  },
});
