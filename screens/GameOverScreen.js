import React from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import GameScreen from './GameScreen'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'
const GameOverScreen = props => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText>The Game is over!</TitleText>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode="cover" source={require('../assets/success.png')} />
                    </View>
                    <View style={styles.resultContainer}>
                        <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess
                number <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
                    </View>

                    <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,

    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        marginHorizontal: 30,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen