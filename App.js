import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ width: "100%", height: 173, alignItems: "center" }}>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={{ backgroundColor: "#0a0a0a", flex: 1, width: "100%" }}>
        <View>
          <TextInput
            style={{backgroundColor: "#262626", width: 271, height: 54}}
            placeholder="Adicione algo a sua lista"

          ></TextInput>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
  },
  logo: {
    width: "118",
    height: "32",
    marginTop: "70",
    marginBottom: "129",
  }
});
