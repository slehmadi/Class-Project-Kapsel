import { Image, View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { useState } from "react";
import { checkDetail } from "../data/checkDetailed";
let currentRegion;


export const MapScreen = ({navigation}) => {
    const [testConnection, setTestConnection] = useState(false);

    if (checkDetail[0] == true) {
        setTestConnection(true);
        checkDetail.pop()
    }
    
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
            <TouchableOpacity style={{flex: 1, position: 'absolute', backgroundColor: 'white', borderRadius: 50, marginHorizontal: 20, marginTop: 40, paddingVertical: 10, paddingHorizontal: '8%'}} onPress={null}>
                <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
                    Filter
                </Text>
            </TouchableOpacity>
            {testConnection ? (
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View style={{position: "absolute", width: '100%', backgroundColor: 'black', borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'white', opacity: 0.9, borderTopRightRadius: 50, borderTopLeftRadius: 50}} onPress={() => setTestConnection(!testConnection)}>
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
                                <Text style={{color: 'yellow', marginVertical: '10%'}}>Internet kamu cukup baik</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{alignItems: 'center', marginBottom: '5%'}} onPress={() => navigation.replace('Test')}>
                            <Text style={{color: 'white', fontSize: 15}}>{'<<detail>>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ) : (
                <View style={{flex: 1, justifyContent: 'flex-end', bottom: '5%'}}>
                    <TouchableOpacity style={{position: 'absolute', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4D9F2', paddingVertical: 5, paddingHorizontal: '20%', borderRadius: 50}} onPress={ () => setTestConnection(!testConnection) }>
                        <Text style={{fontSize: 20}}>
                            Tes Koneksi
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            
                  
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