import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const cardStyles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: colors.white,
        padding: 20,
        marginBottom: 10,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 200,
        width: '48%',
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        },
    day: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.black,
    },
    month: {    
        fontSize: 16,
        color: colors.gray,
    },
    

})