import React from 'react';
import {View, Text, TouchableOpacity,StatusBar, StyleSheet,Image,Switch,Animated} from 'react-native';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import {scale, VerticalScale} from '../Components/Exports';
import { ScrollView } from 'react-native-gesture-handler';
import EnterComponent from '../Components/EnterComponent';
import SelectCity from '../Components/SelectCity';
import HeaderButton from '../Components/HeaderButton';
import Symptoms from '../Components/Symptoms';
import Aspects from '../Components/Aspects';
import { connect } from 'react-redux';
import { dataEntry } from '../Actions/dataActions';
import ImageResizer from 'react-native-image-resizer';

 const DATA = [];

class Entry extends React.Component{
    state = {
        Name : '',
        ID : '',
        Age : '',
        Gender : 'male',
        Address : '',
        isFormValid : false,
        siteCenter : 'AIIMS NEW DELHI',
        monitoringCenter : 'AIIMS NEW DELHI',
        dataEnteredBy : '',
        physicianInCharge  : '',
        city : '',
        height : new Animated.Value(0),
        isAppeared : false,
        patientName : '',
        patientId : '',
        patientAge : '',
        patientAddress : '',
        hospitalId : '',
        hospitalAddress : '',
        pincode : '',
        state : 'Delhi',
        phoneNumber : '',
        admissionDetails : {
          date : '',
          time : ''
        },
        symptomsOnset : {
          date : '',
          time : ''
        },
        transportMode : 'Public Ambulance',
        firstMedicalContact : {
          name : "",
          address : "",
          date : "",
          time : ""
        },
        typeOfDiagnosis : 'ischemic stroke',
        otherTypeOfDiagnosis : '',
        strokeTerritory : 'Anterior circulation',
        ischemicStrokeMenu : 'large-artery atherosclerosis',
        isWakeUp : 'yes',
        wake : {
          date : '',
          time : ''
        },
        signsSymptoms : {
          Righthemiparesis : false,
          Lefthemiparesis : false,
          RightUMNfacialpalsy : false,
          LeftUMNfacialpalsy : false,
          Dysarthria : false,
          Rightcerebellarataxia : false,
          Leftcerebellarataxia : false,
          Righthemisensoryloss : false,
          Lefthemisensoryloss : false,
          Rightvisionloss : false,
          Leftvisionloss : false,
          Horizontaldiplopia : false,
          Verticaldiplopia : false,
          Righthearingloss : false,
          Lefthearingloss : false,
          Bladderdysfunction : false,
          Right9th10thCNpalsy : false,
          Left9th10thCNpalsy : false,
          Headache : false,
          Thunderclapheadache : false,
          Neckpain : false,
          Aphasia : false,
          Motoraphasia : false,
          Sensoryaphasia : false,
          Globalaphasia : false,
          Memoryloss : false,
          Speechdisturbances : false,
          Difficultyswallowing : false,
          Seizures : false
        },
        seizuresAtOnset : '',
        seizuresWithinOneWeek : '',
        seizuresAfterOneWeek : '',
        riskFactors : {
          DiabetesMellitus : '',
          Hypertension : '',
          Dyslipidemia : '',
          CAD : '',
          Atrialfibrosis : '',
          Rheumaticheartdisease : '',
          Smoking : '',
          Alcohol : '',
          Dry : '',
          PriorTIA : '',
          Priorstroke : '',
          Familyhistoryofstroke : '',
          FamilyhistoryofCAD : '',
          Dementia : ''
        },
        examinationScales : {
          NIHSSscaleatadmission : '',
          NIHSSscaleatdischarge : '',
          MRSatdischarge : '',
          GCSatdischarge : '',
          GCSatadmission : ''
        },
        Vitals : {
          PR : '',
          BP : '',
          RR : '',
          ECG : '',
          RBS : ''
        },
        Investigations : {
          hb : '',
          tc:'',
          pc:'',
          esr:'',
          ptinr:'',
          crp:'',
          bloodUrea:'',
          sCreatinine:'',
          sHomocysteine:'',
          SVitB12:'',
          t3:'',
          t4:'',
          freet3:'',
          freet4:'',
          tsh:'',
          Totalcholesterol:'',
          LDL:'',
          HDL:'',
          VLDL:'',
          TG:'',
          Na:'',
          K:'',
          stp:'',
          Albumin:'',
          SGOT:'',
          SGPT:'',
          HBA1C:'',
          FBS:'',
          PPBS:'',
          TropT:'',
          Echo : ''
        },
        isCTBrain : 'no',
        CTBrainImage:'',
        Subganglionic:{
          M1Frontaloperculum : false,
          M2Anteriortemporallobe : false,
          M3Posteriortemporallobe : false
        },
        Supraganglionic : {
          M4AnteriorMCA : false,
          M5LateralMCA : false,
          M6PosteriorMCA : false
        },
        Basal : {
          Caudate : false,
          LentiformNucleus : false,
          Insula : false,
          InternalCapsulePostLimb : false
        },
        totalAspectScore : 10,
        admissionInEmergencyAndDischarge : 'no',
        admissionInEmergencyAndDischargeDetails:{
          days : '',
          time : ''
        },
        admissionInWard : 'no',
        admissionInWardDetails : {
          days : '',
          time : ''
        },
        admissionInICU : 'no',
        admissionInICUDetails : {
          days : '',
          time : ''
        },
        isThrombolysis : 'no',
        Thrombolyticagent : 'Alteplase',
        Windowperiod : '',
        Timefromonsetofsymptomtoemergency : '',
        Timeformemergencyarrivaltophysician : '',
        Timefromemergencyarrivaltoctscan : '',
        Timefromemergencyarrivaltoinitiationofthrombolysis : '',
        Mechanicalthrombectomy : 'no',
        MechanicalthrombectomyDetails : {
          doorToPuncturetime : '',
          doorTorecanalisationTime : ''
        },
        PostthrombolysisMechanicalthrombectomy : {
          date : '',
          time : ''
        },
        Postthrombolyticcomplications : '',
        PostthrombolyticcomplicationsOthers : '',
        Antiplateletstarted : '',
        Antiplateletdrug : '',
        Anticoagulantstarted : '',
        AnticoagulantsIndication : 'DVT prophylaxis',
        Therapeuticanticoagulants : '',
        isAntihypertensives : 'no',
        AntihypertensivesDetails : {
          date : '',
          drug : ''
        },
        isStatins : 'no',
        Statins : {
          date : '',
          drug : ''
        },
        isMobilised : 'no',
        MobilisedDetails : {
          date : '',
          time : ''
        },
        isDysphagiascreening : 'no',
        GUSSScore : '',
        isDVTprophylaxis : 'no',
        DVTprophylaxisDetails : {
          date : '',
          time : ''
        },
        DVTprophylaxisdrop : '',
        Airorwatermattress : 'no',
        Physiotherapystarted : 'no',
        PhysiotherapyStartedDetails : {
          date : '',
          time : ''
        },
        isDischarged : 'yes',
        HTN : '',
        DM : '',
        AF : '',
        ischemicstroke : '',
        statin : '',
        Smokingcessationadvice : '',
        Rehabilitationadvice : '',
        telephone : '',
        RehabilitationPhysiotherapy : 'no',
        image_patient_url:'',
        image_ctBrain_url:'',
        video_ctBrain_url:'',
        image_MRIbrain_url:'',
        video_MRIbrain_url:'',
        image_CTAngio_url:'',
        video_CTAngio_url:'',
        image_carotidDoppler_url:'',
        image_physicianNotes_url:'',
        image_CTPhoto_url:'',
        image_postThrmbolysis_ctScan_url:'',
        image_toastClassification_url:'',
        image_ECG_url:'',
        image_ECHO_url:''
    }


