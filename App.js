import React from 'react';
import {View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './src/Screens/Signup';
import Entry from "./src/Screens/Entry";
import Signin from './src/Screens/Signin';
import Data from './src/Screens/Data';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import ImageResizer from 'react-native-image-resizer';
import { persistor, store } from './src/Store/Index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import IndividualData from './src/Screens/IndividualData';
//import RNFetchBlob from 'rn-fetch-blob';
// const reference = storage().ref('/new/latestImage1');
// import {View,Text,Button, Image} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import { Platform } from 'react-native';
// import axios from 'axios';
// import FormData from 'form-data';



// import Picker from "react-native-image-picker";

// const url = "https://gentle-wave-86529.herokuapp.com/";

// const instance = axios.create({
//   baseURL : url,
//   method : 'POST',
//   'content-type': 'multipart/form-data'
// });

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown : false}} />
      <Stack.Screen name="Signin" component={Signin} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

const MainFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entry" component={Entry} options={{headerShown : false}} />
      <Stack.Screen name="Data" component={Data} options={{headerShown : false}} />
      <Stack.Screen name="IndividualData" component={IndividualData} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default class App extends React.Component{

  state = {
    imagePath : '',
    filePath : '',
    patientId : 123456
  }

  chooseImage = () => {
    ImagePicker.showImagePicker({
      title : 'choose photo/video',
      chooseWhichLibraryTitle : 'choose from where to have data',
      mediaType : 'video',
      takePhotoButtonTitle : 'take photo or video '
    },(response) => {
       if(response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         } else {
           console.log(Object.keys(response));
           console.log(response.uri);
           console.log(response.path);
           this.setState({imagePath : response.path});
          //  ImageResizer.createResizedImage(response.uri, 800, 800,'JPEG', 100)
          //   .then(response => {
          //     // response.uri is the URI of the new image that can now be displayed, uploaded...
          //     // response.path is the path of the new image
          //     // response.name is the name of the new image with the extension
          //     // response.size is the size of the new image
          //     console.log("new compressed image");
          //     console.log(response.path);
          //     this.setState({imagePath : response.path});
          //   })
          //   .catch(err => {
          //     // Oops, something went wrong. Check that the filename is correct and
          //     // inspect err to get more details.
          //   });
          }
      })
  }

  sendImage = async () => {
    const patientId = this.state.patientId;
    console.log(patientId);
    try{
      await storage().ref(`AIIMS/${patientId}/image_patient_url`).putFile(this.state.imagePath);
      const url = await storage()
        .ref(`AIIMS/${patientId}/image_patient_url`)
        .getDownloadURL();
      console.log(url);
    }
    catch(err)
    {
       console.log(err);
    }
  }

  chooseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        readContent:true
      });
      console.log(Object.keys(res));
      console.log(res.uri);
      console.log(res.type);
      console.log(res.fileCopyUri);
      this.setState({filePath : res.uri});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  sendFile = async () => {
    const refer = storage().ref('new file');
    try{
      await refer.putFile(this.state.filePath);
    }catch(err)
    {
      console.log(err)
    }
  }

  list = () => {
    const refer = storage().ref("gs://aiims-37dba.appspot.com");
    refer.list().then(result => {
      console.log(result);
    })
  }

  render(){
    return (
        // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        //   <Button title="choose image from gallery" onPress={() => this.chooseImage()} />
        //   <Button title="choose file from documents" onPress={() => this.chooseFile()} />
        //   <Button title="send file" onPress={() => this.sendImage()} />
        //   <Button title="send video file" onPress={() => this.sendFile()} />
        //   <Button title="give me the list" onPress={() => this.list()} />
        // </View>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <NavigationContainer>
              <Stack.Navigator >
                <Stack.Screen name="MainFlow" component={MainFlow} options={{headerShown:false}} />
              </Stack.Navigator>
            </NavigationContainer>
        </PersistGate>
      </Provider>
      
    )
  }
  
  //    
  // state = {
  //   photo : null,
  //   data : null
  // }

  // imagePicker = () => {
  //   ImagePicker.launchImageLibrary({},(response) => {
  //     if(response.data)
  //     {
  //       this.setState({photo : response, data : response.data});
  //     }
  //   })
  // }

  // imageSender = () => {
  //   RNFetchBlob.fetch('POST', 'http://192.168.43.48:3000/doctors-signup', {
  //     Authorization : "Bearer access-token",
  //     otherHeader : "foo",
  //     'Content-Type' : 'multipart/form-data',
  //   }, [
  //     { name : 'name', data : 'vyom'},
  //     { name : 'username', data : 'vyom@gmail.com'},
  //     { name : 'password', data : 'gupta'},
  //     { name : 'department', data : 'ortho'}
  //     //{ name : 'photo', filename : 'image.jpeg', type:'image/jpeg', data: this.state.data}
  //   ]).then((resp) => {
  //     // ...
  //     console.log(resp.data);
  //   }).catch((err) => {
  //     // ...
  //     console.log(err);
  //   })
  // }

  // render()
  // {
  //   return (
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       {(this.state.photo)?<Image source={{uri : this.state.photo.uri}}
  //         style={{width:100,height:100}}
  //        />:null}
  //       <Button title="choose image from gallery" onPress={this.imagePicker} />
  //       <Button title="send image to server" onPress={this.imageSender} />
  //     </View>
  //   )
  // }
}