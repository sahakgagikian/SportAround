import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const AccountAccessScreen = ({ navigation }) => {
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.3,
          justifyContent: "space-between",
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {/* Render buttons */}
        <View style={{ marginBottom: 20, height: 50 }}>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.replace("RegistrationScreen")}
          >
            <Text style={{ fontSize: 18, color: "#6D61E7" }}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20, height: 50 }}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.replace("LoginScreen")}
          >
            <Text style={{ fontSize: 18, color: COLORS.white }}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <ImageBackground
        source={require("../images/2a.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Спорт рядом</Text>
          </View>
        </View>
      </ImageBackground>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: width,
    height: height,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  register: {
    flex: 1,
    width: "100%", // Changed to "100%"
    borderRadius: 100,
    borderWidth: 2, // Changed "border" to "borderWidth"
    borderColor: "#6D61E7", // Changed "2px solid #6D61E7" to "#6D61E7"
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
  },
  login: {
    flex: 1,
    width: "100%", // Changed to "100%"
    borderRadius: 100,
    backgroundColor: "#6566FD",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
  },
});

export default AccountAccessScreen;
