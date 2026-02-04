import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import MaskInput from "react-native-mask-input";
import { global } from "./styles";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = TextInputProps & {
  label: string;
  errorText?: string;
  icon?: NameIcon;
  mask?: any;
  onchangeText?: (masked: string, unmasked: string) => void;
};

const TextField = ({
  label,
  errorText,
  icon,
  mask,
  style,
  ...restInputProps
}: Props) => {
  const InputComponent = mask ? MaskInput : TextInput;

  return (
    <View style={global.inputGroup}>
      <Text style={global.label}>{label}</Text>
      <View style={[global.inputIcon, errorText ? global.inputError : null]}>
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

        <InputComponent
          mask={mask}
          keyboardAppearance="dark"
          placeholderTextColor="#9ca3af"
          style={[global.input, style]}
          {...restInputProps}
        />
      </View>
      {!!errorText && <Text style={global.errorText}>{errorText}</Text>}
    </View>
  );
};

export default TextField;
