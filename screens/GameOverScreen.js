import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          resizeMode='cover'
          // source={require('../assets/success.png')}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/77/Four_Peaks_Summit.JPG'
          }}
        />
      </View>
      <BodyText>Number of rounds:{props.roundsNumber}</BodyText>
      <BodyText>Number was:{props.userNumber}</BodyText>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'gray',
    overflow: 'hidden',
    marginVertical: 30
  }
});

export default GameOverScreen;
