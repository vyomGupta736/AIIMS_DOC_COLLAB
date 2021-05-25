import React from 'react';
import {View,Text} from 'react-native';
import { scale, VerticalScale } from './Exports';

const TextC = (props) => {
    return (
        <Text allowFontScaling={false} 
         style={{fontSize:scale(15),fontFamily:'Gilroy-SemiBold',marginVertical:VerticalScale(4)}} >
            {props.children}
        </Text>
    )
};

export default TextC;