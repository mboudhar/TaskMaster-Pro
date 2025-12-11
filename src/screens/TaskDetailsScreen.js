import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import TaskItem from '../components/TaskItem';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { taskId, task } = route.params;
  const [completed, setCompleted] = useState(task?.completed || false);

  const subtasks = [
    'Analyser les besoins',
    'Créer le design',
    'Développer les fonctionnalités',
    'Tester l\'implémentation',
    'Déployer en production',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>ID de la tâche</Text>
        <Text style={styles.taskId}>#{taskId}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>{task?.title || 'Titre de la tâche'}</Text>
        <Text style={styles.description}>
          {task?.description || 'Description détaillée de la tâche'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statut</Text>
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, completed && styles.statusDotCompleted]} />
          <Text style={styles.statusText}>
            {completed ? 'Terminée' : 'En cours'}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sous-tâches</Text>
        {subtasks.map((subtask, index) => (
          <TaskItem
            key={index}
            title={subtask}
            completed={index < 2}
            onToggle={() => {}}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations supplémentaires</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Priorité:</Text>
          <Text style={styles.infoValue}>Haute</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date limite:</Text>
          <Text style={styles.infoValue}>15 Décembre 2025</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Assigné à:</Text>
          <Text style={styles.infoValue}>John Doe</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, completed && styles.buttonCompleted]}
        onPress={() => setCompleted(!completed)}
      >
        <Text style={styles.buttonText}>
          {completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  taskId: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFA500',
    marginRight: 8,
  },
  statusDotCompleted: {
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 15,
    color: '#666',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonCompleted: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TaskDetailsScreen;
