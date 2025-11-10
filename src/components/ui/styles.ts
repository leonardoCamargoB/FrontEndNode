import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',

    },
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07,
    },
    header: {
        alignItems: 'center',
        marginBottom: height * 0.03,

    },

    titulo: {
        fontSize: 25,
        fontWeight: '800',
        color: '#000',
    },

    subtitulo: {
        fontSize: 17,
        color: '#666',
        marginTop: height * 0.02,
    },  

    content: {
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 8,
        backgroundColor: '#fff',
    },


});