import React from "react";
import Content from "./Content.js";
import "./style.css";
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { BrowserRouter,Switch,Route,Link,useHistory} from "react-router-dom";
var firebaseConfig = {
    apiKey: "AIzaSyCjSYyCaUAoeOhwa5xYNbxpJ668xLpRND0",
    authDomain: "restart-1ad32.firebaseapp.com",
    projectId: "restart-1ad32",
    storageBucket: "restart-1ad32.appspot.com",
    messagingSenderId: "786954108275",
    appId: "1:786954108275:web:b34f795a9a4a4018cb5906",
    measurementId: "G-0M9VW8FHW3"
  };

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export default function App() {
 
  // The sidebar must always be the component that is loaded across the application, but the menu pane must be re-written with the content that was selected. How do i do this?
  return (
   <BrowserRouter>
      <Content/>
   </BrowserRouter>
  );
}
