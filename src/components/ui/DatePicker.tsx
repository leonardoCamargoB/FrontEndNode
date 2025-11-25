import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { picker } from "../ui/picker";

const RenderDatePicker = () => {
const [open, setOpen] = useState(false);
const [date, setDate] = useState("18/11/2025");

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const startDate = getFormatedDate(tomorrow, "YYYY/MM/DD");

const options = {
    backgroundColor: '#080516',
    textHeaderColor: '#b64646ff',
    textDefaultColor: '#FFFFFF',
    selectedTextColor: '#FFF',
    mainColor: '#b64646ff',
    textSecondaryColor: '#FFFFFF',
    borderColor: 'rgba(122, 146, 165, 0.1)',
    defaultFont: 'Inter-Regular',
    headerFont: 'Inter-Bold',
    textFontSize: 15,
    textHeaderFontSize: 17,
    headerAnimationDistance: 100,
    daysAnimationDistance: 200,
    // Configuração do locale para português
    locale: 'portuguese',
};

function handleOnPress() {
    setOpen(!open);
}

function handleChange(selectedDate: string) {
    setDate(selectedDate);
}

return (
    <View>
    <TouchableOpacity onPress={handleOnPress}>
        <Text>Open</Text>
    </TouchableOpacity>
    <Modal animationType="slide" transparent={true} visible={open}>
        <View style={picker.centerView}>
        <View style={picker.modalView}>
            <DatePicker
            mode="calendar"
            selected={date}
            minimumDate={startDate}
            onSelectedChange={handleChange}
            isGregorian={true}
              options={options} // Adicione as opções aqui
            />
            <TouchableOpacity onPress={handleOnPress}>
            <Text>Close</Text>
            </TouchableOpacity>
        </View>
        </View>
    </Modal>
    </View>
);
};

export default RenderDatePicker;