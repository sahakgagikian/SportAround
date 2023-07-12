import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import AccountAccessScreen from "./src/screens/AccountAccessScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PasswordRecoveryScreen from "./src/screens/PasswordRecoveryScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import CabinetScreen from "./src/screens/CabinetScreen";
import EditPersonalDataScreen from "./src/screens/EditPersonalDataScreen";
import ChooseGameScreen from "./src/screens/ChooseGameScreen";
import CreateGameScreen from "./src/screens/CreateGameScreen";
import FieldListScreen from "./src/screens/FieldListScreen";
import FieldsMapScreen from "./src/screens/FieldsMapScreen";
import FieldInfoScreen from "./src/screens/FieldInfoScreen";
import TeamListScreen from "./src/screens/TeamListScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }

      // AsyncStorage.removeItem('isAppFirstLaunched');
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAppFirstLaunched && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )}
        <Stack.Screen
          name="AccountAccessScreen"
          component={AccountAccessScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="PasswordRecoveryScreen"
          component={PasswordRecoveryScreen}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="CabinetScreen" component={CabinetScreen} />
        <Stack.Screen
          name="EditPersonalDataScreen"
          component={EditPersonalDataScreen}
        />
        <Stack.Screen name="ChooseGameScreen" component={ChooseGameScreen} />
        <Stack.Screen name="CreateGameScreen" component={CreateGameScreen} />
        <Stack.Screen name="FieldListScreen" component={FieldListScreen} />
        <Stack.Screen name="FieldsMapScreen" component={FieldsMapScreen} />
        <Stack.Screen name="FieldInfoScreen" component={FieldInfoScreen} />
        <Stack.Screen name="TeamListScreen" component={TeamListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
