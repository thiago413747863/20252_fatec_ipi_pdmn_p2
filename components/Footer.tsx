import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.profile}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle-outline" size={40} color="#00AEEF" />
          <Text style={styles.name}>Cristian</Text>
        </View>
        <View style={styles.socialRow}>
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigobossini')}>
            <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 8 }}
            onPress={() => Linking.openURL('https://www.instagram.com/rodrigobossini')}
          >
            <Ionicons name="logo-instagram" size={24} color="#E1306C" />
          </Pressable>
        </View>
      </View>

      <View style={styles.profile}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle-outline" size={40} color="#00AEEF" />
          <Text style={styles.name}>Thiago</Text>
        </View>
        <View style={styles.socialRow}>
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigobossini')}>
            <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 8 }}
            onPress={() => Linking.openURL('https://www.instagram.com/rodrigobossini')}
          >
            <Ionicons name="logo-instagram" size={24} color="#E1306C" />
          </Pressable>
        </View>
      </View>

      <View style={styles.profile}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle-outline" size={40} color="#00AEEF" />
          <Text style={styles.name}>Felipe</Text>
        </View>
        <View style={styles.socialRow}>
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigobossini')}>
            <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 8 }}
            onPress={() => Linking.openURL('https://www.instagram.com/rodrigobossini')}
          >
            <Ionicons name="logo-instagram" size={24} color="#E1306C" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f8fafc',
    marginTop: 20,
    marginBottom: 10,
  },
  profile: {
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    color: '#333',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
