import React, { useState } from "react";
import {
  AsyncStorage,
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

const FormContainer = ({ data, handleCollectData }) => {
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
          <Text style={styles.label} value={data.name}>
            Имя
          </Text>
          <TextInput
            style={styles.input}
            onKeyUp={(e) => handleCollectData(e, "name")}
          />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label} value={data.email}>
            E-mail
          </Text>
          <TextInput
            style={styles.input}
            onKeyUp={(e) => handleCollectData(e, "email")}
          />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label} value={data.phoneNumber}>
            Телефон
          </Text>
          <TextInput
            style={styles.input}
            onKeyUp={(e) => handleCollectData(e, "phoneNumber")}
          />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Дата рождения</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label} value={data.address}>
            Адрес
          </Text>
          <TextInput
            style={styles.input}
            onKeyUp={(e) => handleCollectData(e, "address")}
          />
        </View>
      </View>
    </View>
  );
};

const ButtonContainer = ({ submit, navigation }) => {
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
  const [formData, setFormData] = useState(new FormData());
  const [data, setData] = useState({});

  const _storeData = async (response) => {
    try {
      await AsyncStorage.setItem("@MySuperStore:data", response);
      console.log("response", response);
    } catch (error) {
      console.log(error);
      // Error saving data
    }
  };

  const submit = () => {
    // let formData = new FormData();
    formData.append("id", 15);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    fetchFunction(
      "https://sport.pog-arm.org/G_Users/update_user",
      formData,
      "post"
    );
  };

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
        _storeData(response);
        // console.log("first way");
        // console.log(response);
      });
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("TASKS");
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <FormContainer data={data} handleCollectData={handleCollectData} />
      <ButtonContainer submit={submit} navigation={navigation} />
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
