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

    inputGroup: {
       marginBottom: height * 0.02,

    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#270430f4',
        marginBottom: height * 0.001,
    },
    inputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: width * 0.02,
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderRadius: 10,
    },
    inputError: {
        backgroundColor: '#fed5d5ff',
        borderColor: '#rgba(139, 0, 0, 1)',
    },

    input: {
        flex: 1,
        height: height * 0.06,
        fontSize: 17,
        color: '#000',
        fontWeight: '500',
        marginLeft: width * 0.02,
        paddingHorizontal: width * 0.02,
    },
    
    errorText: {
        color: '#b91c1cff',
        fontSize: 13,
        fontWeight: '500',
        marginTop: height * 0.005,
        marginLeft: width * 0.02,
    },
});