import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, VerticalScale} from '../Components/Exports';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class EnterComponent extends React.Component{
    render(){
        return (
            <View style={{height : VerticalScale(75),  marginBottom : VerticalScale(10),flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:20,borderWidth:1,borderColor:'mediumturquoise',overflow:'hidden'}}>
                    <View style={{flex:1, flexDirection : "column"}}>
                    <View style={{flex:2.7,flexDirection:'row', justifyContent:'center',alignItems:'center',backgroundColor : 'mediumturquoise'}}>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Light',fontSize:scale(13),color : "white",textAlignVertical:'center'}}>{!(this.props.fieldName === 'date in format 23/07/1909')?" * "+this.props.fieldName:'Enter date'}</Text>
                    </View>
                    <View style={{flex:4}}>
                        <TextInput 
                            keyboardType={this.props.type}
                            value = {this.props.value}
                            onChangeText = {(text) => this.props.handleInput(text)}
                            placeholder={"enter "+this.props.fieldName} style={{fontFamily : "Gilroy-Light", color : "black", fontSize : scale(15), flex:1,textDecorationLine:'none'}} />
                    </View>
                    </View>
                </View>
                <View style={{flex:1}}></View>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     inputFocused : {

//     }
// })