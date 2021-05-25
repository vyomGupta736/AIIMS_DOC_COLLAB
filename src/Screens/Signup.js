import React from 'react';
import {View,Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import InputField from '../Components/Input';
import SkipButton from '../Components/SkipButton';
import HeaderButton from '../Components/HeaderButton';
import {scale} from '../Components/Exports';
import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('users');

export default class Signup extends React.Component{
    state = {
       name : '',
       email : '',
       password : '',
       mobile : ''
    }
      
     handleInput = ({value,field}) => {
         switch(field)
         {
             case "name":
                 this.setState({name : value});
                 break;
             case "email":
                 this.setState({email : value});
                 break;
             case "password":
                this.setState({password : value});
                break;
             case "mobile":
                 this.setState({mobile : value});
                 break;
             default : 
             return;
         }
     }

     handleSubmit = async () => {
         console.log(" in handle submit");
         try{
          const response = await ref.get();
          response._docs.map(user => {
              console.log(user._data);
          }) 
         }catch(err)
         {
             console.log(err);
         }
     }
     
    render(){
        return(
            <View
            style={{flex:1,backgroundColor:'white'}}>
            <StatusBar backgroundColor="darkcyan" />
        <View style={{flex:1,borderColor:'blue'}}></View>
         <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
             <View style={{flex:1}}></View>
             <View style={{flex:7}}>
             <Text allowFontScaling={false} style={{fontSize:scale(35),fontWeight:'900',color:'darkcyan',fontFamily:'Gilroy-SemiBold'}}>Sign Up</Text>
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
            <Text style={{color:'#bfbfbf',fontSize:scale(15),fontFamily:'Gilroy-Light'}}>Please fill up this Sign up Form</Text>
            </View>
        </View>
        <KeyboardAvoidingView enabled={false}
         style={{flex:5,borderColor:'red'}} >
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row',}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField value={this.state.name} handleTextChange = {(value) => this.handleInput({value,field : "name"})}
              placeholderText="Divyank Bansal" legendText="Your Name" secure={false} autoFocus={true} type="default" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField value={this.state.email} handleTextChange = {(value) => this.handleInput({value,field : "email"})}
             placeholderText="Email address" legendText="email" secure={false} autoFocus={false} type="email-address" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField value={this.state.password} handleTextChange = {(value) => this.handleInput({value,field : "password"})}
             placeholderText="Password" legendText="password" secure={true} autoFocus={false} type="default" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:14}}>
            <InputField value={this.state.mobile} handleTextChange = {(value) => this.handleInput({value,field : "mobile"})}
             placeholderText="Mobile number" legendText="mobile number" secure={false} autoFocus={false} type="phone-pad" />
                </View>
                <View style={{flex:1}}></View>
            </View>
        </View>
        <View style={{flex:1.5}}></View>
        </KeyboardAvoidingView>
        <View style={{flex:1.5}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
           <TouchableOpacity onPress = {() => this.handleSubmit()}
            activeOpacity={0.8} style={{flex:25,borderRadius:scale(10),overflow:'hidden'}}>
               <HeaderButton headerText="Sign Up" color="darkcyan"/>
           </TouchableOpacity>
               <View style={{flex:1}}></View>
           </View>
           <View style={{flex:0.1}}></View>
           <View style={{flexDirection:'row',flex:1.2,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontFamily:'Gilroy-Light'}}>Already have Account?</Text>
               <TouchableOpacity onPress={() => {this.props.navigation.navigate('Signin')}}>
                   <Text style={{color:'darkcyan',fontSize:scale(18),marginLeft : scale(10),fontFamily:'Gilroy-Light'}}>Signin</Text>
                </TouchableOpacity>
           </View>
       </View>


      </View>
        )
    }
}