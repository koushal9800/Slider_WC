import React   from  'react';

import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';

import { interpolateColor } from "react-native-redash";

import { Value } from 'react-native-reanimated';

import Slide from './slide';


const { width, height } = Dimensions.get("window");


const Onboarding =()=>{

    const x= new Value(0);
   const onScroll = {
    nativeEvent: {
      contentInset: {bottom, left, right, top},
      contentOffset: {x, y},
      contentSize: {height, width},
      layoutMeasurement: {height, width},
      zoomScale
    }
  }
    const backgroundColor = interpolateColor(x, {
        inputRange:[0,width, width*2, width*3],
        outputRange: ["#1BCA9B", "#0ABDE3", "#F9DDA4", "#AE1438"]
    });


    return(
        <View style={styles.container}>
                <View style={[styles.slider, {backgroundColor}]}>
                    <Animated.ScrollView horizontal={true}  
                    pagingEnabled={true} 
                    showsHorizontalScrollIndicator={false}
                    {...{onScroll}}
                    
                    >
                        <Slide label="Relaxed" />
                        <Slide  label="PlayFull" right />
                        <Slide  label="Excentric" />
                        <Slide  label="Funky" right />
                    </Animated.ScrollView>

                    </View>

                <View style={styles.footer}>

                    <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'#1BCA9B'}} />

                        <View style={{flex:1, backgroundColor:'white', borderTopLeftRadius:80}}>

                        </View>
                    

                </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    slider:{
        height:0.61 * height,
        backgroundColor:'#1BCA9B',
        borderBottomRightRadius:80
        
    },
    footer:{
        flex:1
    }
})

export default Onboarding;