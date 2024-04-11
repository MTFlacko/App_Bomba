import styled from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
flex: 1;
padding: 20px;
padding-top: ${getStatusBarHeight() + RFValue(20)}px;
background-color: #131313;
`;

export const Icon = styled(MaterialIcons)`
font-size: ${RFValue(30)}px;
margin-bottom:${RFValue(20)}px;
color: white;
`;