import { StyleSheet } from "react-native";

export const battaryStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    batteryBody: {
        position: 'relative',
        justifyContent: 'center',
        borderRadius: 8,
    },
    fill: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
    },
    batteryEdge: {
        width: 5,
        height: 20,
        borderRadius: 2,
        position: 'absolute',
        top: 9,
        right: -6,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
});