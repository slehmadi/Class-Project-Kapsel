import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { checkDetail } from "../data/checkDetailed";

export const TestScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.resultTestConnectionClose} onPress={() => {checkDetail.push(true); navigation.replace('Map')}}>
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
            <View style={styles.detailedContainer}>
              <Text style={styles.detailedTitle}>Klien</Text>
              <Text style={styles.detailedPoint}>Lokasi: Bandung, ID</Text>
              <Text style={styles.detailedPoint}>IP: 111.11.111.11</Text>
              <Text style={styles.detailedPoint}>Provider: Telkomsel</Text>
            </View>
            <View style={styles.detailedContainer}>
              <Text style={styles.detailedTitle}>Latency</Text>
              <Text style={styles.detailedPoint}>Unloaded: 40 ms</Text>
              <Text style={styles.detailedPoint}>Loaded: 498 ms</Text>
            </View>
            <View style={styles.detailedContainer}>
              <Text style={styles.detailedTitle}>Server</Text>
              <Text style={styles.detailedPoint}>Jakarta, JKT</Text>
              <Text style={styles.detailedPoint}>Singapore, SG</Text>
            </View>
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
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    },
    resultTestConnectionClose: {
      marginTop: '5%', 
      alignItems: 'center', 
      backgroundColor: 'white', 
      opacity: 0.9, 
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
    detailedContainer: {
      marginBottom: '15%', 
      marginLeft: '5%'
    },
    detailedTitle: {
      fontSize: 20, 
      color: 'white', 
      marginBottom: '3%'
    },
    detailedPoint: {
      fontSize: 15, 
      color: 'white'
    }
});