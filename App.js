import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverview from './screens/MealsOverview';
import MealsDetailScreen from './screens/MealsDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favourites-context';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function MyDrawer() {
    return (
      <Drawer.Navigator
      screenOptions={
        {
          headerStyle: { backgroundColor: "rgb(56,13,13)" },
          headerTintColor: "#ffbbbb",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "rgb(56,13,13)" },
          drawerActiveTintColor: "#3f2f25" ,
          drawerInactiveTintColor:  "#ffbbbb",
          drawerActiveBackgroundColor: "#ffbbbb"
        }
      }
      >
      <Drawer.Screen 
        name="All Categories" 
        component={CategoriesScreen} 
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          )
        }}
      />

        <Drawer.Screen name="Favourites" 
        component={FavouritesScreen} 
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          )
        }}
        
        />
      </Drawer.Navigator>
    );
  }
  return (<>
    <StatusBar style="light" />
    <FavouritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerStyle: { backgroundColor: "rgb(56,13,13)" },
            headerTintColor: "#ffbbbb",
            contentStyle: { backgroundColor: "#3f2f25" }
          }
        }
      >
        <Stack.Screen 
        name="MealsCategories"
          component={MyDrawer}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="Meals Overview" 
          component={MealsOverview} />
        <Stack.Screen name="Meals Details" 
          component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavouritesContextProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {

  },
});
