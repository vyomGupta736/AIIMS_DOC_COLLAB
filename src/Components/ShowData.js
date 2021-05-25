import React from 'react';
import {View,Text,Image} from 'react-native';
import { VerticalScale, scale } from './Exports';

const ShowData = ({data}) => {
    // console.log("from Show data comp");
    // console.log(data);
   return(
       <View style={{padding:VerticalScale(5),borderWidth:1,borderColor:'gainsboro',shadowColor:'black',shadowOffset:{width:10,height:10},shadowOpacity:.9}}>
           <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',fontFamily:'Gilroy-Light',marginVertical:VerticalScale(4)}}>Patient's name is : {data.Name}</Text>
           <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',fontFamily:'Gilroy-Light',marginVertical:VerticalScale(4)}}>Patient's ID is : {data.ID}</Text>
           <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',fontFamily:'Gilroy-Light',marginVertical:VerticalScale(4)}}>Patient's age is : {data.Age}</Text>
           <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',fontFamily:'Gilroy-Light',marginVertical:VerticalScale(4)}}>Patient's address is : {data.Address}</Text>
           <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',fontFamily:'Gilroy-Light',marginVertical:VerticalScale(4)}}>Patient's gender is : {data.Gender}</Text>
           <Image source={{uri : data.image}} style={{width:'100%',height:VerticalScale(200)}} />
       </View>
   )
}

export default ShowData;