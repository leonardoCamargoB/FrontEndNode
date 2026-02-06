import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#1A1A1A",
    },

    keyboardAvoidingView: {
        flex: 1,
    },

    container: {
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.045,
    },

    header: {
        alignItems: "center",
        marginBottom: height * 0.025,
    },

    titulo: {
        fontSize: 34,
        fontWeight: "300",
        color: "#DC143C",
        letterSpacing: 1.4,
        textAlign: "center",
    },

    subtitulo: {
        fontSize: 16,
        color: "#B8B8B8",
        marginTop: height * 0.018,
        textAlign: "center",
        lineHeight: 24,
        letterSpacing: 0.4,
        maxWidth: "90%",
    },

    content: {
        borderRadius: 22,
        padding: width * 0.055,
        backgroundColor: "#2D2D2D",
        borderWidth: 1,
        borderColor: "#444444",
    },

    inputGroup: {
        marginBottom: height * 0.028,
    },

    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#DC143C",
        marginBottom: height * 0.01,
        letterSpacing: 1,
        textTransform: "uppercase",
    },

    inputIcon: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width * 0.045,
        borderWidth: 1.5,
        borderColor: "#555555",
        borderRadius: 16,
        backgroundColor: "#3A3A3A",
        height: height * 0.068,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
    },

    inputError: {
        backgroundColor: "#3A2A2A",
        borderColor: "#FF6B6B",
    },

    input: {
        flex: 1,
        fontSize: 14,
        color: "#E8E8E8",
        fontWeight: "500",
        marginLeft: width * 0.03,
        letterSpacing: 0.3,
    },

    eyeIcon: {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: [{ translateY: -12 }],
    },

    errorText: {
        color: "#FF6B6B",
        fontSize: 13,
        marginTop: height * 0.007,
        marginLeft: width * 0.02,
        fontStyle: "italic",
        letterSpacing: 0.3,
    },

    primaryButton: {
        backgroundColor: "#DC143C",
        borderRadius: 18,
        height: height * 0.07,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.035,
        shadowColor: "#B22222",
        shadowOpacity: 0.45,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 7,
        borderWidth: 1,
        borderColor: "#B22222",
    },

    primaryButtonDisabled: {
        backgroundColor: "#555555",
        borderRadius: 18,
        height: height * 0.07,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.035,
        borderWidth: 1,
        borderColor: "#666666",
    },

    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "600",
        letterSpacing: 1.6,
        textTransform: "uppercase",
    },

    buttonTextDisabled: {
        color: "#999999",
        fontSize: 17,
        fontWeight: "600",
        letterSpacing: 1.6,
        textTransform: "uppercase",
    },

    secondaryButton: {
        borderRadius: 18,
        height: height * 0.065,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,
        borderWidth: 2,
        borderColor: "#DC143C",
    },

    secondaryButtonText: {
        color: "#DC143C",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 1.3,
    },

    tertiaryButton: {
        borderRadius: 16,
        height: height * 0.055,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.015,
        borderWidth: 1,
        borderColor: "#777777",
    },

    tertiaryButtonText: {
        color: "#B8B8B8",
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 0.9,
    },

    linkButton: {
        marginTop: height * 0.012,
        alignItems: "center",
    },

    linkButtonText: {
        color: "#DC143C",
        fontSize: 14,
        fontWeight: "500",
        textDecorationLine: "underline",
        letterSpacing: 0.6,
    },
});
