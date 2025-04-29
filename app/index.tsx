import { View } from "react-native";
import StyledButton from "../components/buttons/styledButton";
import { mainStyles } from "./mainStyle";

export default function HomeScreen() {
  return (
    <View style={mainStyles.container}>
      <StyledButton href="/ChargingList" text="View All Charges" />
      <StyledButton href="/Chart" text="View second user details" />
    </View>
  );
}

