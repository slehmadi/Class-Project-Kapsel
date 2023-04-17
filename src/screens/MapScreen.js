import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
            <TouchableOpacity style={styles.filterButton} onPress={null}>
                <Text style={styles.filterButtonText}>
                    Filter
                </Text>
            </TouchableOpacity>
            {testConnection ? (
                <View style={styles.resultTestConnectionContainer}>
                    <View style={styles.resultTestConnectionBlock}>
                        <TouchableOpacity style={styles.resultTestConnectionClose} onPress={() => setTestConnection(!testConnection)}>
                            <Text>---</Text>
                        </TouchableOpacity>
                        <View style={styles.resultMainContainer}>
                            <View style={styles.resultMainSection}>
                                <View style={styles.resultMainPart}>
                                    <ImageArrow degree='-90deg' />
                                    <View style={{flex: 1}}>
                                        <Text style={styles.resultMainSpeed}>14.56</Text>
                                        <Text style={{color: 'white'}}>MBps</Text>
                                    </View>
                                </View>
                                <View style={styles.resultMainPart}>
                                    <ImageArrow degree='90deg' />
                                    <View style={{flex: 1}}>
                                        <Text style={styles.resultMainSpeed}>8.56</Text>
                                        <Text style={{color: 'white'}}>MBps</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.resultCommentary}>Internet kamu cukup baik</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.detailedButton} onPress={() => navigation.replace('Test')}>
                            <Text style={styles.detailedButtonText}>{'<<detail>>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ) : (
                <View style={styles.testConnectionBlock}>
                    <TouchableOpacity style={styles.testConnectionButton} onPress={ () => setTestConnection(!testConnection) }>
                        <Text style={styles.testConnectionButtonText}>
                            Tes Koneksi
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            
                  
        </View>
    );
};

const ImageArrow = props => {
    return (
        <Image source={require('../../assets/arrow.png')}  style={[
            styles.imagePict,
            {
                transform: [{
                    rotate: props.degree
                }], 
            }
        ]} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    filterButton: {
        flex: 1, 
        position: 'absolute', 
        backgroundColor: 'white', 
        borderRadius: 50, 
        marginHorizontal: 20, 
        marginTop: 40, 
        paddingVertical: 10, 
        paddingHorizontal: '8%'
    },
    filterButtonText: { 
        alignSelf: 'center', 
        fontSize: 15, 
        fontWeight: 'bold'
    },
    testConnectionBlock: {
        flex: 1, 
        justifyContent: 'flex-end', 
        bottom: '5%'
    },
    testConnectionButton: {
        position: 'absolute', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#C4D9F2', 
        paddingVertical: 5, 
        paddingHorizontal: '20%', 
        borderRadius: 50
    },
    testConnectionButtonText: {
        fontSize: 20
    },
    resultTestConnectionContainer: {
        flex: 1, 
        justifyContent: 'flex-end'
    },
    resultTestConnectionBlock: {
        position: "absolute", 
        width: '100%', 
        backgroundColor: 'black', 
        borderTopRightRadius: 25, 
        borderTopLeftRadius: 25
    },
    resultTestConnectionClose: { 
        alignItems: 'center', 
        backgroundColor: 'white', 
        opacity: 0.9, 
        borderTopRightRadius: 50, 
        borderTopLeftRadius: 50,
    },
    resultMainContainer: { 
        alignItems: 'center', 
        marginVertical: '5%'
    },
    resultMainSection: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    resultMainPart: {
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    resultMainSpeed: {
        fontSize: 30, 
        color: 'white'
    },
    resultCommentary: {
        color: 'yellow', 
        marginVertical: '10%'
    },
    imagePict: {
        flex: 1, 
        aspectRatio: 1, 
        alignSelf: 'center', 
        marginLeft: '2%'
    },
    detailedButton: {
        alignItems: 'center', 
        marginBottom: '5%'
    },
    detailedButtonText: {
        color: 'white', 
        fontSize: 15
    }
});