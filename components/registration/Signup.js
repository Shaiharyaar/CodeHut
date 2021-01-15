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

export default function Signup(props) {
  const [passwordvisibilty, setPasswordvisibilty] = useState(false);
  const [cpasswordvisibilty, setCpasswordvisibilty] = useState(false);
  const [userID, setUserID] = useState(undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [isVisible, setIsVisible] = useState(props.visibility);
  const [fullnamefocused, setFullnamefocused] = useState(false);
  const [usernameFocused, setusernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [cpasswordFocused, setCpasswordFocused] = useState(false);

  const back = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.getID("userID", "login");
    }, 1000);
  };
  const send = () => {
    if (email && password && username && fullname) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((_authUser) => {
          console.log("user: ", _authUser.user.uid);
          firestore().collection("Users").doc(_authUser.user.uid).set({
            name: fullname,
            email: email,
            username: username,
            photoUrl: "",
          });
          alert("Some");
          setIsVisible(false);
          setTimeout(() => {
            props.getID(_authUser.user.uid, "image");
          }, 1000);

          resetData();
        });
    } else {
      alert("Complete the form");
    }
  };
  const resetData = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setCpassword("");
    setEmail("");
    setUserID("");
    setPasswordvisibilty(false);
    setCpasswordvisibilty(false);
  };
  return (
    <Animatable.View
      animation={isVisible ? "fadeInLeftBig" : "bounceOutLeft"}
      duration={1000}
      style={viewstyles.signupContainer}
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
            placeholder={"Full Name"}
            onChangeText={(name) => setFullname(name)}
            value={fullname}
            style={
              !fullnamefocused
                ? inputstyles.primary
                : inputstyles.primaryelevation
            }
            onFocus={() => setFullnamefocused(true)}
            onBlur={() => setFullnamefocused(false)}
          />
        </View>
        <View style={viewstyles.fieldcontainer}>
          <TextInput
            placeholder={"Username"}
            onChangeText={(user) => {
              setUsername(user);
            }}
            value={username}
            style={
              !usernameFocused
                ? inputstyles.primary
                : inputstyles.primaryelevation
            }
            onFocus={() => setusernameFocused(true)}
            onBlur={() => setusernameFocused(false)}
          />
        </View>
        <View style={viewstyles.fieldcontainer}>
          <TextInput
            placeholder={"Email"}
            value={email}
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
            value={password}
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
          <TextInput
            value={cpassword}
            placeholder={"Confirm Password"}
            onChangeText={(cpass) => setCpassword(cpass)}
            secureTextEntry={!cpasswordvisibilty}
            style={
              !cpasswordFocused
                ? inputstyles.primary
                : inputstyles.primaryelevation
            }
            onFocus={() => setCpasswordFocused(true)}
            onBlur={() => setCpasswordFocused(false)}
          />
        </View>
        <View style={viewstyles.buttoncontainer}>
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
          <TouchableOpacity style={buttonstyles.primary} onPress={back}>
            <Text style={textstyles.primarybuttontext}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={buttonstyles.primary} onPress={send}>
            <Text style={textstyles.primarybuttontext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Text style={textstyles.signupheading}>Sign Up</Text>
      </View>
    </Animatable.View>
  );
}