    handleShow = () => {
        this.props.navigation.navigate("Data");
    }

    handleSubmit = () => {
       this.props.dataEntry(this.state);
       this.props.navigation.navigate("Data");
    }

    chooseImage = ({type,name}) => {
         ImagePicker.showImagePicker({
          title : 'choose photo/video',
          chooseWhichLibraryTitle : 'choose from Internal Storage',
          mediaType : type,
          takePhotoButtonTitle : 'take photo or video ',
          videoQuality : 'medium'
        },(response) => {
            if(response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                if(type === "photo")
                {
                  ImageResizer.createResizedImage(response.uri, 400, 400,'JPEG', 100)
                  .then(response => {
                    console.log(response.path);
                    console.log(response.uri);
                    this.setState({ [name] : response.uri});
                  })
                  .catch(err => {
                    console.log(error)
                  });
                }
                else
                {
                  console.log(response.path);
                  this.setState({ [name] : response.uri});
                }
              }
         })
    }


    render(){
        return (
            <View style={{flex:1,backgroundColor : 'white'}}>
              <StatusBar backgroundColor="darkcyan" />
               <View style={{height : VerticalScale(100),justifyContent:'center',alignItems:'center',marginBottom : VerticalScale(10),backgroundColor:'mediumturquoise'}}>
                    <Text allowFontScaling = {false}
                      maxFontSizeMultiplier={1}
                     style={{fontFamily : 'Gilroy-Light', fontSize : scale(20),color:'white'}} >Enter Patient's demographics</Text>
               </View>
               <ScrollView>
                   
                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select site center</Text>
                   </View>
                   
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.siteCenter}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ siteCenter: itemValue})
                        }>
                        <Picker.Item label="AIIMS NEW DELHI" value="AIIMS NEW DELHI" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="11" value="11" />
                        <Picker.Item label="12" value="12" />
                        <Picker.Item label="13" value="13" />
                        <Picker.Item label="14" value="14" />
                        <Picker.Item label="15" value="15" />
                        <Picker.Item label="16" value="16" />
                        <Picker.Item label="17" value="17" />
                        <Picker.Item label="18" value="18" />
                        <Picker.Item label="19" value="19" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="21" value="21" />
                        <Picker.Item label="22" value="22" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select Monitoring center</Text>
                    </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.monitoringCenter}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ monitoringCenter: itemValue})
                        }>
                        <Picker.Item label="AIIMS NEW DELHI" value="AIIMS NEW DELHI" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="11" value="11" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Data Entered By" value={this.state.dataEnteredBy} handleInput = {(value) => this.setState({dataEnteredBy : value})} />
                    <EnterComponent type="default" fieldName = "Physician in charge" value={this.state.physicianInCharge} handleInput = {(value) => this.setState({physicianInCharge : value})} />
                    <View style={{height:VerticalScale(40),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(20)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Demographic details of the patient</Text>
                    </View>
                    <EnterComponent type="default" fieldName = "patient's Name" value={this.state.patientName} handleInput = {(value) => this.setState({patientName : value}) } />
                    <EnterComponent type="default" fieldName = "patient's ID" value={this.state.patientId} handleInput = {(value) => this.setState({patientId : value}) } />
                    <EnterComponent type="phone-pad" fieldName = "patient's Age" value={this.state.patientAge} handleInput = {(value) => this.setState({patientAge : value}) } />
                    <EnterComponent type="default" fieldName = "patient's Address" value={this.state.patientAddress} handleInput = {(value) => this.setState({patientAddress : value}) } />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select Gender</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Gender}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Gender: itemValue})
                        }>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Hospital's Id" value={this.state.hospitalId} handleInput = {(value) => this.setState({hospitalId : value})} />
                    <EnterComponent type="default" fieldName = "Hospital's Address" value={this.state.hospitalAddress} handleInput = {(value) => this.setState({hospitalAddress : value})} />
                    
                    <View style={{width:'90%',alignSelf:'center',marginVertical:VerticalScale(10),zIndex:100}} >
                       <SelectCity choosenCity={(city) => this.setState({city : city})} />
                    </View>


                    <EnterComponent type="phone-pad" fieldName = "PinCode" value={this.state.pincode} handleInput = {(value) => this.setState({pincode : value})} />
                    
                    <View style={{height:VerticalScale(40),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select State</Text>
                   </View>
                   
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.state}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ state: itemValue})
                        }>
                        <Picker.Item label="Uttarakhand" value="Uttarakhand" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Haryana" value="Haryana" />
                        <Picker.Item label="Maharashtra" value="Maharashtra" />
                        <Picker.Item label="M.P" value="M.P" />
                        <Picker.Item label="West Bengal" value="West Bengal" />
                        <Picker.Item label="U.P" value="U.P" />
                        <Picker.Item label="J.K" value="J.K" />
                        <Picker.Item label="Gujrat" value="Gujrat" />
                        <Picker.Item label="Rajasthan" value="Rajasthan" />
                        <Picker.Item label="Chattisgarh" value="Chattisgarh" />
                        <Picker.Item label="TamilNadu" value="TamilNadu" />
                        <Picker.Item label="Goa" value="Goa" />
                        <Picker.Item label="Orissa" value="Orissa" />
                        <Picker.Item label="Bihar" value="Bihar" />
                        <Picker.Item label="Punjab" value="Punjab" />
                        <Picker.Item label="Kerela" value="Kerela" />
                        <Picker.Item label="Telangana" value="Telangana" />
                        <Picker.Item label="Jharkhand" value="Jharkhand" />
                        <Picker.Item label="Assam" value="Assam" />
                        <Picker.Item label="Manipur" value="Manipur" />
                        <Picker.Item label="Mizoram" value="Mizoram" />
                    </Picker>

                    <EnterComponent type="phone-pad" fieldName = "Phone Number" value={this.state.phoneNumber} handleInput = {(value) => this.setState({phoneNumber : value})} />

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_patient_url?<Image source={{uri : this.state.image_patient_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type : 'photo',name:'image_patient_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50)}}>
                     <HeaderButton headerText = "choose a photo of patient" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Admission details</Text>
                   </View>
                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >enter date and time of Admission</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "date in format 23/07/1909" value={this.state.admissionDetails.date} handleInput = {(value) => this.setState({ admissionDetails : {...this.state.admissionDetails, date : value } }) } />
                   <EnterComponent type="default" fieldName = "time in format 12:00" value={this.state.admissionDetails.time} handleInput = {(value) => this.setState({ admissionDetails : {...this.state.admissionDetails, time :  value } })} />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >enter date and time of onset of symptoms</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "date in format 23/07/1909" value={this.state.symptomsOnset.date} handleInput = {(value) => this.setState({ symptomsOnset : {...this.state.symptomsOnset, date : value } })  } />
                   <EnterComponent type="default" fieldName = "time in format 12:00" value={this.state.symptomsOnset.time} handleInput = {(value) => this.setState({ symptomsOnset : {...this.state.symptomsOnset, time : value } }) } />

                   <View style={{height:VerticalScale(40),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select Mode of transport</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.transportMode}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ transportMode: itemValue})
                        }>
                        <Picker.Item label="Public Ambulance" value="Public Ambulance" />
                        <Picker.Item label="Private Ambulance" value="Private Ambulance" />
                        <Picker.Item label="Private Vehicle like taxi" value="Private Vehicle like taxi" />
                        <Picker.Item label="Own Vehicle" value="Own Vehicle" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "First Medical Contact(doctor/hospital)" value={this.state.firstMedicalContact.name} handleInput = {(value) => this.setState({firstMedicalContact : {...this.state.firstMedicalContact, name : value }}) } />
                    <EnterComponent type="default" fieldName = "Address of first medical contact" value={this.state.firstMedicalContact.address} handleInput = {(value) => this.setState({firstMedicalContact : {...this.state.firstMedicalContact, address:  value }}) } />

                    <View style={{height:VerticalScale(26),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Timing and date of medical contact</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "date in format 23/07/1909" value={this.state.firstMedicalContact.date} handleInput = {(value) => this.setState({firstMedicalContact : {...this.state.firstMedicalContact, date : value }}) } />
                   <EnterComponent type="default" fieldName = "time in format 12:00" value={this.state.firstMedicalContact.time} handleInput = {(value) => this.setState({firstMedicalContact : {...this.state.firstMedicalContact, time : value }}) } />

                   <View style={{height:VerticalScale(26),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select type of Diagnosis</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.typeOfDiagnosis}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ typeOfDiagnosis: itemValue})
                        }>
                        <Picker.Item label="ISCHEMETIC STROKE" value="ISCHEMETIC STROKE" />
                        <Picker.Item label="ICH" value="ICH" />
                        <Picker.Item label="(CVT)-Cerebral venous sinus thrombosis" value="(CVT)-Cerebral venous sinus thrombosis" />
                        <Picker.Item label="TIA" value="TIA" />
                        <Picker.Item label="others" value="others" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Other type of diagnosis" value={this.state.otherTypeOfDiagnosis} handleInput = {(value) => this.setState({otherTypeOfDiagnosis : value})  } />

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select stroke territory</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.strokeTerritory}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ strokeTerritory: itemValue})
                        }>
                        <Picker.Item label="Anterior circulation" value="Anterior circulation" />
                        <Picker.Item label="Posterior circulation" value="Posterior circulation" />
                        <Picker.Item label="both" value="both" />
                    </Picker>

                    <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_toastClassification_url?<Image source={{uri : this.state.image_toastClassification_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type : 'photo',name:'image_toastClassification_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical : VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a photo for toast classification" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(26),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select ischemic stroke</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.ischemicStrokeMenu}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ ischemicStrokeMenu: itemValue})
                        }>
                        <Picker.Item label="large artery atherosclerosis" value="large artery atherosclerosis" />
                        <Picker.Item label="cardio embolism" value="cardio embolism" />
                        <Picker.Item label="small-vessel occlusion" value="small-vessel occlusion" />
                        <Picker.Item label="stroke of other determined etiology" value="stroke of other determined etiology" />
                        <Picker.Item label="stroke of undetermined etiology" value="stroke of undetermined etiology" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                       <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Whether patient woke up</Text>
                    </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Gender}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Gender: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                       <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >if woke up, so enter date and time</Text>
                    </View>

                   <EnterComponent type="default" fieldName = "date in format 23/07/1909" value={this.state.wake.date} handleInput = {(value) => this.setState({wake : {...this.state.wake, date : value }}) } />
                   <EnterComponent type="default" fieldName = "time in format 12:00" value={this.state.wake.time} handleInput = {(value) => this.setState({wake : {...this.state.wake, time : value }}) } />

                    <View style={{height:VerticalScale(35),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Signs and symptoms</Text>
                   </View>
                   
                   <View style={{width:'80%',alignSelf:'center'}} >
                      <Symptoms selected={this.state.signsSymptoms.Righthemiparesis} title="Right hemiparesis" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Righthemiparesis : !this.state.signsSymptoms.Righthemiparesis } })} />
                      <Symptoms selected={this.state.signsSymptoms.Lefthemiparesis} title="Left hemiparesis" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Lefthemiparesis : !this.state.signsSymptoms.Lefthemiparesis } })} />
                      <Symptoms selected={this.state.signsSymptoms.RightUMNfacialpalsy} title="Right UMN facial palsy" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, RightUMNfacialpalsy : !this.state.signsSymptoms.RightUMNfacialpalsy } })} />
                      <Symptoms selected={this.state.signsSymptoms.LeftUMNfacialpalsy} title="Left UMN facial palsy" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, LeftUMNfacialpalsy : !this.state.signsSymptoms.LeftUMNfacialpalsy } })} />
                      <Symptoms selected={this.state.signsSymptoms.Dysarthria} title="Dysarthria" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Dysarthria : !this.state.signsSymptoms.Dysarthria } })} />
                      <Symptoms selected={this.state.signsSymptoms.Rightcerebellarataxia} title="Right cerebellar ataxia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Rightcerebellarataxia : !this.state.signsSymptoms.Rightcerebellarataxia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Leftcerebellarataxia} title="Left cerebellar ataxia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Leftcerebellarataxia : !this.state.signsSymptoms.Leftcerebellarataxia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Righthemisensoryloss} title="Right hemisensory loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Righthemisensoryloss : !this.state.signsSymptoms.Righthemisensoryloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Lefthemisensoryloss} title="Left hemisensory loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Lefthemisensoryloss : !this.state.signsSymptoms.Lefthemisensoryloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Rightvisionloss} title="Right vision loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Rightvisionloss : !this.state.signsSymptoms.Rightvisionloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Leftvisionloss} title="Left vision loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Leftvisionloss : !this.state.signsSymptoms.Leftvisionloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Horizontaldiplopia} title="Horizontal diplopia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Horizontaldiplopia : !this.state.signsSymptoms.Horizontaldiplopia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Verticaldiplopia} title="Vertical diplopia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Verticaldiplopia : !this.state.signsSymptoms.Verticaldiplopia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Righthearingloss} title="Right hearing loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Righthearingloss : !this.state.signsSymptoms.Righthearingloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Lefthearingloss} title="Left hearing loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Lefthearingloss : !this.state.signsSymptoms.Lefthearingloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Bladderdysfunction} title="Bladder dysfunction" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Bladderdysfunction : !this.state.signsSymptoms.Bladderdysfunction } })} />
                      <Symptoms selected={this.state.signsSymptoms.Right9th10thCNpalsy} title="Right 9th, 10th CN palsy" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Right9th10thCNpalsy : !this.state.signsSymptoms.Right9th10thCNpalsy } })} />
                      <Symptoms selected={this.state.signsSymptoms.Left9th10thCNpalsy} title="Left 9th, 10th CN palsy" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Left9th10thCNpalsy : !this.state.signsSymptoms.Left9th10thCNpalsy } })} />
                      <Symptoms selected={this.state.signsSymptoms.Headache} title="Headache" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Headache : !this.state.signsSymptoms.Headache } })} />
                      <Symptoms selected={this.state.signsSymptoms.Thunderclapheadache} title="Thunderclap headache" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Thunderclapheadache : !this.state.signsSymptoms.Thunderclapheadache } })} />
                      <Symptoms selected={this.state.signsSymptoms.Neckpain} title="Neck pain" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Neckpain : !this.state.signsSymptoms.Neckpain } })} />
                      <Symptoms selected={this.state.signsSymptoms.Motoraphasia} title="Motor aphasia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Motoraphasia : !this.state.signsSymptoms.Motoraphasia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Sensoryaphasia} title="Sensory aphasia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Sensoryaphasia : !this.state.signsSymptoms.Sensoryaphasia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Globalaphasia} title="Global aphasia" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Globalaphasia : !this.state.signsSymptoms.Globalaphasia } })} />
                      <Symptoms selected={this.state.signsSymptoms.Memoryloss} title="Memory loss" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Memoryloss : !this.state.signsSymptoms.Memoryloss } })} />
                      <Symptoms selected={this.state.signsSymptoms.Speechdisturbances} title="Speech disturbances" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Speechdisturbances : !this.state.signsSymptoms.Speechdisturbances } })} />
                      <Symptoms selected={this.state.signsSymptoms.Difficultyswallowing} title="Difficulty swallowing" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Difficultyswallowing : !this.state.signsSymptoms.Difficultyswallowing } })} />
                      <Symptoms selected={this.state.signsSymptoms.Seizures} title="Seizures" selectItem={() => this.setState({ signsSymptoms : { ...this.state.signsSymptoms, Seizures : !this.state.signsSymptoms.Seizures } })} /> 

                      <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Seizures at the onset of stroke</Text>
                      </View>

                      <Picker
                        mode='dropdown'
                        selectedValue={this.state.seizuresAtOnset}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ seizuresAtOnset: itemValue})
                        }>
                        <Picker.Item label="Focal" value="yes" />
                        <Picker.Item label="generalised" value="no" />
                        <Picker.Item label="Partial" value="no" />
                      </Picker> 

                      <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Seizures within 1 week of stroke</Text>
                      </View>
                      <Picker
                        mode='dropdown'
                        selectedValue={this.state.seizuresWithinOneWeek}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ seizuresWithinOneWeek: itemValue})
                        }>
                        <Picker.Item label="Focal" value="yes" />
                        <Picker.Item label="generalised" value="no" />
                        <Picker.Item label="Partial" value="no" />
                      </Picker>

                      <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Seizures after 1 week of stroke</Text>
                      </View>
                      <Picker
                        mode='dropdown'
                        selectedValue={this.state.seizuresAfterOneWeek}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ seizuresAfterOneWeek: itemValue})
                        }>
                        <Picker.Item label="Focal" value="yes" />
                        <Picker.Item label="generalised" value="no" />
                        <Picker.Item label="Partial" value="no" />
                    </Picker> 

                   </View>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Risk Factors</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "Diabetes Mellitus" value={this.state.riskFactors.DiabetesMellitus} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, DiabetesMellitus : value }}) } />
                   <EnterComponent type="default" fieldName = "Hypertension" value={this.state.riskFactors.Hypertension} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Hypertension : value }})} />
                   <EnterComponent type="default" fieldName = "Dyslipidemia" value={this.state.riskFactors.Dyslipidemia} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Dyslipidemia : value }})} />
                   <EnterComponent type="default" fieldName = "CAD" value={this.state.riskFactors.CAD} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, CAD : value }})} />
                   <EnterComponent type="default" fieldName = "Atrial fibrosis(valvular/non-valvular)" value={this.state.riskFactors.Atrialfibrosis} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Atrialfibrosis : value }})} />
                   <EnterComponent type="default" fieldName = "Rheumatic heart disease" value={this.state.riskFactors.Rheumaticheartdisease} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Rheumaticheartdisease : value }})} />
                   <EnterComponent type="default" fieldName = "Smoking" value={this.state.riskFactors.Smoking} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Smoking : value }})} />
                   <EnterComponent type="default" fieldName = "Alcohol" value={this.state.riskFactors.Alcohol} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Alcohol : value }})} />
                   <EnterComponent type="default" fieldName = "Dry??? (Drug/Substance abuse)" value={this.state.riskFactors.Dry} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Dry : value }})} />
                   <EnterComponent type="default" fieldName = "Prior TIA" value={this.state.riskFactors.PriorTIA} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, PriorTIA : value }})} />
                   <EnterComponent type="default" fieldName = "Prior stroke" value={this.state.riskFactors.Priorstroke} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Priorstroke : value }})} />
                   <EnterComponent type="default" fieldName = "Family history of stroke" value={this.state.riskFactors.Familyhistoryofstroke} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Familyhistoryofstroke : value }})} />
                   <EnterComponent type="default" fieldName = "Family history of CAD" value={this.state.riskFactors.FamilyhistoryofCAD} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, FamilyhistoryofCAD : value }})} />
                   <EnterComponent type="default" fieldName = "Dementia" value={this.state.riskFactors.Dementia} handleInput = {(value) => this.setState({riskFactors : {...this.state.riskFactors, Dementia : value }})} />

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Examination scales</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "NIHSS scale at admission" value={this.state.examinationScales.NIHSSscaleatadmission} handleInput = {(value) => this.setState({examinationScales : {...this.state.examinationScales, NIHSSscaleatadmission : value }}) } />
                   <EnterComponent type="default" fieldName = "NIHSS scale at discharge" value={this.state.examinationScales.NIHSSscaleatdischarge} handleInput = {(value) => this.setState({examinationScales : {...this.state.examinationScales, NIHSSscaleatdischarge : value }}) } />
                   <EnterComponent type="default" fieldName = "MRS at discharge" value={this.state.examinationScales.MRSatdischarge} handleInput = {(value) => this.setState({examinationScales : {...this.state.examinationScales , MRSatdischarge : value }}) } />
                   <EnterComponent type="default" fieldName = "GCS at admission" value={this.state.examinationScales.GCSatadmission} handleInput = {(value) => this.setState({examinationScales : {...this.state.examinationScales, GCSatadmission : value }}) } />
                   <EnterComponent type="default" fieldName = "GCS at discharge" value={this.state.examinationScales.GCSatdischarge} handleInput = {(value) => this.setState({examinationScales : {...this.state.examinationScales, GCSatdischarge : value }}) } />

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Vitals at Emergency</Text>
                   </View>

                   <EnterComponent type="phone-pad" fieldName = "PR" value={this.state.Vitals.PR} handleInput = {(value) => this.setState({Vitals : {...this.state.Vitals, PR : value }})} />
                   <EnterComponent type="default" fieldName = "BP" value={this.state.Vitals.BP} handleInput = {(value) => this.setState({Vitals : {...this.state.Vitals, BP : value }})} />
                   <EnterComponent type="phone-pad" fieldName = "RR(enter per minute)" value={this.state.Vitals.RR} handleInput = {(value) => this.setState({Vitals : {...this.state.Vitals, RR : value }})} />
                   

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_ECG_url?<Image source={{uri : this.state.image_ECG_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type : 'photo',name:'image_ECG_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50)}}>
                     <HeaderButton headerText = "choose a photo for ECG image" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <EnterComponent type="default" fieldName = "RBS" value={this.state.Vitals.RBS} handleInput = {(value) => this.setState({Vitals : {...this.state.Vitals, RBS : value }})} />

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Investigations</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "HB" value={this.state.Investigations.hb} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,hb : value}}) } />
                   <EnterComponent type="default" fieldName = "TC (Total leucocyte count)" value={this.state.Investigations.tc} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, tc : value }})} />
                   <EnterComponent type="default" fieldName = "PC (Platelet count)" value={this.state.Investigations.pc} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, pc : value }})} />
                   <EnterComponent type="default" fieldName = "ESR" value={this.state.Investigations.esr} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, esr : value }})} />
                   <EnterComponent type="default" fieldName = "PT-INR" value={this.state.Investigations.ptinr} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, ptinr : value }})} />
                   <EnterComponent type="default" fieldName = "CRP" value={this.state.Investigations.crp} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, crp:value }})} />
                   <EnterComponent type="default" fieldName = "Blood Urea" value={this.state.Investigations.bloodUrea} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,bloodUrea:value}})} />
                   <EnterComponent type="default" fieldName = "S. Creatinine" value={this.state.Investigations.sCreatinine} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, sCreatinine:value }})} />
                   <EnterComponent type="default" fieldName = "S. homocysteine" value={this.state.Investigations.sHomocysteine} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, sHomocysteine:value }})} />
                   <EnterComponent type="default" fieldName = "S. Vit B12" value={this.state.Investigations.SVitB12} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations, SVitB12 : value }})} />
                   <EnterComponent type="default" fieldName = "T3" value={this.state.Investigations.t3} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,t3 : value}})} />
                   <EnterComponent type="default" fieldName = "T4" value={this.state.Investigations.t4} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,t4:value}})} />
                   <EnterComponent type="default" fieldName = "Free T3" value={this.state.Investigations.freet3} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,freet3:value}})} />
                   <EnterComponent type="default" fieldName = "Free T4" value={this.state.Investigations.freet4} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,freet4:value}})} />
                   <EnterComponent type="default" fieldName = "TSH" value={this.state.Investigations.tsh} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,tsh:value}})} />
                   <EnterComponent type="default" fieldName = "Total cholesterol" value={this.state.Investigations.Totalcholesterol} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,Totalcholesterol:value}})} />
                   <EnterComponent type="default" fieldName = "LDL" value={this.state.Investigations.LDL} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,LDL:value}})} />
                   <EnterComponent type="default" fieldName = "HDL" value={this.state.Investigations.HDL} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,HDL:value}})} />
                   <EnterComponent type="default" fieldName = "VLDL" value={this.state.Investigations.VLDL} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,VLDL:value}})} />
                   <EnterComponent type="default" fieldName = "TG" value={this.state.Investigations.TG} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,TG:value}})} />
                   <EnterComponent type="default" fieldName = "Na+" value={this.state.Investigations.Na} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,Na:value}})} />
                   <EnterComponent type="default" fieldName = "K+" value={this.state.Investigations.K} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,K:value}})} />
                   <EnterComponent type="default" fieldName = "STP" value={this.state.Investigations.stp} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,stp:value}})} />
                   <EnterComponent type="default" fieldName = "Albumin" value={this.state.Investigations.Albumin} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,Albumin:value}})} />
                   <EnterComponent type="default" fieldName = "SGOT" value={this.state.Investigations.SGOT} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,SGOT:value}})} />
                   <EnterComponent type="default" fieldName = "SGPT" value={this.state.Investigations.SGPT} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,SGPT:value}})} />
                   <EnterComponent type="default" fieldName = "HBA1C" value={this.state.Investigations.HBA1C} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,HBA1C:value}})} />
                   <EnterComponent type="default" fieldName = "FBS (fasting blood sugar)" value={this.state.Investigations.FBS} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,FBS:value}})} />
                   <EnterComponent type="default" fieldName = "PPBS (postprandial blood sugar)" value={this.state.Investigations.PPBS} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,PPBS:value}})} />
                   <EnterComponent type="default" fieldName = "Trop T" value={this.state.Investigations.TropT} handleInput = {(value) => this.setState({Investigations : {...this.state.Investigations,TropT:value}})} />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                        <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >ECHO Image</Text>
                   </View>

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_ECHO_url?<Image source={{uri : this.state.image_ECHO_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type : 'photo',name:'image_ECHO_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50)}}>
                     <HeaderButton headerText = "choose a photo for ECHO image" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Holter Monitoring</Text>
                   </View>
                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Select Whether CT Brain</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isCTBrain}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isCTBrain: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.image_ctBrain_url?<Image source={{uri : this.state.image_ctBrain_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_ctBrain_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50)}}>
                     <HeaderButton headerText = "choose a photo for CTBrain image if yes" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.video_ctBrain_url?<Image source={{uri : this.state.video_ctBrain_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'video',name:'video_ctBrain_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50)}}>
                     <HeaderButton headerText = "choose a video for CTBrain image if yes" color = "mediumturquoise" />
                   </TouchableOpacity>

                   {/* <View style={{height:VerticalScale(26),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >ASPECTS SCORE</Text>
                   </View> */}
                   <View style={{height:VerticalScale(46),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Subganglionic Nuclei:</Text>
                   </View>
                   <Aspects selected={this.state.Subganglionic.M1Frontaloperculum} selectItem={() => this.setState({Subganglionic : {...this.state.Subganglionic, M1Frontaloperculum : !this.state.Subganglionic.M1Frontaloperculum}})} title="M1 - Frontal operculum" />
                   <Aspects selected={this.state.Subganglionic.M2Anteriortemporallobe} selectItem={() => this.setState({Subganglionic : {...this.state.Subganglionic, M2Anteriortemporallobe : !this.state.Subganglionic.M2Anteriortemporallobe}})} title="M2 - Anterior temporal lobe" />
                   <Aspects selected={this.state.Subganglionic.M3Posteriortemporallobe} selectItem={() => this.setState({Subganglionic : {...this.state.Subganglionic, M3Posteriortemporallobe : !this.state.Subganglionic.M3Posteriortemporallobe}})} title="M3 - Posterior temporal lobe" />

                   <View style={{height:VerticalScale(46),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Supraganglionic Nuclei:</Text>
                   </View>
                   <Aspects selected={this.state.Supraganglionic.M4AnteriorMCA} selectItem={() => this.setState({Supraganglionic : {...this.state.Supraganglionic, M4AnteriorMCA : !this.state.Supraganglionic.M4AnteriorMCA}})} title="M4  - Anterior MCA" />
                   <Aspects selected={this.state.Supraganglionic.M5LateralMCA} selectItem={() => this.setState({Supraganglionic : {...this.state.Supraganglionic, M5LateralMCA : !this.state.Supraganglionic.M5LateralMCA}})} title="M5  - Lateral MCA " />
                   <Aspects selected={this.state.Supraganglionic.M6PosteriorMCA} selectItem={() => this.setState({Supraganglionic : {...this.state.Supraganglionic, M6PosteriorMCA : !this.state.Supraganglionic.M6PosteriorMCA}})} title="M6  - Posterior MCA" />

                   <View style={{height:VerticalScale(46),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Basal Ganglia:</Text>
                   </View>
                   <Aspects selected={this.state.Basal.Caudate} selectItem={() => this.setState({Basal : {...this.state.Basal, Caudate : !this.state.Basal.Caudate}})} title="Caudate (C)" />
                   <Aspects selected={this.state.Basal.LentiformNucleus} selectItem={() => this.setState({Basal : {...this.state.Basal, LentiformNucleus : !this.state.Basal.LentiformNucleus}})} title="Lentiform Nucleus (L)" />
                   <Aspects selected={this.state.Basal.Insula} selectItem={() => this.setState({Basal : {...this.state.Basal, Insula : !this.state.Basal.Insula}})} title="Insula (I)" />
                   <Aspects selected={this.state.Basal.InternalCapsulePostLimb} selectItem={() => this.setState({Basal : {...this.state.Basal, InternalCapsulePostLimb : !this.state.Basal.InternalCapsulePostLimb}})} title="Internal Capsule (IC) Post Limb" />

              

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.image_MRIbrain_url?<Image source={{uri : this.state.image_MRIbrain_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_MRIbrain_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a photo for MRI BRAIN" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.video_MRIbrain_url?<Image source={{uri : this.state.video_MRIbrain_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'video',name:'video_MRIbrain_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a video for MRI BRAIN" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.image_CTAngio_url?<Image source={{uri : this.state.image_CTAngio_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>

                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_CTAngio_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a photo for CT angio" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.video_CTAngio_url?<Image source={{uri : this.state.video_CTAngio_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'video',name:'video_CTAngio_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a video for CT angio" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{justifyContent:'center',alignItems:'center',marginVertical:VerticalScale(20)}}>
                     {this.state.image_carotidDoppler_url?<Image source={{uri : this.state.image_carotidDoppler_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_carotidDoppler_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "choose a photo for Carotid doppler" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Management:</Text>
                   </View>
                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Admission in Emergency and discharge</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.admissionInEmergencyAndDischarge}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ admissionInEmergencyAndDischarge: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>
                   <EnterComponent type="default" fieldName = "enter days if adm. emergency" value={this.state.admissionInEmergencyAndDischargeDetails.days} handleInput = {(value) => this.setState({admissionInEmergencyAndDischargeDetails : {...this.state.admissionInEmergencyAndDischargeDetails, days : value }})} />
                   <EnterComponent type="default" fieldName = "enter hrs if adm. emergency" value={this.state.admissionInEmergencyAndDischargeDetails.time} handleInput = {(value) => this.setState({admissionInEmergencyAndDischargeDetails : {...this.state.admissionInEmergencyAndDischargeDetails, time : value }})} />
                   <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Admission in Ward:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.admissionInWard}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ admissionInWard: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>
                   <EnterComponent type="default" fieldName = "enter days if adm. emergency" value={this.state.admissionInWardDetails.days} handleInput = {(value) => this.setState({admissionInWardDetails : {...this.state.admissionInWardDetails, days : value }})} />
                   <EnterComponent type="default" fieldName = "enter hrs if adm. emergency" value={this.state.admissionInWardDetails.time} handleInput = {(value) => this.setState({admissionInWardDetails : {...this.state.admissionInWardDetails, time : value }})} />
                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Admission in ICU:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.admissionInICU}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ admissionInICU: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>
                   <EnterComponent type="default" fieldName = "enter days for icu" value={this.state.admissionInICUDetails.days} handleInput = {(value) => this.setState({admissionInICUDetails : {...this.state.admissionInICUDetails, days : value }})} />
                   <EnterComponent type="default" fieldName = "enter hrs for icu" value={this.state.admissionInICUDetails.time} handleInput = {(value) => this.setState({admissionInICUDetails : {...this.state.admissionInICUDetails, time : value }})} />
                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Thrombolysis:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isThrombolysis}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isThrombolysis: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} > if Thrombolysis: select Thrombolytic agent chosen</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Thrombolyticagent}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Thrombolyticagent: itemValue})
                        }>
                        <Picker.Item label="Alteplase" value="yes" />
                        <Picker.Item label="Tenecteplase" value="no" />
                    </Picker>

                   <EnterComponent type="default" fieldName = "window period in min or hrs" value={this.state.Windowperiod} handleInput = {(value) => this.setState({Windowperiod : value}) } />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Time from onset of symptom  to emergency:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "enter min or hrs" value={this.state.Timefromonsetofsymptomtoemergency} handleInput = {(value) => this.setState({Timefromonsetofsymptomtoemergency : value})} />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Time from emergency arrival to physician:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "enter min or hrs" value={this.state.Timeformemergencyarrivaltophysician} handleInput = {(value) => this.setState({Timeformemergencyarrivaltophysician : value})} />

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_physicianNotes_url?<Image source={{uri : this.state.image_physicianNotes_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({typ:'photo',name:'image_physicianNotes_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "photo of physician notes" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Time from emergency arrival to ct scan:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "enter min or hrs" value={this.state.Timefromemergencyarrivaltoctscan} handleInput = {(value) => this.setState({Timefromemergencyarrivaltoctscan : value})} />

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_CTPhoto_url?<Image source={{uri : this.state.image_CTPhoto_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_CTPhoto_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "photo of CT" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Time from emergency arrival to initiation of thrombolysis:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "enter min or hrs" value={this.state.Timefromemergencyarrivaltoinitiationofthrombolysis} handleInput = {(value) => this.setState({Timefromemergencyarrivaltoinitiationofthrombolysis : value}) } />

                   

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Mechanical thrombectomy:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Mechanicalthrombectomy}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Mechanicalthrombectomy: itemValue})
                        }>
                        <Picker.Item label="Alteplase" value="yes" />
                        <Picker.Item label="Tenecteplase" value="no" />
                    </Picker>
                    <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Mechanical thrombectomy Details:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "Door to puncture time" value={this.state.MechanicalthrombectomyDetails.doorToPuncturetime} handleInput = {(value) => this.setState({MechanicalthrombectomyDetails : {...this.state.MechanicalthrombectomyDetails, doorToPuncturetime : value }})} />
                   <EnterComponent type="default" fieldName = "Door to recanalisation time" value={this.state.MechanicalthrombectomyDetails.doorTorecanalisationTime} handleInput = {(value) => this.setState({MechanicalthrombectomyDetails : {...this.state.MechanicalthrombectomyDetails, doorTorecanalisationTime : value }})} />

                   <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Post thrombolysis/Mechanical thrombectomy CT scan: </Text>
                   </View>
                   <EnterComponent type="default" fieldName = "enter date " value={this.state.PostthrombolysisMechanicalthrombectomy.date} handleInput = {(value) => this.setState({PostthrombolysisMechanicalthrombectomy : {...this.state.PostthrombolysisMechanicalthrombectomy, date : value }})} />
                   <EnterComponent type="default" fieldName = "enter time " value={this.state.PostthrombolysisMechanicalthrombectomy.time} handleInput = {(value) => this.setState({PostthrombolysisMechanicalthrombectomy : {...this.state.PostthrombolysisMechanicalthrombectomy, time : value }})} />

                   <View style={{justifyContent:'center',alignItems:'center'}}>
                     {this.state.image_postThrmbolysis_ctScan_url?<Image source={{uri : this.state.image_postThrmbolysis_ctScan_url}} style={{height:scale(100),width:scale(100),marginBottom:VerticalScale(10)}} />:null}
                   </View>
                   <TouchableOpacity onPress = {() => {this.chooseImage({type:'photo',name:'image_postThrmbolysis_ctScan_url'})}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50),marginVertical:VerticalScale(10)}}>
                     <HeaderButton headerText = "photo for post-thrombolysis-ct-scan" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)',marginVertical:VerticalScale(10)}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Post thrombolytic complications:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Postthrombolyticcomplications}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Postthrombolyticcomplications: itemValue})
                        }>
                        <Picker.Item label="hemorrhagic symptomatic" value="hemorrhagic symptomatic" />
                        <Picker.Item label="asymptomatic" value="asymptomatic" />
                        <Picker.Item label="systemic hemorrhage" value="systemic hemorrhage" />
                    </Picker>
                    <EnterComponent type="default" fieldName = "other post-thrombolytic details" value={this.state.PostthrombolyticcomplicationsOthers} handleInput = {(value) => this.setState({PostthrombolyticcomplicationsOthers : value}) } />

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Antiplatelet started:</Text>
                   </View>
                   <EnterComponent type="default" fieldName = "date and time of starting" value={this.state.Antiplateletstarted} handleInput = {(value) => this.setState({Antiplateletstarted : value}) } />

                   <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                      <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >menu of dose and drug:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Antiplateletdrug}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Antiplateletdrug: itemValue})
                        }>
                        <Picker.Item label="NONE" value="NONE" />
                        <Picker.Item label="Aspirin: 75 mg" value="Aspirin: 75 mg" />
                        <Picker.Item label="Aspirin 150 mg" value="Aspirin 150 mg" />
                        <Picker.Item label="Clopidogreal 75 mg" value="Clopidogreal 75 mg" />
                        <Picker.Item label="Dipyridamole" value="Dipyridamole" />
                        <Picker.Item label="Prasugrel" value="Prasugrel" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Anticoagulants:</Text>
                   </View>
                   
                    <EnterComponent type="default" fieldName = "date and time of starting the drug" value={this.state.Anticoagulantstarted} handleInput = {(value) => this.setState({Anticoagulantstarted : value}) } />
                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Indication:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.AnticoagulantsIndication}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ AnticoagulantsIndication: itemValue})
                        }>
                        <Picker.Item label="NONE" value="NONE" />
                        <Picker.Item label="DVT prophylaxis" value="DVT prophylaxis" />
                        <Picker.Item label="Therapeutic anticoagulants" value="Therapeutic anticoagulants" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >If therapeutic anticoagulants are selected:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Therapeuticanticoagulants}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Therapeuticanticoagulants: itemValue})
                        }>
                        <Picker.Item label="NONE" value="NONE" />
                        <Picker.Item label="Warfarin" value="Warfarin" />
                        <Picker.Item label="rivaroxaban" value="rivaroxaban" />
                        <Picker.Item label="Dabigatran" value="Dabigatran" />
                        <Picker.Item label="apixaban" value="apixaban" />
                        <Picker.Item label="edoxaban" value="edoxaban" />
                        <Picker.Item label="enoxaparin" value="enoxaparin" />
                        <Picker.Item label="fondaparinux" value="fondaparinux" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Antihypertensives:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isAntihypertensives}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isAntihypertensives: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Date and time:" value={this.state.AntihypertensivesDetails.date} handleInput = {(value) => this.setState({AntihypertensivesDetails : {...this.state.AntihypertensivesDetails, date : value }}) } />
                    <EnterComponent type="default" fieldName = "Drug and dose:" value={this.state.AntihypertensivesDetails.drug} handleInput = {(value) => this.setState({AntihypertensivesDetails : {...this.state.AntihypertensivesDetails, drug : value  }}) } />
                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Statins:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isStatins}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isStatins: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Date and time::" value={this.state.Statins.date} handleInput = {(value) => this.setState({Statins : {...this.state.Statins, date : value  }}) } />
                    <EnterComponent type="default" fieldName = "Drug and dose:" value={this.state.Statins.drug} handleInput = {(value) => this.setState({Statins : {...this.state.Statins, drug : value }}) } />

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Mobilisation of patient:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isMobilised}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isMobilised: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Date :" value={this.state.MobilisedDetails.date} handleInput = {(value) =>  this.setState({MobilisedDetails : {...this.state.MobilisedDetails, date : value }}) } />
                    <EnterComponent type="default" fieldName = "time :" value={this.state.MobilisedDetails.time} handleInput = {(value) =>  this.setState({MobilisedDetails : {...this.state.MobilisedDetails, time : value }}) } />

                    <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Dysphagia screening:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isDysphagiascreening}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isDysphagiascreening: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "GUSS score" value={this.state.GUSSScore} handleInput = {(value) => this.setState({GUSSScore : value}) } />

                    <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >DVT prophylaxis:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isDVTprophylaxis}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isDVTprophylaxis: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <EnterComponent type="default" fieldName = "Date :" value={this.state.DVTprophylaxisDetails.date} handleInput = {(value) => this.setState({DVTprophylaxisDetails : {...this.state.DVTprophylaxisDetails, date : value  }}) } />
                    <EnterComponent type="default" fieldName = "time :" value={this.state.DVTprophylaxisDetails.time} handleInput = {(value) => this.setState({DVTprophylaxisDetails : {...this.state.DVTprophylaxisDetails, time : value }}) } />

                    <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                       <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Drug and dose: drop down menu</Text>
                    </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.DVTprophylaxisdrop}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ DVTprophylaxisdrop: itemValue})
                        }>
                        <Picker.Item label="NONE" value="NONE" />
                        <Picker.Item label="Pneumatic compression" value="Pneumatic compression" />
                        <Picker.Item label="UFH: ask for dose" value="UFH: ask for dose" />
                        <Picker.Item label="Fondaparinux: ask for dose" value="Fondaparinux: ask for dose" />
                    </Picker>

                    <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Air or water mattress:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Airorwatermattress}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Airorwatermattress: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <View style={{height:VerticalScale(36),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Physiotherapy started:</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.Physiotherapystarted}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ Physiotherapystarted: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                    <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >If Physiotherapy started, enter date/time</Text>
                   </View>

                    <EnterComponent type="default" fieldName = "Date :" value={this.state.PhysiotherapyStartedDetails.date} handleInput = {(value) => this.setState({PhysiotherapyStartedDetails : {...this.state.PhysiotherapyStartedDetails, date : value  }}) } />
                    <EnterComponent type="default" fieldName = "Time :" value={this.state.PhysiotherapyStartedDetails.time} handleInput = {(value) => this.setState({PhysiotherapyStartedDetails : {...this.state.PhysiotherapyStartedDetails, time : value }}) } />

                    <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Discharge:</Text>
                   </View>

                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.isDischarged}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ isDischarged: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Enter drug and dose :</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "HTN:" value={this.state.HTN} handleInput = {(value) => this.setState({HTN : value})} />
                   <EnterComponent type="default" fieldName = "DM:" value={this.state.DM} handleInput = {(value) => this.setState({DM : value})} />
                   <EnterComponent type="default" fieldName = "AF(Atrial fibrillation):" value={this.state.AF} handleInput = {(value) => this.setState({AF : value})} />
                   <EnterComponent type="default" fieldName = "ischemic stroke:" value={this.state.ischemicstroke} handleInput = {(value) => this.setState({ ischemicstroke : value })} />
                   <EnterComponent type="default" fieldName = "statin were given:" value={this.state.statin} handleInput = {(value) => this.setState({ statin : value })} />
                   <EnterComponent type="default" fieldName = "Smoking cessation advice given or not:" value={this.state.Smokingcessationadvice} handleInput = {(value) => this.setState({ Smokingcessationadvice : value })} />
                   <EnterComponent type="default" fieldName = "Rehabilitation advice given or not:" value={this.state.Rehabilitationadvice} handleInput = {(value) => this.setState({ Rehabilitationadvice : value })} />

                   <View style={{height:VerticalScale(50),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Follow up:</Text>
                   </View>

                   <EnterComponent type="default" fieldName = "telephone:" value={this.state.telephone} handleInput = {(value) => this.setState({telephone : value})} />


                   <View style={{height:VerticalScale(45),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(190,190,190)'}} >
                     <Text allowFontScaling={false} style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'white'}} >Rehabilitation( physiotherapy):</Text>
                   </View>
                   <Picker
                        mode='dropdown'
                        selectedValue={this.state.RehabilitationPhysiotherapy}
                        style={{height: VerticalScale(60), width:"80%",alignSelf:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ RehabilitationPhysiotherapy: itemValue})
                        }>
                        <Picker.Item label="yes" value="yes" />
                        <Picker.Item label="no" value="no" />
                    </Picker>

                   <TouchableOpacity 
                     disabled={!(this.state.image_patient_url && this.state.patientId)}
                     onPress = {() => this.handleSubmit()}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50), marginTop : VerticalScale(10)}}>
                     <HeaderButton headerText = "SUBMIT" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <TouchableOpacity onPress = {() => {this.handleShow()}}
                     activeOpacity={0.75} 
                     style={{height : VerticalScale(50), marginTop:VerticalScale(10)}}>
                     <HeaderButton headerText = "See patients' data" color = "mediumturquoise" />
                   </TouchableOpacity>

                   <View style={{height:VerticalScale(100)}}></View>

               </ScrollView>
            </View>
        )
    }
};

const mapStateToProps = state => {
  console.log("from entry page")
  console.log(state.dataReducer.data);
  return {
    data : state.dataReducer.data
  }
}

export default connect(mapStateToProps,{ dataEntry })(Entry);