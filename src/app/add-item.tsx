import { useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useMenu } from '../context/MenuContext';

export default function AddItemScreen() {
  const { addMenuItem } = useMenu();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    const trimmedCategory = category.trim();
    const trimmedPrice = price.trim();

    if (!trimmedName) {
      Alert.alert(
        'Missing Information',
        'Please enter a menu item name.'
      );
      return;
    }

    if (!trimmedDescription) {
      Alert.alert(
        'Missing Information',
        'Please enter a description for the menu item.'
      );
      return;
    }

    if (!trimmedCategory) {
      Alert.alert(
        'Missing Information',
        'Please enter a category.'
      );
      return;
    }

    if (!trimmedPrice) {
      Alert.alert(
        'Missing Information',
        'Please enter a price.'
      );
      return;
    }

    const numericPrice = Number(trimmedPrice);

    if (isNaN(numericPrice) || numericPrice <= 0) {
      Alert.alert(
        'Invalid Price',
        'Please enter a valid price greater than zero.'
      );
      return;
    }

    addMenuItem(
      trimmedName,
      trimmedDescription,
      trimmedCategory,
      numericPrice.toFixed(2)
    );

    Alert.alert(
      'Menu Item Added',
      `${trimmedName} has been added to your menu.`
    );

    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Add Menu Item</Text>

      <Text style={styles.subtitle}>
        Enter the details of your new dish below.
      </Text>

      <View style={styles.formCard}>
        <Text style={styles.label}>Menu Item Name</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Grilled Chicken"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Description</Text>

        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Describe the dish"
          placeholderTextColor="#999"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Category</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Main Course"
          placeholderTextColor="#999"
          value={category}
          onChangeText={setCategory}
        />

        <Text style={styles.label}>Price</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. 120.00"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={price}
          onChangeText={setPrice}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleAddItem}
        >
          <Text style={styles.buttonText}>
            Add Menu Item
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 25,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    color: '#333',
  },

  description: {
    height: 110,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },

  buttonPressed: {
    backgroundColor: '#6F350F',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});