import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const CustomHeaderRight = () => {
  return (
    <Pressable
      onPress={() => Alert.alert('hi')}
      style={{backgroundColor: 'orange'}}>
      <Text>Custom Button</Text>
    </Pressable>
  );
};
const Screen1 = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <CustomHeaderRight />,
    });
  }, [props.navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
      }}>
      <Text>Screen 1</Text>
      <Pressable onPress={() => props.navigation.navigate('Screen2')}>
        <Text>Go to Screen 2</Text>
      </Pressable>
    </View>
  );
};
const Screen2 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <Text>Screen 2</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'transparent'},
        headerShown: true,

        headerHideShadow: true,
      }}>
      <Stack.Screen
        options={{
          headerLargeTitle: true,
        }}
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen
        options={{
          headerLargeTitle: true,
        }}
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
