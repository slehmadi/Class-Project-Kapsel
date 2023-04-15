import { View, Text, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';

export const HomeScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <View style={styles.titleSpace}>
                <Text style={styles.titleText}>
                    Selamat Datang!
                </Text>
            </View>
            <View style={styles.descSpace}>
                <Text style={styles.descText}>
                    {" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonSpace}  onPress={() => navigation.replace('Test')}>
                <Text style={styles.buttonText}>Mulai</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleSpace: {
        flex: 2, 
        width: '100%', 
        height: '100%', 
        justifyContent: "center", 
        paddingTop: '7%', 
        marginLeft: '10%',
    }, 
    titleText: {
        fontSize: 40, 
        paddingRight: '50%',
    },
    descSpace: {
        flex: 6,
    },
    descText: {
        fontSize: 20, 
        paddingTop: '4%', 
        paddingHorizontal: '4%', 
        textAlign: "justify", 
        letterSpacing: 2,
    },
    buttonSpace: {
        backgroundColor: 'black', 
        paddingHorizontal: '38%', 
        paddingVertical: '4%',
        marginBottom: '10%',
        borderRadius: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});