import styled from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
flex: 1;
padding-top: ${getStatusBarHeight() + RFValue(50)}px;
background-color: #131313;
`;

export const Logo = styled.Image`
width: ${RFValue(270)}px;
height: ${RFValue(50)}px;
margin: 0 auto;
`;

export const Title = styled.Text`
margin-top: ${RFValue(70)}px;
margin-bottom: ${RFValue(110)}px;
font-size: ${RFValue(32)}px;
text-align: center;
color: white;
`;

export const SubTitle = styled.Text`
font-size: ${RFValue(16)}px;
text-align: center;
color: white;
`;

export const Rules = styled.Text`
margin-top: ${RFValue(80)}px;
font-size: ${RFValue(16)}px;
text-align: center;
color: white;
font-weight: bold;
`;