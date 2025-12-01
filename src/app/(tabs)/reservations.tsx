
import RenderCart from '@/components/carrinho';
import RoomCard from '@/components/ui/RoomCard';
import { View } from 'react-native';

const reservations = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RoomCard></RoomCard>
            <RenderCart></RenderCart>
        </View>
);
};
export default reservations;