import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import data from '../cities';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { VerticalScale, scale } from './Exports';

class SelectCity extends React.Component{

    state={
        city : '',
        searchedCities : [],
        focused : false
    }

    searchCity = () => {

    }

    searchcities = () => {
        var searchedCities = data.filter(city => {
            if(this.state.city.length >= 1)
            {
                return this.state.city.toLowerCase() === city.toLowerCase().substring(0,this.state.city.length);   
            }
        });
        this.setState({ searchedCities : searchedCities});
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'white',position:'relative'}}>
               <TextInput 
                style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),flex:1,borderWidth:1,height:VerticalScale(50)}}
                allowFontScaling={false}
                placeholder="Type your city first letters"
                onBlur={() => this.setState({focused : false})}
                onFocus={() => this.setState({focused : true})}
                value={this.state.city}
                onChangeText={value => this.setState({city : value}, () => {this.searchcities(); this.props.choosenCity(value) })}
                 />
               <View style={this.state.focused?{width:'100%',zIndex:1000}:{display:'none'}}>
               
                    {this.state.searchedCities.map(city => {
                        return (
                            <View style={{height:VerticalScale(40),width:'100%',borderBottomWidth:1,borderColor:'white'}}>
                                <TouchableOpacity onPress={() => this.setState({city : city}, () => this.props.choosenCity(city)) }
                                    style={{width:'100%',height:'100%',backgroundColor:'mediumturquoise',justifyContent:'center'}}>
                                    <Text allowFontScaling={false} style={{color : 'white',fontSize:scale(15),textAlignVertical:'center',fontFamily:'Gilroy-SemiBold'}} >{city}</Text>
                                </TouchableOpacity>
                            </View>  
                        ) 
                    })}
                   
               </View>
            </View>
        )
    }
}

export default SelectCity;