import { Dimensions, View } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props = {
  guests: number;
  onSelectSpin: (guests: number) => void;
  minGuests: number;
  maxGuests: number;
  step: number;
  colorMax: string;
  colorMin: string;
};

const InputSpin = ({
  guests,
  onSelectSpin,
  minGuests,
  maxGuests,
  step,
  colorMax,
  colorMin,
}: Props) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: height * 0.015,
      }}
    >
      <InputSpinner
        value={guests}
        onChange={onSelectSpin}
        max={maxGuests}
        min={minGuests}
        step={step}
        colorMax={colorMax}
        colorMin={colorMin}

        /* tamanho */
        width={width * 0.65}
        height={50}

        rounded

        buttonStyle={{
          width: 50,
        }}

    
        /* ✅ borda correta (aqui sim funciona) */
        style={{
          backgroundColor:"#464545",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#000000",

          elevation: 2,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
        }}
      />
    </View>
  );
};

export default InputSpin;