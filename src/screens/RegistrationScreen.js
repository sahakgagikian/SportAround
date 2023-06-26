import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const COLORS = {
  primary: "#0E0938",
  white: "#fff",
  line: "#656B82",
};

const RegistrationScreen = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState(new FormData());
  const [data, setData] = useState({});
  const [birthDate, setBirthDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const handleCollectData = (e, key) => {
    const info = data;
    info[key] = e.target.value;
    setData(info);
  };

  const handleNextPage = () => {
    if (data.password === data.repeatPassword) {
      setPage(2);
    } else {
      console.log("BHAHAHAHAHA");
    }
  };

  const collectFirstPageData = () => {};

  const submit = () => {
    // let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("pass", data.password);
    formData.append("phone", data.phoneNumber);
    formData.append("address", data.address);
    fetchFunction(
      "https://sport.pog-arm.org/G_Users/register_user",
      formData,
      "post"
    );
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

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setBirthDate(date);
    hideDatePicker();
  };

  const handleImageUpload = () => {
    // Implement the image picker logic here to select an image and set the imageUri state variable
  };

  const renderFirstPage = () => {
    return (
      <View style={styles.page}>
        {/* Новый Аккаунт */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
            marginBottom: 25,
          }}
        >
          Новый Аккаунт
        </Text>
        {/* Form */}
        <View style={styles.form}>
          {/* Image Upload Container */}
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={handleImageUpload}
          >
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>Upload Image</Text>
            )}
          </TouchableOpacity>

          {/* Other input fields */}
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              // marginVertical: "10%",
              height: "60%",
            }}
          >
            <TextInput
              placeholder="Имя и фамилия"
              style={styles.input}
              value={data.name}
              onKeyUp={(e) => handleCollectData(e, "name")}
            />
            <TextInput
              placeholder="E-mail"
              style={styles.input}
              value={data.email}
              onKeyUp={(e) => handleCollectData(e, "email")}
            />
            <TextInput
              placeholder="Пароль"
              secureTextEntry
              style={styles.input}
              value={data.password}
              onKeyUp={(e) => handleCollectData(e, "password")}
            />
            <TextInput
              placeholder="Повторить пароль"
              secureTextEntry
              style={styles.input}
              value={data.repeatPassword}
              onKeyUp={(e) => handleCollectData(e, "repeatPassword")}
            />
          </View>
        </View>
        {/* Next */}
        <TouchableOpacity onPress={handleNextPage} style={styles.button}>
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
              d="M7.29267 8.70696L-0.000225576 1.41406L1.41399 -0.000151442L10.1211 8.70696L1.41399 17.4141L-0.000226851 15.9998L7.29267 8.70696Z"
              fill="white"
            />
          </svg>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSecondPage = () => {
    const renderDatePickerPlaceholder = () => {
      if (!birthDate) {
        return <Text style={{ color: COLORS.white }}>Дата рождения</Text>;
      }
      return null;
    };

    return (
      <View style={styles.page}>
        {/* Вы почти у цели */}
        <Text style={{ color: COLORS.white, fontSize: 30, marginBottom: 20 }}>
          Вы почти у цели
        </Text>
        {/* Form */}
        <View style={styles.form}>
          <TextInput
            placeholder="Телефон"
            style={styles.input}
            value={data.phoneNumber}
            onKeyUp={(e) => handleCollectData(e, "phoneNumber")}
          />
          <TouchableOpacity onPress={showDatePicker} style={styles.input}>
            {renderDatePickerPlaceholder()}
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TextInput
            placeholder="Адрес"
            style={styles.input}
            value={data.address}
            onKeyUp={(e) => handleCollectData(e, "address")}
          />
          <Text style={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: 20 }}>
            Нажимая кнопку «Начать», вы соглашаетесь с политикой
            конфиденциальности
          </Text>
        </View>
        {/* Submit */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            submit();
            navigation.replace("CabinetScreen");
          }}
        >
          <Text style={{ color: COLORS.white }}>Начать</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = {
    page: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: COLORS.primary,
      height: "95%",
      padding: 10,
    },
    header: {
      backgroundColor: COLORS.primary,
      padding: 10,
      flexDirection: "column",
      height: "5%",
    },
    imageContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    imagePlaceholder: {
      color: COLORS.white,
      fontSize: 16,
    },
    form: {
      flex: 1,
      justifyContent: "space-between",
      marginVertical: "10%",
    },
    input: {
      backgroundColor: COLORS.primary,
      width: "100%",
      height: 40,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.line,
      paddingHorizontal: 10,
      color: COLORS.white,
      textAlignVertical: "top",
      fontSize: 16,
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#6843CF",
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      height: 60,
      fontSize: 18,
      borderRadius: 30,
      backgroundColor: "#6843CF",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <View style={styles.page}>
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
      </View>
      {page === 1 ? renderFirstPage() : null}
      {page === 2 ? renderSecondPage() : null}
    </View>
  );
};

export default RegistrationScreen;
