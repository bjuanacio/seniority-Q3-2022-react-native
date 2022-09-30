import { StyleSheet } from "react-native";

export const teamRosterStyles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        padding: 4,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    item1: {
        flex: 3
    },
    winner: {
        backgroundColor: 'green'
    },
    loser: {
        backgroundColor: 'gray'
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#CCC8D1',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
}); 
