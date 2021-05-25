import React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
import {scale} from './Exports';

const SkipButton = () => {

    return<View style={styles.skipButtonStyle}>
        <Text allowFontScaling={false} style={{color:'#2e3131',letterSpacing:1,fontSize:scale(14),fontFamily:'Gilroy-Light' }}>skip</Text>
    </View>
};

const styles = StyleSheet.create({
    skipButtonStyle:{
        height:'100%',
        borderWidth:1,
        borderColor:'#bdc3c7',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:20,
        shadowOffset:{ width:0, height:2},
        shadowColor:'#000',
        shadowOpacity:0.1,
        elevation:1
    }
});

export default SkipButton;