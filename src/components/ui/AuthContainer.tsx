
import { FontAwesome6, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { global } from '../ui/styles';

type NameIcon =
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };


type Props = {
    title?: string;
    subtitle?: string;
    icon?: NameIcon;
    children: React.ReactNode;
    setaEsquerda?: React.ReactNode;
}


const AuthContainer =({title, subtitle, icon, children, setaEsquerda}: Props) => {
return (
    <SafeAreaView style={global.safeArea}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={global.keyboardAvoidingView }>
        <ScrollView contentContainerStyle={global.container}> 
            {setaEsquerda && (
                <View style={{position: 'absolute', top: 30, left: 20, zIndex: 10}}>
                    {setaEsquerda}
                </View>
            )}
        <View style={global.header}>
            {!!icon && (
                    <View>
                        {icon.lib === "MaterialIcons" && (
                        <MaterialIcons name={icon.name} size={20} color="#9ca3af" />
                        )}
                        {icon.lib === "FontAwesome6" && (
                        <FontAwesome6 name={icon.name} size={20} color="#9ca3af" />
                        )}
                        {icon.lib === "FontAwesome5" && (
                        <FontAwesome5 name={icon.name} size={20} color="#9ca3af" />
                        )}
                    </View>
                    )}
            {!! title && <Text style={global.titulo}>{title}</Text>}
            {! ! subtitle &&<Text style={global.subtitulo}>{subtitle}</Text>}
        </View>
        <View >
        {children}
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    );
}

export default AuthContainer;