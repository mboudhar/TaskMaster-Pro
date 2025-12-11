import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation simple
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    // Identifiants simulés
    const validCredentials = {
      email: 'admin@taskmaster.com',
      password: 'admin123'
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      // Connexion réussie - passer userId et role
      navigation.navigate('MainApp', { 
        userId: 101, 
        role: 'Admin',
        userName: 'John Doe'
      });
    } else {
      Alert.alert('Erreur', 'Identifiants incorrects');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>TaskMaster Pro</Text>
        <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>

        <View style={styles.hintContainer}>
          <Text style={styles.hintText}>Identifiants de test :</Text>
          <Text style={styles.hintText}>Email: admin@taskmaster.com</Text>
          <Text style={styles.hintText}>Mot de passe: admin123</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  formContainer: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  hintContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff9e6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffeb99',
  },
  hintText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginVertical: 2,
  },
});

export default LoginScreen;
