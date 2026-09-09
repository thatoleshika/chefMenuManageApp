import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChefMenu Manager</Text>

      <Text style={styles.subtitle}>
        Manage your menu with ease
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome, Chef!</Text>

        <Text style={styles.cardText}>
          Add and view your menu items from one simple place.
        </Text>

        <Link href="/add-item" style={styles.button}>
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </Link>

        <Link href="/menu" style={styles.menuButton}>
          <Text style={styles.buttonText}>View Menu</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 15,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#8B4513',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    textAlign: 'center',
  },

  menuButton: {
    backgroundColor: '#228B22',
    padding: 16,
    borderRadius: 10,
    textAlign: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});