import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";


type Props = TextInputProps & {
    label?: string;
    errorMessage?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
};

export default function TextField({label, errorMessage, icon, ...props}: Props) {
    return (
        <View>
            <text>Teste de label</text>
        <view>
            (!! icon && {
                <MaterialIcons name={icon} size={20} color="black"/>
            })
            <TextInput
                value="Isso é um teste muito legal "
            />
        </view>
        </View>
    );
}