import { StyleSheet, Text, View, ViewBase, SafeAreaView, TextInput, Pressable } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo'
import { searchhandler } from './CardInterFace';

export const SearchBar: React.FC<searchhandler> = ({handler}) => {
    return (
        <View style={styles.search}>
            <View>
                <TextInput
                    placeholder='Looking for something... ?'
                    onChangeText={handler} />
            </View>
            <View style={styles.ctmbtn}>
                <Entypo name='magnifying-glass' />
            </View>
        </View >
    )
};


// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const PRODUITS = document.getElementById('PRODUITS');
// const search = document.getElementById('search');

// let searchProduct = [];

// const search.addEventListener = (selection: any) => {
//     const searchString = selection.target.value.toLowerCase();

//     const filteredProducts = searchProduct.filter((prod) => {
//         return (prod.brand.toLowerCase().includes(searchString)
//         );
//     });
//     displayProducts(filteredProducts);
// })




const styles = StyleSheet.create({
    search: {
        
        height: 50,
        backgroundColor: 'lightgray',
        borderColor: 'skyblue',
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    ctmbtn: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        justifyContent: 'center',
        borderRadius: 10,
        height: 40,
        width: 60,
        left: 5,
    },
});