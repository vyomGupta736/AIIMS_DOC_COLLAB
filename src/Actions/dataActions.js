import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
export const dataEntry = (newData) => {
    return {
        type : 'enter-data',
        payload : newData
    }
}

export const selectedItem = (item) => {
    return {
        type : 'select-item',
        payload : item
    }
};

export const uploadData = (item,data) => {
    console.log("from actions");
    console.log(item);
    const patientId = item.patientId;
    console.log(patientId);
    return async(dispatch) => {
        dispatch({type : 'upload-begin'});
        var image_patient_url_download = '';
        var image_ctBrain_url_download = '' ;
        var video_ctBrain_url_download = '' ;
        var image_MRIbrain_url_download = '' ;
        var video_MRIbrain_url_download = '' ;
        var image_CTAngio_url_download = '' ;
        var video_CTAngio_url_download = '' ;
        var image_carotidDoppler_url_download = '' ;
        var image_physicianNotes_url_download = '' ;
        var image_CTPhoto_url_download = '' ;
        var image_postThrmbolysis_ctScan_url_download = '' ;
        var image_toastClassification_url_download = '' ;
        var image_ECG_url_download = '' ;
        var image_ECHO_url_download = '' ;
        try{
            if(item.image_patient_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_patient_url`).putFile(item.image_patient_url);
                image_patient_url_download = await storage().ref(`AIIMS/${patientId}/image_patient_url`).getDownloadURL();
            }
            
            if(item.image_ctBrain_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_ctBrain_url`).putFile(item.image_ctBrain_url);
                image_ctBrain_url_download = await storage().ref(`AIIMS/${patientId}/image_ctBrain_url`).getDownloadURL();
            }
            
            if(item.video_ctBrain_url)
            {
                await storage().ref(`AIIMS/${patientId}/video_ctBrain_url`).putFile(item.video_ctBrain_url);
                video_ctBrain_url_download = await storage().ref(`AIIMS/${patientId}/video_ctBrain_url`).getDownloadURL();
            }
            
            if(item.image_MRIbrain_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_MRIbrain_url`).putFile(item.image_MRIbrain_url);
                image_MRIbrain_url_download = await storage().ref(`AIIMS/${patientId}/image_MRIbrain_url`).getDownloadURL();
            }
            
            if(item.video_MRIbrain_url)
            {
                await storage().ref(`AIIMS/${patientId}/video_MRIbrain_url`).putFile(item.video_MRIbrain_url);
                video_MRIbrain_url_download = await storage().ref(`AIIMS/${patientId}/video_MRIbrain_url`).getDownloadURL();
            }
            
            if(item.image_CTAngio_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_CTAngio_url`).putFile(item.image_CTAngio_url);
                image_CTAngio_url_download = await storage().ref(`AIIMS/${patientId}/image_CTAngio_url`).getDownloadURL();
            }

            if(item.video_CTAngio_url)
            {
                await storage().ref(`AIIMS/${patientId}/video_CTAngio_url`).putFile(item.video_CTAngio_url);
                video_CTAngio_url_download = await storage().ref(`AIIMS/${patientId}/video_CTAngio_url`).getDownloadURL();
            }

            if(item.image_carotidDoppler_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_carotidDoppler_url`).putFile(item.image_carotidDoppler_url);
                image_carotidDoppler_url_download = await storage().ref(`AIIMS/${patientId}/image_carotidDoppler_url`).getDownloadURL();
            }

            if(item.image_physicianNotes_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_physicianNotes_url`).putFile(item.image_physicianNotes_url);
                image_physicianNotes_url_download = await storage().ref(`AIIMS/${patientId}/image_physicianNotes_url`).getDownloadURL();
            }

            if(item.image_CTPhoto_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_CTPhoto_url`).putFile(item.image_CTPhoto_url);
                image_CTPhoto_url_download = await storage().ref(`AIIMS/${patientId}/image_CTPhoto_url`).getDownloadURL();
            }

            if(item.image_postThrmbolysis_ctScan_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_postThrmbolysis_ctScan_url`).putFile(item.image_postThrmbolysis_ctScan_url);
                image_postThrmbolysis_ctScan_url_download = await storage().ref(`AIIMS/${patientId}/image_postThrmbolysis_ctScan_url`).getDownloadURL();
            }

            if(item.image_toastClassification_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_toastClassification_url`).putFile(item.image_toastClassification_url);
                image_toastClassification_url_download = await storage().ref(`AIIMS/${patientId}/image_toastClassification_url`).getDownloadURL();
            }

            if(item.image_ECG_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_ECG_url`).putFile(item.image_ECG_url);
                image_ECG_url_download = await storage().ref(`AIIMS/${patientId}/image_ECG_url`).getDownloadURL();
            }

            if(item.image_ECHO_url)
            {
                await storage().ref(`AIIMS/${patientId}/image_ECHO_url`).putFile(item.image_ECHO_url);
                image_ECHO_url_download = await storage().ref(`AIIMS/${patientId}/image_ECHO_url`).getDownloadURL();
            }


            await database().ref(`/PATIENTS-AIIMS/${patientId}`)
            .set({...item,
                image_patient_url_download,
                image_ctBrain_url_download,
                video_ctBrain_url_download,
                image_MRIbrain_url_download,
                video_MRIbrain_url_download,
                image_CTAngio_url_download,
                video_CTAngio_url_download,
                image_carotidDoppler_url_download,
                image_physicianNotes_url_download,
                image_CTPhoto_url_download,
                image_postThrmbolysis_ctScan_url_download,
                image_toastClassification_url_download,
                image_ECG_url_download,
                image_ECHO_url_download
            });
            
            const newData = data.map(item => {
                 if(item.patientId === patientId)
                 {
                     item.UPLOADED = true;
                     return item;
                 }
                 else
                 {
                     return item;
                 }
            });

            dispatch({type : 'upload-success',payload : newData});
        }
        catch(err)
        {
            console.log(err);
            dispatch({type : 'upload-failure'});
        }
          
    }
}