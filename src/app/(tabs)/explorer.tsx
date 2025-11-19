import RenderDatePicker from '@/components/ui/DatePicker';
import { View } from 'react-native';
const explore = () =>{
return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RenderDatePicker />
        </View>
);
}
export default explore;