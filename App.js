import React from "react";
import Rules from "./src/pages/rules";
import Start from "./src/pages/start";
import { StatusBar } from "react-native";


export default function App(){
  return ( <>
  <StatusBar color="light"/>
  <Rules />
  </>
  );
}