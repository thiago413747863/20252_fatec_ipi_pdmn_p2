import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface SearchProps {
  onSearchTerm: (text: string) => void;
}

export const Search = ({ onSearchTerm }: SearchProps) => {
  const [inputText, setInputText] = useState('');

  function handleSearchByTerm() {
    const text = inputText;
    onSearchTerm(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Digite o que deseja buscar (ex: moon)..."
        placeholderTextColor="#999"
      />
      <Pressable style={styles.searchButton} onPress={handleSearchByTerm}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  searchButton: {
    borderWidth: 1,
    borderColor: '#033d7aff',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#033d7aff',
    textTransform: 'uppercase',
  },
});
