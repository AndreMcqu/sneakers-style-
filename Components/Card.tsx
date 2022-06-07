import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import { CardInterFace } from './CardInterFace'


const Card = ({ price, photo, title, desc, size, likes }: CardInterFace) => {
    return (
        <View style={styles.Card}>
            <CardHeader price={price} />
            <CardBody photo={photo} title={title} desc={desc} />
            <CardFooter size={size} likes={likes} />
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    Card: {
        borderColor: 'skyblue',
        borderWidth: 3,
        width: '48%',


    },
})