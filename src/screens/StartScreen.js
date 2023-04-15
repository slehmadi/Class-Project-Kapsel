import { View, Text, Button, Image } from "react-native";
import { StyleSheet } from 'react-native';

export const StartScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>SuS (Susah Sinyal)</Text>
            <Image source={require('../../assets/sus-icon.png')} />
            <Button title='Next' onPress={() => navigation.replace('Home')}/>
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
});