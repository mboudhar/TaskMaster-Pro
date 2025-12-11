import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TasksScreen from '../screens/TasksScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

const Stack = createStackNavigator();

const TasksStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen 
        name="TasksList" 
        component={TasksScreen}
        options={{ title: 'Mes Tâches' }}
      />
      <Stack.Screen 
        name="TaskDetails" 
        component={TaskDetailsScreen}
        options={{ title: 'Détails de la tâche' }}
      />
    </Stack.Navigator>
  );
};

export default TasksStackNavigator;
