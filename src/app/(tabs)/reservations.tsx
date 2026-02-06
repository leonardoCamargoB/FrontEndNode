
import RenderCart from '@/components/carrinho';
import RenderReservations from '@/components/reservations';
import AuthContainer from '@/components/ui/AuthContainer';
import RoomCard from '@/components/ui/RoomCard';
import { View } from 'react-native';

const reservations = () => {
    return (
        <AuthContainer>
        <RenderReservations/>
    </AuthContainer>
);
};
export default reservations;