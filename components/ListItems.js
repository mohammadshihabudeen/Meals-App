import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItems = ({ meal }) => {
    return (
        <View>
            {meal.map((item, index) => (
                <View key={index} style={styles.ListItem}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    ListItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497"
    },
    itemText: {
        color: "#351401",
        textAlign: "center"
    }
});

export default ListItems;
