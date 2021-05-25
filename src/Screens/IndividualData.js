import React from 'react';
import {View,TouchableOpacity,BackHandler,ActivityIndicator, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { VerticalScale, scale } from '../Components/Exports';
import HeaderButton from '../Components/HeaderButton';
import { connect } from 'react-redux';
import TextC from '../Components/TextC';
import { uploadData } from '../Actions/dataActions';

 class IndividualData extends React.Component {
     
    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.selectedItem.UPLOADED)
        {
            Alert.alert("Uploaded successfully");
        }
    }
     render()
     {
        return (
            <View style={{flex:1,backgroundColor:'white',position:'relative',flexDirection:'row'}} >
                {this.props.loading?<View style={{position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:1000}} >
                        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'gray',opacity:0.4}} />
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                            <View style={{height:'25%',width:'80%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                                <ActivityIndicator size="large" />
                                <TextC>Please wait your data is being uploaded</TextC>
                            </View>
                        </View>
                      </View>
                      :null}
                <View style={{flex:1}} />
                <View style={{flex:20,borderWidth:1}} >
                    <ScrollView style={{flex:1}} >
                        <View style={{marginVertical:VerticalScale(20),borderWidth:1,padding:scale(10)}} >
                           <TextC> patient's image url is : " {this.props.selectedItem.image_patient_url} "</TextC>
                           <TextC> patient's CT Brain image url is : "{this.props.selectedItem.image_ctBrain_url} "</TextC>
                           <TextC> patient's CT Brain video url is : "{this.props.selectedItem.video_ctBrain_url}</TextC>
                           <TextC> patient's MRI Brain image url is : "{this.props.selectedItem.image_MRIbrain_url}</TextC>
                           <TextC> patient's MRI Brain video url is : "{this.props.selectedItem.video_MRIbrain_url}</TextC>
                           <TextC> patient's CT Angio image url is : "{this.props.selectedItem.image_CTAngio_url}</TextC>
                           <TextC> patient's CT Angio video url is : "{this.props.selectedItem.video_CTAngio_url}</TextC>
                           <TextC> patient's Carotid Doppler image url is : "{this.props.selectedItem.image_carotidDoppler_url}</TextC>
                           <TextC> patient's Physician notes image url is : "{this.props.selectedItem.image_physicianNotes_url}</TextC>
                           <TextC> patient's CT Photo image url is : "{this.props.selectedItem.image_CTPhoto_url}</TextC>
                           <TextC> patient's image_postThrmbolysis_ctScan url is : "{this.props.selectedItem.image_postThrmbolysis_ctScan_url}</TextC>
                           <TextC> patient's image_toastClassification url is : "{this.props.selectedItem.image_toastClassification_url}</TextC>
                           <TextC> patient's ECG image url url is : "{this.props.selectedItem.image_ECG_url}</TextC>
                           <TextC> patient's ECHO image url url is : "{this.props.selectedItem.image_ECHO_url}</TextC>
                        </View>
                            <TextC>patient's id is : {this.props.selectedItem.patientId}</TextC>
                            <TextC>patient's name is : {this.props.selectedItem.patientName}</TextC>
                            <TextC>patient's age is : {this.props.selectedItem.patientAge}</TextC>
                            <TextC>patient's address is : {this.props.selectedItem.patientAddress}</TextC>
                            <TextC>patient's hospital id  is : {this.props.selectedItem.hospitalId}</TextC>
                            <TextC>patient's hospital address is : {this.props.selectedItem.hospitalAddress}</TextC>
                            <TextC>patient's pincode is : {this.props.selectedItem.pincode}</TextC>
                            <TextC>patient's state is : {this.props.selectedItem.state}</TextC>
                            <TextC>patient's phoneNumber is : {this.props.selectedItem.phoneNumber}</TextC>
                            <TextC>patient's admissionDetails date is : {this.props.selectedItem.admissionDetails.date}</TextC>
                            <TextC>patient's admissionDetails time is : {this.props.selectedItem.admissionDetails.time}</TextC>
                            <TextC>patient's symptomsOnset date is : {this.props.selectedItem.symptomsOnset.date}</TextC>
                            <TextC>patient's symptomsOnset time is : {this.props.selectedItem.symptomsOnset.time}</TextC>
                            <TextC>patient's transportMode is : {this.props.selectedItem.patientName}</TextC>
                            <TextC>patient's firstMedicalContact name is : {this.props.selectedItem.firstMedicalContact.name}</TextC>
                            <TextC>patient's firstMedicalContact address is : {this.props.selectedItem.firstMedicalContact.address}</TextC>
                            <TextC>patient's firstMedicalContact date is : {this.props.selectedItem.firstMedicalContact.date}</TextC>
                            <TextC>patient's firstMedicalContact time is : {this.props.selectedItem.firstMedicalContact.time}</TextC>
                            <TextC>patient's typeOfDiagnosis is : {this.props.selectedItem.typeOfDiagnosis}</TextC>
                            <TextC>patient's otherTypeOfDiagnosis is : {this.props.selectedItem.otherTypeOfDiagnosis}</TextC>
                            <TextC>patient's strokeTerritory is : {this.props.selectedItem.strokeTerritory}</TextC>
                            <TextC>patient's ischemicStroke type is : {this.props.selectedItem.ischemicStrokeMenu}</TextC>
                            <TextC>did patient wake up : {this.props.selectedItem.isWakeUp}</TextC>
                            <TextC> patient wake up date : {this.props.selectedItem.wake.date}</TextC>
                            <TextC> patient wake up time : {this.props.selectedItem.wake.time}</TextC>
                            <TextC>SIGNS AND SYNPTOMS</TextC>
                            <TextC>seizuresAtOnset : {this.props.selectedItem.seizuresAtOnset}</TextC>
                            <TextC>seizuresWithinOneWeek : {this.props.selectedItem.seizuresWithinOneWeek}</TextC>
                            <TextC>seizuresAfterOneWeek : {this.props.selectedItem.seizuresAfterOneWeek}</TextC>
                        <View style={{height:VerticalScale(70)}} />
                    </ScrollView>
                </View>
                <View style={{flex:1}} />
                <TouchableOpacity disabled={this.props.selectedItem.UPLOADED}
                 onPress={() => this.props.uploadData(this.props.selectedItem,this.props.data) }
                 style={{position:'absolute',height:VerticalScale(60),borderWidth:1,bottom:0,left:0,right:0}} >
                   <HeaderButton headerText= {this.props.selectedItem.UPLOADED?"Already uploaded":"Upload Data"} color={this.props.selectedItem.UPLOADED?"gray":"mediumturquoise"} />
                </TouchableOpacity>
            </View>
        )
     }
};

const mapStateToProps = state => {
    console.log("from individual data component");
    console.log(state.dataReducer.selectedItem);
    console.log(state.dataReducer.loading);
    return {
        data : state.dataReducer.data,
        selectedItem : state.dataReducer.selectedItem,
        loading : state.dataReducer.loading,
    }
}


export default connect(mapStateToProps,{ uploadData })(IndividualData) ;