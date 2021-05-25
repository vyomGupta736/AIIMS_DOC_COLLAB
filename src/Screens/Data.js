import React from 'react';
import {View,Text,Image, Button,StatusBar, TouchableOpacity} from 'react-native';
import {scale, VerticalScale} from '../Components/Exports';
import HeaderButton from '../Components/HeaderButton';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { selectedItem } from '../Actions/dataActions';
import TextC from '../Components/TextC';

class Data extends React.Component{

    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <StatusBar backgroundColor="darkcyan" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Entry")}
                  activeOpacity={0.8} style={{height:VerticalScale(60),width:'100%',marginBottom:VerticalScale(10)}}>
                  <HeaderButton headerText="Enter more Data" color="mediumturquoise" />
                </TouchableOpacity>
                <ScrollView>
                    {this.props.data.map((data,) => {
                        return (
                            <TouchableOpacity 
                                key = {data.patientId}
                                onPress={() => { 
                                this.props.selectedItem(data);
                                this.props.navigation.navigate('IndividualData');
                             }}
                              style={{height:VerticalScale(150),borderWidth:1,marginVertical:VerticalScale(10),flexDirection:'row'}} >
                                <View style={{flex:1,borderWidth:1}} >
                                    <Image source={{uri : data.image_patient_url}} resizeMode="contain" style={{height:'100%',width:'100%'}} />
                                </View>
                                <View style={{flex:2,borderWidth:1,alignItems:'center',justifyContent:'space-evenly'}} >
                                    <TextC>{data.patientId}</TextC>
                                    <TextC>{data.patientName}</TextC>
                                    <TextC>{data.patientAge}</TextC>
                                    <TextC>{data.patientAddress}</TextC> 
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            
        )
    }
}

const mapStateToProps = state => {
    console.log("from data component")
    console.log(state.dataReducer.data);
    return {
        data : state.dataReducer.data
    }
}

export default connect(mapStateToProps,{ selectedItem })(Data);


{/* <StatusBar backgroundColor="darkcyan" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Entry")}
                  activeOpacity={0.8} style={{height:VerticalScale(60),width:'100%',marginVertical:VerticalScale(10)}}>
                  <HeaderButton headerText="Enter more Data" color="mediumturquoise" />
                </TouchableOpacity>
                <Text style={{fontFamily:'Gilroy-Light',fontSize : scale(18),alignSelf:'center',marginBottom:VerticalScale(10)}}>THIS IS VIEW PAGE</Text>
                {patients.map((patient) => {
                    return <ShowData data = {patient} key={patient.ID} />
                })} */}
                