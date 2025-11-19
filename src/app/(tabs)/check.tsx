import RoomCard from '@/components/RoomCard';
import { View } from 'react-native';

const reservations = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RoomCard />
        </View>
);
};
export default reservations;