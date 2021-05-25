import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {scale} from './Exports';

const InputField = ({placeholderText,legendText,secure,autoFocus,type,value,handleTextChange}) => {
    const[focused,setFocused] = useState(false);
    // console.log(focused);
    return <View style={focused?styles.fieldSetFocused:styles.fieldSetBlured}>
           <View style={{flex:1}}></View>
           <View style={{position:'relative',flex:10}}>
               <TextInput
                value = {value}
                onChangeText = {(value) => handleTextChange(value)}
                allowFontScaling={false}
                autoFocus={false}
                style={styles.inputStyle}
                placeholder={placeholderText}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                autoCapitalize='none'
                // autoFocus={autoFocus}
                keyboardType={type}
                secureTextEntry={secure}
                importantForAutofill='no'
                />
                <Text style={focused?styles.legendFocused:styles.legendBlured}>{legendText}</Text>
            </View>
           <View style={{flex:1}}></View>
           
    </View>
};

const styles = StyleSheet.create({
    inputStyle:{
        top:2,
        left:0,
        right:0,
        bottom:0,
        borderRadius:2,
        position:'absolute',
        color:'#6c7a89',
        flex:1,
        fontFamily : "Gilroy-Light",
        fontSize : scale(15),
        letterSpacing : 1,
        textDecorationLine : 'none'
    },fieldSetFocused:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        borderColor:'darkcyan',
        borderWidth:1,
        borderRadius:5
    },legendFocused:{
        position: 'absolute',
        top: -10,
        left: 0,
        fontWeight: '900',
        backgroundColor: 'white',
        color:'darkcyan',
        fontFamily : "Gilroy-Light",
        fontSize : scale(14)
    },fieldSetBlured:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        borderRadius: 5,
        backgroundColor:'#eeeeee',
    },legendBlured:{
        display:"none"
    }
});

export default InputField;