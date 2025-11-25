/* Definir o fluxo de navegação entre as telas disponíveis em Tab Navigator
Explorar, Reservas, Perfil*/
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#ff6b6b', tabBarInactiveTintColor: '#a0a0a0', headerShown: false, tabBarStyle: { backgroundColor: '#080516', borderTopColor: '#ff6b6b',borderTopWidth: 1,height: 60,paddingBottom: 8,paddingTop: 8},tabBarLabelStyle: {fontSize: 12,fontWeight: '600',marginBottom: 4}
        }}>
        <Tabs.Screen
            name="explorer"
            options={{
            title: 'Explorar',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="search" color={color} />,
            }}
        />
        <Tabs.Screen
            name="reservations"
            options={{
            title: 'reservations',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="paperclip" color={color} />,
            }}
        />
        <Tabs.Screen
            name="account"
            options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
            }}
        />
        </Tabs>
    );
}