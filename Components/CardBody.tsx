import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cardbody} from './CardInterFace';

const CardBody = ({ photo, title, desc }: Cardbody ) => {
  return (
    <View style={styles.CardBody}>
      <View style={styles.bodyImage}>
        <Image style={styles.cardImage} source={photo} />
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.bodyTextTitle}>{title}</Text>
        <Text numberOfLines={4} style={styles.bodyText}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardBody: {
    flex: 10,

  },
  bodyImage: {
    height: 150,
    borderColor: 'skyblue',
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  cardImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'center'
  },
  bodyView: {
    flex: 1,
    overflow: 'hidden',
  },
  bodyTextTitle: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 18,
    top: 10,
  },
  bodyText: {
    flex: 4,
    justifyContent: 'center',
    fontSize: 15,top: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
});

export default CardBody;