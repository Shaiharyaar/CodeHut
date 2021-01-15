import storage from "@react-native-firebase/storage";
import DocumentPicker from "react-native-document-picker";

import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  buttonstyles,
  imgstyles,
  textstyles,
  viewstyles,
} from "../../resources/img/logo/styling/styles";

import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export default function ImageUpload(props) {
  const [imageBlob, setimageBlob] = useState("");
  const [uri, setUri] = useState("");
  const [isVisible, setIsVisible] = useState(props.visibility);

  const send = () => {
    if (typeof props.userID !== undefined) {
      storage()
        .ref(`profileImages/${props.userID}`)
        .put(imageBlob)
        .then(function (snapshot) {
          console.log("Uploaded a blob or file!");
          console.log(snapshot);
          if (snapshot.state === "success") {
            storage()
              .ref("profileImages")
              .child(props.userID)
              .getDownloadURL()
              .then((url) => {
                firestore()
                  .collection("Users")
                  .doc(props.userID)
                  .update({
                    photoUrl: url,
                  })
                  .then(() => {
                    console.log("User updated!");
                  });
              });
          }
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error(error);
        });
    } else {
      alert("ID is undefined");
    }
  };

  const getimage = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
      setUri(res.uri);
      const response = await fetch(res.uri);

      const blob = await response.blob();
      setimageBlob(blob);
      console.log(blob);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <Animatable.View
      animation={isVisible ? "fadeInRight" : "bounceOutRight"}
      duration={1000}
      style={viewstyles.imageUploadContainer}
    >
      <View style={viewstyles.fieldcontainer}>
        <View>
          <Text style={textstyles.heading1}>
            {"Upload Picture".toUpperCase()}
          </Text>
        </View>
        <Image
          source={
            uri !== ""
              ? { uri: uri }
              : require("../../resources/img/dummy/dummyimage.jpg")
          }
          resizeMode={"cover"}
          style={imgstyles.uploadImage}
        />
        <View style={viewstyles.buttoncontainer}>
          <TouchableOpacity
            style={
              uri === "" ? buttonstyles.secondary : buttonstyles.secondaryDark
            }
            onPress={send}
          >
            <Text
              style={
                uri === "" ? textstyles.secondary : textstyles.secondaryDark
              }
            >
              {uri === "" ? "Skip" : "Next"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonstyles.secondary}>
            <Text
              style={textstyles.secondary}
              onPress={uri === "" ? getimage : () => setUri("")}
            >
              {uri === "" ? "Upload" : "Remove"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={textstyles.imageuploadheading}>Upload Image</Text>
      </View>
    </Animatable.View>
  );
}
