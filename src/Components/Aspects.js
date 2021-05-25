import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { VerticalScale,scale } from '../Components/Exports';

const Aspects = ({title,selected,selectItem}) => {
    return (
        <TouchableOpacity onPress={() => selectItem()}
         style={{height:VerticalScale(40),borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:VerticalScale(5)}}>
            <View style={selected?{width:scale(10),height:scale(10),borderRadius:scale(10),borderWidth:1,backgroundColor:'cyan'}:{width:scale(10),height:scale(10),borderRadius:scale(10),borderWidth:1}} />
            <Text allowFontScaling={false} style={{fontSize:scale(15),fontFamily:'Gilroy-SemiBold'}} >{title}</Text>
        </TouchableOpacity>
    )
};

export default Aspects;