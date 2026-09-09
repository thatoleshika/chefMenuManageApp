import { Stack } from 'expo-router';
import { MenuProvider } from '../context/MenuContext';

export default function RootLayout() {
  return (
    <MenuProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B4513',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'ChefMenu Manager',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="add-item"
          options={{
            title: 'Add Menu Item',
          }}
        />

        <Stack.Screen
          name="menu"
          options={{
            title: 'My Menu',
          }}
        />

        <Stack.Screen
          name="explore"
          options={{
            title: 'Explore',
          }}
        />
      </Stack>
    </MenuProvider>
  );
}