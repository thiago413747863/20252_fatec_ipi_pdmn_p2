import { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { nasaClient } from '../utils/axios';

interface ImageData {
  title: string;
  description: string;
  url: string;
}

interface ImagesListProps {
  searchTerm: string;
  year: string;
}

export class ImagesList extends Component<ImagesListProps> {
  constructor(props: ImagesListProps) {
    super(props);
  }

  state = {
    images: [] as ImageData[],
    loading: false,
  };

  getImages = async () => {
    this.setState({ loading: true });
    const res = await nasaClient.get('search', {
      params: {
        term: this.props.searchTerm,
        year: this.props.year,
      },
    });
    const { data } = res;
    this.setState({ images: data.images || [] });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps: ImagesListProps) {
    if (prevProps.searchTerm !== this.props.searchTerm || prevProps.year !== this.props.year) this.getImages();
  }

  render() {
    if (this.state.loading) {
      return <Text style={styles.loadingText}>Carregando imagens...</Text>;
    }

    return (
      <>
        {this.state.images?.length > 0 ? (
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            data={this.state.images}
            keyExtractor={image => `${image.title}${Math.random()}`}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Image style={styles.image} source={{ uri: item.url }} resizeMode="cover" />
                <Text style={styles.cardDesc} numberOfLines={2}>
                  {item.description ? item.description : 'Sem descrição'}
                </Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptyText}>Nenhuma imagem encontrada.</Text>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  columnWrapper: {
    justifyContent: 'center',
    gap: 24,
    flexWrap: 'wrap',
  },
  card: {
    maxWidth: 200,
    marginBottom: 24,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});
