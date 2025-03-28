import React from "react";
import {Text} from 'react-native';

export default function QuartoComponente(){
    const UsuarioLogado = true 
    return (
        <Text>{UsuarioLogado ? 'Seja Bem vindo.' : 'Por favor efetue o login.'}</Text>
    );
}