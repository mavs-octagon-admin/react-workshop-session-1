import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground } from 'react-native';

const image ={uri: "./assets/puppy-free-to-use.jpg"};

export default function App() {
  return (
  

    <View style={styles.container}>
  
	  
      <Text>This just me making sure i can see changes on both IOS and Android</Text>
	<Button
	  onPress={()=>console.log("I am pressing button on app")}
	  title = "Le ugly Button"
	  color = "#AEE254"
	  accessibilityLabel = "This is and ugly green button"
	/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
container2: {
    flex: 1,
  },
image: {
    flex: 1,
    justifyContent: "center"
  },	
	
});
