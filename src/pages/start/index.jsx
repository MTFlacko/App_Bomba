import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponent from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";


export default function Start() {
  const navigation = useNavigation();

  const handleNavToPlayAlone = () => {
    console.log("teste de play alone")
  }
  const handleNavToPlayTogether = () => {
    console.log("teste de play together")
  }

  const handleNavToRules = () => {
    navigation.navigate("Rules");
  }

  return<Container>
      <Logo source={require("../../assets/darling.png")} style={{resizeMode: "contain"}} />
      <Title>Bem-vindo ao {"\n"} Bomb Game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText={"Jogar Solo"} handlePress={handleNavToPlayAlone}/>
      <ButtonComponent buttonText={"Jogar em Dupla"} handlePress={handleNavToPlayTogether}/>
      <Rules onPress={handleNavToRules}>ver as regras do jogo</Rules>
  </Container>
}