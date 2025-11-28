import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { currentYear } from '../utils/date';
import { ImagesList } from './ImagesList';
import { Search } from './Search';

export const ImagesContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageYear, setImageYear] = useState('2025');

  function handleSearchByTerm(inputText: string) {
    setSearchTerm(inputText);
  }

  const renderYearButton = (year: string) => {
    const isActive = imageYear === year;
    return (
      <Pressable
        key={year}
        onPress={() => setImageYear(year)}
        style={[styles.yearButton, isActive && styles.yearButtonActive]}
      >
        <Text style={[styles.yearText, isActive && styles.yearTextActive]}>{year}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Search onSearchTerm={handleSearchByTerm} />
      <View style={styles.yearsRow}>
        {renderYearButton(`${currentYear() - 5}`)}
        {renderYearButton(`${currentYear() - 4}`)}
        {renderYearButton(`${currentYear() - 3}`)}
        {renderYearButton(`${currentYear() - 2}`)}
        {renderYearButton(`${currentYear() - 1}`)}
      </View>
      <View style={styles.yearsRowCenter}>{renderYearButton(`${currentYear()}`)}</View>
      <View style={styles.resultsContainer}>
        <ImagesList searchTerm={searchTerm} year={imageYear} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  yearsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 5,
  },
  yearsRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  yearButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    minWidth: 80,
    backgroundColor: '#fff',
  },
  yearButtonActive: {
    backgroundColor: '#E6F0FF',
    borderColor: '#033d7aff',
  },
  yearText: {
    fontSize: 14,
    color: '#333',
  },
  yearTextActive: {
    color: '#033d7aff',
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 10,
    minHeight: 200,
  },
});
