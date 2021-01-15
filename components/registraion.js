import { SafeAreaView, ScrollView, TextInput } from "react-native";
import { viewstyles, inputstyles } from "../resources/img/logo/styling/styles";

import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import Signup from "./registration/Signup";
import ImageUpload from "./registration/Imageupload";
import Login from "./registration/login";
export default function Registration() {
  const [userID, setUserID] = useState(undefined);
  const [signupContainerVisible, setSignupContainerVisible] = useState(false);
  const [imageContainerVisible, setImageContainerVisible] = useState(false);
  const [logincontainerVisible, setLogincontainerVisible] = useState(true);

  const getuserID = (id, container) => {
    setUserID(id);
    console.log("USER ID: ", id);
    if (container == "image") {
      setSignupContainerVisible(false);
      setImageContainerVisible(true);
    } else if (container == "login") {
      setSignupContainerVisible(false);
      setImageContainerVisible(false);
      setLogincontainerVisible(true);
    } else if (container == "signup") {
      setImageContainerVisible(false);
      setLogincontainerVisible(false);
      setSignupContainerVisible(true);
    }
  };
  // const send = () => {
  //   if (email && password && username && fullname) {
  //     auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((_authUser) => {
  //         console.log("User account created & signed in!", _authUser.user.uid);
  //         // const id = uuidv4();
  //         if (_authUser.user.uid) {
  //           storage()
  //             .ref(`profileImages/${_authUser.user.uid}`)
  //             .put(imageBlob)
  //             .then(function (snapshot) {
  //               console.log("Uploaded a blob or file!");
  //               console.log(snapshot);
  //               if (snapshot.state === "success") {
  //                 storage()
  //                   .ref("profileImages")
  //                   .child(_authUser.user.uid)
  //                   .getDownloadURL()
  //                   .then((url) => {
  //                     firestore()
  //                       .collection("Users")
  //                       .doc(_authUser.user.uid)
  //                       .set({
  //                         name: fullname,
  //                         email: email,
  //                         username: username,
  //                         photoUrl: url,
  //                       })
  //                       .then((finaluser) => {
  //                         console.log("User added!", finaluser);
  //                       });
  //                   });
  //               }
  //             })
  //             .catch((error) => {
  //               if (error.code === "auth/email-already-in-use") {
  //                 console.log("That email address is already in use!");
  //               }

  //               if (error.code === "auth/invalid-email") {
  //                 console.log("That email address is invalid!");
  //               }

  //               console.error(error);
  //             });
  //         }
  //       });
  //   } else {
  //     alert("Complete the form");
  //   }
  // };

  return (
    <SafeAreaView style={viewstyles.mainscreen}>
      {signupContainerVisible && (
        <Signup getID={getuserID} visibility={signupContainerVisible} />
      )}
      {imageContainerVisible && (
        <ImageUpload userID={userID} visibility={imageContainerVisible} />
      )}
      {logincontainerVisible && (
        <Login getID={getuserID} visibility={logincontainerVisible} />
      )}
    </SafeAreaView>
  );
}
