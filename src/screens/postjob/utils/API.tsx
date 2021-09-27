import firebase from 'firebase';
import { PostJobInfo } from '../models/models';

// eslint-disable-next-line import/prefer-default-export
export const FIREBASE_POSTJOB_CALLS = {
  postImage: (imageUri: string) => {
    const storageRef = firebase.storage().ref().child(`jobImages/hello.jpeg`);
    const upload = async () => {
      const file = await fetch(imageUri);
      const blob = await file.blob();
      const firebaseUploadSnapshot = await storageRef.put(blob);
      const fileUri = await firebaseUploadSnapshot.ref.getDownloadURL();
      return fileUri;
    };
    return upload();
  },
  postJob: (info: PostJobInfo) => {
    firebase.firestore().collection('jobs').doc().set(info);
  },
};