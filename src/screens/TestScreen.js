import { View, Text, Button } from "react-native";
import { StyleSheet } from 'react-native';

export const TestScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text>This is TestScreen</Text>
        <Button title="Go to Home" onPress={() => navigation.replace('Home')} />
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