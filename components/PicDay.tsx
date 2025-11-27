import { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { getPicsDayStorage } from '../utils/storage';
import { getDate } from '../utils/date';

export interface PicDayResponse {
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
}

class PicDay extends Component {
  state = {
    picsDay: [] as PicDayResponse[],
  };

  componentDidMount(): void {
    this.getPicDay();
  }

  getPicDay = async () => {
    const picsDay = await getPicsDayStorage();
    this.setState({ picsDay });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Fotos do dia</Text>
        <View style={styles.listContainer}>
          {this.state.picsDay?.length > 0 ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.picsDay}
              keyExtractor={picDay => new Date(picDay.date).toLocaleDateString()}
              contentContainerStyle={styles.flatListContent}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image style={styles.image} source={{ uri: item.url }} resizeMode="cover" />
                  <Text style={styles.dateText}>{getDate(item.date)}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.emptyText}>Sem foto do dia no momento.</Text>
          )}
        </View>
      </View>
    );
  }
}

export default PicDay;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#333',
    textAlign: 'center',
    marginLeft: 4,
  },
  listContainer: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 15,
    paddingVertical: 12,
    backgroundColor: '#f8fafc',
  },
  flatListContent: {
    paddingHorizontal: 10,
    gap: 15,
  },
  card: {
    alignItems: 'center',
    width: 110,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 4,
    backgroundColor: '#eee',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
});
