import { View, Text, Button } from "react-native";
import { styles } from "../helpers/Styles";

export const HomeScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>This is HomeScreen</Text>
        <Button title='go to test' onPress={() => navigation.replace('Test')}/>
      </View>
    );
  };