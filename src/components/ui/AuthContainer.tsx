
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { global } from '../ui/styles';

type Props = {
    title: string;
    subtitle?: string;
    icon?: keyof typeof FontAwesome6.glyphMap;
    /*children: React.ReactNode;*/
}



export default function AuthContainer({title, subtitle, icon, /*children*/}: Props) {
return (
    <SafeAreaView style={global.safeArea}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={global.keyboardAvoidingView }>
        <ScrollView style={global.container}>
        <View style={global.header}>
            {!! icon && <FontAwesome6 name={icon} size={30} color="black"/>}
            <Text style={global.titulo}>{title}</Text>
            {! ! subtitle &&<Text style={global.subtitulo}>{subtitle}</Text>}
        </View>
        <View style={global.content}>
        {/*children*/}
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    );
}