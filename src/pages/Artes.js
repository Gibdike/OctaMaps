import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import NewHeader from '../component/NewHeader';

export default class Artes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../imagens/BlocoB.png')} style={{width: '100%', height: '100%'}}>
             <NewHeader></NewHeader>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
