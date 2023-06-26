import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const COLORS = { primary: "#0E0938", white: "#fff", line: "#656B82" };

const PasswordRecoveryScreen = ({ navigation }) => {
  const Footer = () => {
    return (
      <View style={styles.footer}>
        {/* Render buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.replace("AccountAccessScreen")}
          >
            <Text style={styles.buttonText}>Отправить пароль</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.82843 8.70711L10.1213 16L8.70711 17.4142L0 8.70711L8.70711 0L10.1213 1.41421L2.82843 8.70711Z"
              fill="white"
            />
          </svg>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Восстановление пароля</Text>
        </View>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Введите адрес электронной почты,{"\n"}
          мы вышлем вам новый пароль
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Render login form */}
          <View style={styles.formItem}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={COLORS.white}
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  subtitleContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    position: "absolute",
    top: 40,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: 30,
  },
  formItem: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingHorizontal: 10,
    color: COLORS.white,
    textAlignVertical: "top",
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: COLORS.white,
    textDecorationLine: "underline",
    fontSize: 14,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  buttonContainer: {
    width: "90%",
    marginBottom: 20,
  },
  login: {
    height: 50,
    borderRadius: 100,
    backgroundColor: "#6566FD",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
});

export default PasswordRecoveryScreen;
