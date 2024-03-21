import { Text, View, Button } from "react-native";
import React, {useContext, useState} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard(){
    const { signOut } = useContext(AuthContext); 

    return(
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Dashboard</Text>
            <Button
            title="Dashboard"
            />
        </SafeAreaView>
    )
}
