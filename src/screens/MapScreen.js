import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
let currentRegion;


export const MapScreen = ({navigation}) => {
    
    const firstRegion = {
        latitude: -2.548926,
        longitude: 118.0148643,
        latitudeDelta: 20,
        longitudeDelta: 20,
    }

    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map} 
            initialRegion={ currentRegion ? currentRegion : firstRegion}
            onRegionChangeComplete={(region) => {
                currentRegion = region;
            }} />
            <TouchableOpacity style={{flex: 1, position: 'absolute', backgroundColor: 'white', borderRadius: 50, marginHorizontal: 20, marginTop: 40, paddingVertical: 10, paddingHorizontal: '8%'}} onPress={() => navigation.replace('Test')}>
                <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
                    Filter
                </Text>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'flex-end', bottom: '5%'}}>
                <TouchableOpacity style={{position: 'absolute', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4D9F2', paddingVertical: 5, paddingHorizontal: '20%', borderRadius: 50}} onPress={ null }>
                    <Text style={{fontSize: 20}}>
                        Tes Koneksi
                    </Text>
                </TouchableOpacity>
            </View>
                  
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});