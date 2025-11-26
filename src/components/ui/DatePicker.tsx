import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

type Props ={
    onSelectDate: (date: string) => void;
};

const RenderDatePicker = ({onSelectDate}:  Props) => {

const { width, height } = Dimensions.get('window');
const today = getToday();

return (
    <View style={[styles.container, { width: width * 0.8 }]}>
        <DatePicker
        mode="calendar"
        options={{
            backgroundColor: "#090C08",
            textHeaderColor: "#ff5b5bff",
            textDefaultColor: "#f6c1c1ff",
            selectedTextColor: "#fff",
            mainColor: "#f42b2bff",
            textSecondaryColor: "#d6a9a1ff",
            borderColor: "rgba(122, 146, 165, 0.1)",
            textHeaderFontSize: 14,
            textFontSize: 12,
            headerAnimationDistance: 8,
            daysAnimationDistance: 6,
        }}
        style={ { 
            width: width * 0.75, 
            height: height * 0.3 
        }}
        isGregorian={true}
        minimumDate={today}
        onSelectedChange={(date) => {
            onSelectDate(date);
        }}
        />

    </View>
);
};

const styles = StyleSheet.create({
container: {
    marginVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
},
label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#f6c1c1ff",
    marginBottom: 8,
    alignSelf: 'flex-start',
},
datePickerContainer: {
    backgroundColor: "#090C08",
    borderRadius: 16,
    padding: 6,
    shadowColor: "#ff5b5bff",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: "rgba(244, 43, 43, 0.3)",
},
datePicker: {
    borderRadius: 12,
    overflow: "hidden",
},
selectedDateContainer: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "rgba(244, 43, 43, 0.1)",
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#f42b2bff",
    alignSelf: 'stretch',
},
selectedDateText: {
    color: "#f6c1c1ff",
    fontSize: 12,
    fontWeight: "500",
    textAlign: 'center',
},
});

export default RenderDatePicker;