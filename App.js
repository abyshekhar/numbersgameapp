import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    console.log('entered')
    return <AppLoading startAsync={fetchFonts} onFinish={() => { setDataLoaded(true) }}
      onError={(err) => { console.log(err) }} />
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }
  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }
  const GameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }
  console.log(userNumber)
  let content = <StartGameScreen onStartGame={startGameHandler} />
  //temp
  //content = <GameOverScreen roundsNumber={1} userNumber={1} onRestart={configureNewGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Header title="Guess a Number" />
        {content}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
