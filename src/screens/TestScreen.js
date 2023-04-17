import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { checkDetail } from "../data/checkDetailed";

export const TestScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: '5%', alignItems: 'center', backgroundColor: 'white', opacity: 0.9}} onPress={() => {checkDetail.push(true); navigation.replace('Map')}}>
                <Text>---</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginVertical: '5%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <Image source={require('../../assets/arrow.png')}  style={{flex: 1, aspectRatio: 1, transform: [{rotate: '-90deg'}], alignSelf: 'center', marginLeft: '2%'}} />
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 30, color: 'white'}}>14.56</Text>
                            <Text style={{color: 'white'}}>MBps</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <Image source={require('../../assets/arrow.png')}  style={{flex: 1, aspectRatio: 1, transform: [{rotate: '90deg'}], alignSelf: 'center', marginLeft: '2%'}} />
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 30, color: 'white'}}>8.56</Text>
                            <Text style={{color: 'white'}}>MBps</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color: 'yellow', marginTop: '10%'}}>Internet kamu cukup baik</Text>
                </View>
            </View>
            <View style={{marginBottom: '15%', marginLeft: '5%'}}>
              <Text style={{fontSize: 20, color: 'white', marginBottom: '3%'}}>Klien</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Lokasi: Bandung, ID</Text>
              <Text style={{fontSize: 15, color: 'white'}}>IP: 111.11.111.11</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Provider: Telkomsel</Text>
            </View>
            <View style={{marginBottom: '15%', marginLeft: '5%'}}>
              <Text style={{fontSize: 20, color: 'white', marginBottom: '3%'}}>Latency</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Unloaded: 40 ms</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Loaded: 498 ms</Text>
            </View>
            <View style={{marginBottom: '15%', marginLeft: '5%'}}>
              <Text style={{fontSize: 20, color: 'white', marginBottom: '3%'}}>Server</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Jakarta, JKT</Text>
              <Text style={{fontSize: 15, color: 'white'}}>Singapore, SG</Text>
            </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    },
});