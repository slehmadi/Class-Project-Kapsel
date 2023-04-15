import { View, Text, Button } from "react-native";
import { styles } from "../helpers/Styles";

export const TestScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text>This is TestScreen</Text>
        <Button title="Go to Home" onPress={() => navigation.replace('Home')} />
      </View>
    );
  }