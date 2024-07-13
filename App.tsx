import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
export default function App(): React.JSX.Element {
  

  return (
    <View style={styles.container}>
      <AppFooter />
      <AppHeader />
      <Content Username="Patsakorn Chinplikanon" Message="Message from App.tsx"/>
        
  
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
