import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  buttonstyles,
  imgstyles,
  inputstyles,
  textstyles,
  viewstyles,
} from "../../resources/img/logo/styling/styles";

import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export default function Login(props) {
  const [passwordvisibilty, setPasswordvisibilty] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(props.visibility);

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const send = () => {
    // if (email && password && username && fullname) {
    //   auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((_authUser) => {
    //       setUserID(_authUser.user.uid);
    //       firestore()
    //         .collection("Users")
    //         .doc(_authUser.user.uid)
    //         .set({
    //           name: fullname,
    //           email: email,
    //           username: username,
    //           photoUrl: "",
    //         })
    //         .then((final) => {
    //           alert("Some");
    setIsVisible(false);
    setTimeout(() => {
      props.getID("userID", "signup");
    }, 1000);
    resetData();
    //             })
    //             .catch((err) => {
    //               console.log("Error occured while adding: ", err);
    //             });
    //         });
    //     } else {
    //       alert("Complete the form");
    //     }
  };
  const resetData = () => {
    setPassword("");
    setEmail("");
    setPasswordvisibilty(false);
  };
  return (
    <Animatable.View
      animation={isVisible ? "fadeInLeftBig" : "bounceOutLeft"}
      duration={1000}
      style={viewstyles.loginContainer}
    >
      <ScrollView
        style={viewstyles.scrollscreenspacing}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <Image
            source={require("../../resources/img/logo/logo.png")}
            resizeMode={"cover"}
            style={imgstyles.logo}
          />
        </View>
        <View style={viewstyles.fieldcontainer}>
          <TextInput
            placeholder={"Email"}
            style={
              !emailFocused ? inputstyles.primary : inputstyles.primaryelevation
            }
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={viewstyles.fieldcontainer}>
          <TextInput
            placeholder={"Password"}
            secureTextEntry={!passwordvisibilty}
            onChangeText={(pass) => setPassword(pass)}
            style={
              !passwordFocused
                ? inputstyles.primary
                : inputstyles.primaryelevation
            }
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </View>
        <View style={viewstyles.fieldcontainer}>
          {/* {uri !== "" && (
          <Image
            source={{ uri: uri }}
            resizeMode={"cover"}
            style={imgstyles.logo}
          />
        )} */}

          {/* <TouchableOpacity style={buttonstyles.primary} onPress={getimage}>
          <Text>Pick Image</Text>
        </TouchableOpacity> */}
          <TouchableOpacity style={buttonstyles.primary} onPress={send}>
            <Text style={textstyles.primarybuttontext}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Do not have an account?</Text>
          <TouchableOpacity>
            <Text style={textstyles.link}> Create an account. </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Text style={textstyles.signupheading}>Login</Text>
      </View>
    </Animatable.View>
  );
}
