import RoomCard from '@/components/RoomCard';
import AuthContainer from '@/components/ui/AuthContainer';
import RenderDatePicker from '@/components/ui/DatePicker';
import { View } from 'react-native';

const RenderExplore = () => {
return (
    <AuthContainer>  
    <View style={{ gap: 24, paddingVertical: 8 }}> 
        <RenderDatePicker/>
        <RoomCard />
    </View>
    </AuthContainer>
);
}
export default RenderExplore;