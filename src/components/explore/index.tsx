import AuthContainer from '@/components/ui/AuthContainer';
import RenderDatePicker from '@/components/ui/DatePicker';
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import RoomCard from '../ui/RoomCard';
import TextField from '../ui/TextField';

const RenderExplore = () => {
const { width, height } = Dimensions.get('window');
    //useState() para gerenciar e alterar os estados
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [calendar, setCalendar] = useState<"checkin" | "checkout">();
    type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

return (
    <AuthContainer>  
    <View style={{display: "flex", flexDirection: 'row', gap: width * 0.05, justifyContent: "center"}}> 
        <View style={{display:"flex", flexDirection:"column"}}>
        {/*Input do checkin para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{width: width * 0.42}}>
        <TextField  
            label='Check-in'
            icon={{ lib: "FontAwesome6", name: "calendar-days" }}
            placeholder='Selecione a data'
            value={checkIn}
        />  
    </View>
        </TouchableOpacity>
        {calendar === "checkin" && (
            <RenderDatePicker onSelectDate={(date) => {setCheckIn(date);}}/>)}
            </View>
        <View style={{display:"flex", flexDirection:"column"}}>
        {/*Input do checkout para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{width: width * 0.42}}>
        <TextField  
            label='check-out'
            icon={{ lib: "FontAwesome6", name: "calendar-days" }}
            placeholder='Selecione a data'
            value={checkOut}
        />
    </View>
        </TouchableOpacity>
        {calendar === "checkout" && (
            <RenderDatePicker onSelectDate={(date) => {setCheckOut(date)}}/>)}
            </View>
        </View>
        <RoomCard
        label="Apartamento"
        icon={{
        lib:"FontAwesome5",
        name:"bed"
        }} 
        description={{
            title:"Caracter",
            text:"1 cama de casal \n1 cama de solteiro",
            price: 180.90
        }}

        />
    </AuthContainer>
);
};

export default RenderExplore;