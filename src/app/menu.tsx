import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useMenu } from '../context/MenuContext';

export default function MenuScreen() {
  const { menuItems } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Menu</Text>

      <Text style={styles.subtitle}>
        {menuItems.length === 0
          ? 'No menu items available'
          : `${menuItems.length} menu item${
              menuItems.length === 1 ? '' : 's'
            }`}
      </Text>

      {menuItems.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>🍽️</Text>

          <Text style={styles.emptyTitle}>
            Your menu is empty
          </Text>

          <Text style={styles.emptyText}>
            Add your first menu item to start building your menu.
          </Text>
        </View>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.nameContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  <Text style={styles.category}>
                    {item.category}
                  </Text>
                </View>

                <Text style={styles.price}>
                  R {item.price}
                </Text>
              </View>

              <View style={styles.divider} />

              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B4513',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 4,
    marginBottom: 20,
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  nameContainer: {
    flex: 1,
    paddingRight: 10,
  },

  itemName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
  },

  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B4513',
    marginTop: 5,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 14,
  },

  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },

  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginTop: 30,
    elevation: 2,
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
  },
});