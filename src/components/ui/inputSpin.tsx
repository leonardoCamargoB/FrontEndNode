import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";


const InputSpin = ()=>{
    const {width, height} = Dimensions.get("window");
    return (
        <InputSpinner
        max={6}
        min={1}
        step={1}
        colorMax={"#DC143C"}
        colorMin={"#DC143C"}
        style={{
            width: width * 0.45
        }}

        />
    );

};
export default InputSpin