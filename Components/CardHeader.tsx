import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Cardprice } from './CardInterFace';


const CardHeader = ({price}: Cardprice) => {
  return (
    <View style={styles.CardHeader}>
    <Text style={styles.headerText}>{price} €</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerText: {
    color: 'gray',
    fontSize: 20,
    right: 10,
  },
});

export default CardHeader;