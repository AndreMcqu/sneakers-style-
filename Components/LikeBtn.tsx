import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardInterFace } from './CardInterFace';
import Ionicons from '@expo/vector-icons/Ionicons';

export const LikeBtn = ({likes}:CardInterFace) => {
    const [like, setLike] = useState<boolean>(false);

  return (
      <View style={styles.container}>
    <Ionicons onPress={() => setLike((isLiked) => !isLiked)}
    name={like ? "heart" : "heart-outline"}
    size={18}
    color={like ? "blue" : "black"}
  />
  <Text>{likes}</Text>
  </View>
    );
  };

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});