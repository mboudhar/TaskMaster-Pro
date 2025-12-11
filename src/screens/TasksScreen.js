import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';

const TasksScreen = ({ navigation }) => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Développer l\'interface utilisateur',
      description: 'Créer les composants TaskCard, TaskItem et UserProfile pour l\'application',
      completed: false,
    },
    {
      id: 2,
      title: 'Implémenter la navigation',
      description: 'Configurer React Navigation avec Stack et Tab navigators',
      completed: false,
    },
    {
      id: 3,
      title: 'Ajouter l\'authentification',
      description: 'Créer un écran de connexion avec validation des identifiants',
      completed: false,
    },
    {
      id: 4,
      title: 'Tester l\'application',
      description: 'Vérifier que tous les critères de réussite sont validés',
      completed: false,
    },
    {
      id: 5,
      title: 'Documentation du code',
      description: 'Ajouter des commentaires et documenter l\'architecture',
      completed: false,
    },
  ]);

  const handleTaskPress = (task) => {
    navigation.navigate('TaskDetails', { 
      taskId: task.id,
      task: task 
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            description={item.description}
            onPress={() => handleTaskPress(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default TasksScreen;
