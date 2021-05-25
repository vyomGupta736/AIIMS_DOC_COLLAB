import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {scale} from './Exports';

const HeaderButton = ({headerText,color}) => {
    return <View style={{...styles.viewStyle, backgroundColor : color}}>
             <Text style={{color:'white',fontSize:scale(18),fontFamily:'Gilroy-SemiBold'}}>{headerText}</Text>
         </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }
});

export default HeaderButton;