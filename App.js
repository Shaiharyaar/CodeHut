/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import Registration from "./components/registraion";
import auth from "@react-native-firebase/auth";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Home/home";
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  const [userloggedIn, setUserloggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // let userinfo = {
        //   uid: authUser.uid,
        //   photo: authUser.photoURL,
        //   email: authUser.email,
        //   displayName: authUser.displayName
        // }
        // dispatch(quizAction.loginUser(userinfo))
        console.log("loggedin User: ", authUser);
      } else {
        // dispatch(quizAction.logoutUser())
        console.log("logout");
      }
    });
    return () => {
      console.log("cleanedup");
    };
  }, []);
  if (!userloggedIn) {
    return (
      <>
        <Registration />
      </>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};
export default App;
