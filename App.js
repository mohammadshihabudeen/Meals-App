import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealsDetailScreen from './screens/MealsDetailScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (<>
    <StatusBar style="light" />
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
        <Stack.Screen name="MealsCategories"
          component={CategoriesScreen}
        />
        <Stack.Screen name="Meals Overview" 
          component={MealsOverview} />
        <Stack.Screen name="Meals Details" 
          component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
