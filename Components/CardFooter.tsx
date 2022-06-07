import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardBottom } from './CardInterFace';
import { LikeBtn } from './LikeBtn';

const CardFooter = ({ size, likes }: CardBottom) => {
    return (
        <View style={styles.CardFooter}>
            <View>
                <Text style={styles.FooterText}>Taille {size}</Text>
            </View>
            <View style={styles.FooterLike}>
                <LikeBtn likes={likes} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    CardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    FooterText: {
        color: 'gray',
        fontSize: 15,
        left: 2,
    },
    FooterLike: {
        color: 'gray',
        fontSize: 15,
        right: 10,
        justifyContent: 'center'
    },
})

export default CardFooter