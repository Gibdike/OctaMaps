import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg } from 'expo';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';


const corAndar0 = 'transparent'
const corFundo0 = 'transparent'
class MapF extends React.Component {
  terreo(){
    this.props.navigation.navigate('BlocoFTerreo')
  }

  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>

            <Svg.Rect
              x={'0%'}
              y={'34%'}
              width={'50%'}
              height={'25%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() => this.terreo()}
            />

             <Svg.Rect
              x={'20%'}
              y={'40%'}
              width={'43%'}
              height={'30%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() => this.terreo()}
            />



          </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
export default withNavigationFocus(MapF)