import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const COLORS = { primary: "#0E0938", white: "#fff", line: "#656B82" };

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState(new FormData());
  const [data, setData] = useState({});

  const handleCollectData = (e, key) => {
    const info = data;
    info[key] = e.target.value;
    setData(info);
  };

  const fetchFunction = (source, data, method) => {
    return fetch(source, {
      body: data,
      method: method,
    })
      .then((res) => res.json)
      .catch((error) => {
        console.error("Error:", error);
      })
      .then((response) => {
        console.log("first way");
        console.log(response);
      });
  };

  const submit = () => {
    // let formData = new FormData();
    formData.append("login", data.email);
    formData.append("pass", data.password);
    fetchFunction("https://sport.pog-arm.org/G_Users/login", formData, "post");
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        {/* Render buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              submit();
              navigation.replace("AccountAccessScreen");
            }}
          >
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.replace("AccountAccessScreen")}
        >
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
          <Text style={styles.title}>Добро пожаловать</Text>
        </View>
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
              value={data.email}
              onKeyUp={(e) => handleCollectData(e, "email")}
            />
          </View>
          <View style={styles.formItem}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor={COLORS.white}
              secureTextEntry={true}
              textAlignVertical="top"
              value={data.password}
              onKeyUp={(e) => handleCollectData(e, "password")}
            />
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text
              style={styles.forgotPasswordText}
              onPress={() => navigation.replace("PasswordRecoveryScreen")}
            >
              Забыли пароль?
            </Text>
          </TouchableOpacity>
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
    flexDirection: "column",
  },
  titleContainer: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    width: "60%",
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
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

export default LoginScreen;
