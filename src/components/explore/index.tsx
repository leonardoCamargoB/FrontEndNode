import AuthContainer from '@/components/ui/AuthContainer';
import RenderDatePicker from '@/components/ui/DatePicker';
import { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import TextField from '../ui/TextField';

const RenderExplore = () => {
const { width, height } = Dimensions.get('window');
    //useState() para gerenciar e alterar os estados
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [calendar, setCalendar] = useState<"checkin" | "checkout">();


return (
    <AuthContainer>  
    <View> 
        {/*Input do checkin para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkin")}>
        <TextField  
            label='Check-in'
            icon={{ lib: "FontAwesome6", name: "calendar-days" }}
            placeholder='Selecione a data'
            value={checkIn}
        />
        </TouchableOpacity>
        {calendar === "checkin" && (
            <RenderDatePicker
            onSelectDate={(date) => {
                setCheckIn(date);
            }}
            />
        )}

        {/*Input do checkout para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkout")}>
        <TextField  
            label='check-out'
            icon={{ lib: "FontAwesome6", name: "calendar-days" }}
            placeholder='Selecione a data'
            value={checkOut}
        />
        </TouchableOpacity>
        {calendar === "checkout" && (
            <RenderDatePicker
            onSelectDate={(date) => {
                setCheckOut(date)
            }}/>
        )}
        
    </View>
    </AuthContainer>
);
};

export default RenderExplore;