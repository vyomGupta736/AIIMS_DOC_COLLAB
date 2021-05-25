import React from 'react';
import {View,Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import InputField from '../Components/Input';
import SkipButton from '../Components/SkipButton';
import HeaderButton from '../Components/HeaderButton';
import {scale} from '../Components/Exports';

export default class Signup extends React.Component{
    render(){
        return(
            <View
            style={{flex:1,backgroundColor:'white'}}>
            <StatusBar backgroundColor="darkcyan" />
        <View style={{flex:1}}></View>
         <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
             <View style={{flex:1}}></View>
             <View style={{flex:7}}>
             <Text allowFontScaling={false} style={{fontSize:scale(33),fontWeight:'900',color:"darkcyan",fontFamily:'Gilroy-SemiBold'}}>Sign In</Text>
             </View>
             <View style={{flex:1.7}}>
                 <View style={{flex:2}}></View>
                <TouchableOpacity style={{flex:2}} onPress = {() => {this.props.navigation.navigate("Entry")}} >
                    <SkipButton />
                </TouchableOpacity>
                 <View style={{flex:2}}></View>
             </View>
             <View style={{flex:1}}></View>
         </View>
        <View style={{flex:.3,flexDirection:'row'}}> 
            <View style={{flex:1}}></View>
            <View style={{flex:9}}>
            <Text style={{color:'#bfbfbf',fontSize:scale(17), fontFamily:'Gilroy-Light'}}>Please sign in before data entry</Text>
            </View>
        </View>
        <KeyboardAvoidingView enabled={false}
         style={{flex:5}} >
        
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField placeholderText="email address" legendText="email" secure={false} autoFocus={false} type="default" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField placeholderText="password" legendText="password" secure={false} autoFocus={false} type="default" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        
        <View style={{flex:1.5}}></View>
        </KeyboardAvoidingView>
        <View style={{flex:1.5}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
           <TouchableOpacity activeOpacity={0.8} style={{flex:25,borderRadius:scale(10),overflow:'hidden'}}>
               <HeaderButton headerText="Sign In" color="darkcyan" />
           </TouchableOpacity>
               <View style={{flex:1}}></View>
           </View>
           <View style={{flex:0.1}}></View>
           <View style={{flexDirection:'row',flex:1.3,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontFamily:'Gilroy-Light',}}>Don't have Account?</Text>
               <TouchableOpacity onPress={() => {this.props.navigation.navigate('Signup')}}>
                   <Text style={{color:'darkcyan',fontSize:scale(17),marginLeft:scale(10),fontFamily:'Gilroy-Light'}}>Signup</Text>
                </TouchableOpacity>
           </View>
       </View>


      </View>
        )
    }
}