import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const COLORS = {
  primary: "#0E0938",
  white: "#fff",
  line: "#29DEC8",
};

const HeaderContainer = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.replace("CabinetScreen")}
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
      <Text style={styles.title}>Редактировать</Text>
    </View>
  );
};

const FormContainer = () => {
  return (
    <View style={styles.form}>
      {/* Other input fields */}
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          height: "60%",
        }}
      >
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Имя</Text>
          <TextInput style={styles.input} value="Mojoj" />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Телефон</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Дата рождения</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Адрес</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
};

const ButtonContainer = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          submit();
          navigation.replace("CabinetScreen");
        }}
      >
        <Text style={styles.buttonText}>Сохранить изменения</Text>
      </TouchableOpacity>
    </View>
  );
};

const EditPersonalDataScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <FormContainer />
      <ButtonContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "transparent",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
  },
  back: {
    position: "absolute",
    left: 0,
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: "10%",
  },
  fieldBlock: {
    height: 68,
    paddingVertical: 10,
    width: "100%",
  },
  label: {
    color: "#b7b5c3",
    fontSize: 14,
  },
  input: {
    position: "absolute",
    bottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingHorizontal: 10,
    color: COLORS.white,
    textAlignVertical: "top",
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 0,
    width: "100%",
  },
  line: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  submitButton: {
    height: 60,
    fontSize: 18,
    borderRadius: 30,
    backgroundColor: "#6843CF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.white,
  },
});

export default EditPersonalDataScreen;
