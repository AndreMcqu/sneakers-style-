import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PRODUITS from '../assets/data';
import Card from './Card';
import { CardInterFace } from './CardInterFace';
import { SearchBar } from './SearchBar';

const CardFlatlist = () => {

  const [search, setSearch] = React.useState('')

    const update = (text: string) => {
        setSearch(text);
    };

    const filtered = !search
        ? PRODUITS
        : PRODUITS.filter((shoe) =>
            shoe.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handler={update}/>
      <FlatList style={styles.flatList} columnWrapperStyle={{ justifyContent: "space-between" }}  numColumns={2}
        data={filtered} renderItem={({ item }) =>
              <Card price={item.price} photo={item.photo} title={item.title} desc={item.desc}  size={item.size} likes={item.likes} />
        } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
  flatList:{
  },
});

export default CardFlatlist;