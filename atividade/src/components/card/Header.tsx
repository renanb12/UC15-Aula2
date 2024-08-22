import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";


const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <Text style={styles.title}>Renan</Text>
            <Image
                style={styles.img}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2311/2311531.png" }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        width: '100%',
        height: 50,
        
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#999"
    },

    title: {
        fontSize: 20
    },

    img: {
        width: 30,
        height: 30
    }
});

export default Header;