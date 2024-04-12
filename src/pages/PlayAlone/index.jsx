import React from "react";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styles";
import bombImg from "../../assets/bomba.svg"
import { Button, ImageBackground } from "react-native";
import PasswordInput from "../../components/passwordInput";

export default function PlayAlone() {

  function handleNavToStart() {
    navigation.navigate("Start");
}

function handleStartGame() {
  Alert.alert("Jogo começou!")
}
  
  return (
    <Container>
    <Title>Bomb Game Solo</Title>
    <ImageBackground
      source={bombImg}
      resizeMode="cover"
      style={{
        marginTop: 50,
        minHeight: 130,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer>
        <TextTimer>
         
        </TextTimer>
      </Timer>
    </ImageBackground>

      <TipContainer>
        <TipTitle>Sua dica:</TipTitle>
        <TipText>Aqui a sua dica</TipText>
      </TipContainer>

    <PasswordInput  />

    <Button buttonText="Iniciar" handlePress={handleStartGame} />
    <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
  </Container>
  );
}