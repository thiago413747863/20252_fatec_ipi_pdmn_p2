import { ScrollView, StyleSheet, View } from 'react-native';
import PicDay from './components/PicDay';
import { ImagesContainer } from './components/ImagesContainer';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <PicDay />
        <ImagesContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    maxWidth: 780,
    marginInline: 'auto',
    paddingHorizontal: 16,
    gap: 24,
  },
});
