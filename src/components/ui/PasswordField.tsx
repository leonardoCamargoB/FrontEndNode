import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { global } from "./styles";
import TextField from "./TextField";

type Props = React.ComponentProps<typeof TextField>;


const PasswordField = (resInpuitProps: Props) => {
    /*React.useState*/
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField
                {...resInpuitProps}
                secureTextEntry={!show}
                autoCorrect={false}
            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((showTrue) => !showTrue)}>
                <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={23} color="black"/>
            </TouchableOpacity>

        </View>
    );
};


export default PasswordField;