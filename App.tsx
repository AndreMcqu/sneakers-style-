import { StatusBar } from 'expo-status-bar';

import { Image, ListRenderItem, ScrollView, StyleSheet, Text, View } from 'react-native';
import PRODUITS from './assets/data';
import { CardInterFace } from './Components/CardInterFace';
import CardFlatlist from './Components/Flatlist';
import { SearchBar } from './Components/SearchBar';


export default function App() {

  return (
    <View style={styles.container}>
      <CardFlatlist />
    </View>
    // <>
    // <ScrollView >
    //     <View style={styles.container}>
    //     <View style={styles.SearchBar}>
    //       <SearchBar />
    //     </View>
    //     <View style={styles.warpBox}>
    //       {
    //         PRODUITS.map((Currentproduct: CardInterFace, key: number) => {
    //           return (
    //             <View style={styles.cardbox} key={Currentproduct.id}>
    //               <Card product={Currentproduct} />
    //             </View>
    //           )
    //         })
    //       }
    //     </View>
    // </View>
    //   </ScrollView>
    //   <StatusBar style="auto" />
    //   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
