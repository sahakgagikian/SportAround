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
  line: "#656B82",
};

const HeaderContainer = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.replace("FieldListScreen")}
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
      <Text style={styles.title}>Информация о площадке</Text>
    </View>
  );
};

const FieldTitleContainer = () => {
  return (
    <View style={styles.fieldTitleContainer}>
      <Text style={styles.fieldTitle}>Название площадки</Text>
      <Text style={styles.timeRemaining}>25 мин.</Text>
    </View>
  );
};

const BasicInfoContainer = () => {
  return (
    <View style={styles.basicInfoContainer}>
      <View style={styles.infoList}>
        <View style={styles.infoItem}>
          <View style={styles.infoItemIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="16 / pin  ">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.96927 15.0809L8 15.9995L9.03073 15.0809C12.3221 12.1477 14 9.54211 14 7.10311C14 3.64043 11.3426 1 8 1C4.65737 1 2 3.64043 2 7.10311C2 9.54211 3.67789 12.1477 6.96927 15.0809ZM8 3C10.2409 3 12 4.74787 12 7.10311C12 8.77275 10.702 10.8469 8 13.3171C5.298 10.8469 4 8.77275 4 7.10311C4 4.74787 5.75908 3 8 3ZM8 4C9.65685 4 11 5.34315 11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7Z"
                  fill="#656B82"
                />
              </g>
            </svg>
          </View>
          <Text style={styles.infoText}>Привольная улица, 64</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoItemIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="16 / call-phone">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.61011 8.38848C7.06856 7.84642 6.62103 7.26069 6.38355 6.78618C6.30558 6.63037 6.25708 6.49967 6.23578 6.40623L6.71611 5.92561C6.82148 5.82015 6.87213 5.76881 6.93761 5.7C7.07631 5.55423 7.19195 5.42102 7.29368 5.28393C7.75135 4.66719 7.92143 3.9958 7.37967 3.39123C6.35391 1.95638 5.66385 1.06892 5.22143 0.631902C4.30856 -0.269819 2.82132 -0.14902 2.02965 0.631012C1.64738 1.00766 1.51744 1.13753 1.12492 1.5362C-1.16743 3.82966 0.199732 8.57107 3.81206 12.1868C7.42377 15.8019 12.1655 17.1699 14.464 14.8703C14.8248 14.5225 15.1331 14.214 15.3771 13.9562C16.1494 13.1399 16.266 11.7168 15.3712 10.787C14.9457 10.3449 14.0995 9.68827 12.6028 8.61748C12.0553 8.13212 11.415 8.23741 10.8461 8.61061C10.5898 8.77872 10.4096 8.94313 10.0701 9.28294L9.59022 9.76302C9.4969 9.74172 9.36638 9.69326 9.21082 9.61536C8.73652 9.37783 8.15126 8.93014 7.61011 8.38848ZM10.888 11.2925L11.484 10.6962C11.5858 10.5943 11.6663 10.5157 11.7329 10.454C12.9396 11.3239 13.6458 11.8771 13.931 12.1735C14.028 12.2742 14.0101 12.4923 13.9251 12.5821C13.7045 12.8152 13.4169 13.103 13.0633 13.4441C11.7585 14.7492 8.16102 13.7114 5.22611 10.7737C2.29008 7.83491 1.25247 4.2364 2.54396 2.94426C2.93445 2.54769 3.05726 2.42494 3.43253 2.0552C3.49211 1.99649 3.738 1.97652 3.81674 2.05431C4.12478 2.35859 4.70156 3.09371 5.54461 4.26293C5.52731 4.28177 5.50896 4.30138 5.48955 4.32178C5.43885 4.37506 5.39613 4.41836 5.30206 4.51252L4.70644 5.10845C3.55963 6.25511 4.46968 8.07358 6.19606 9.80158C7.92145 11.5286 9.74117 12.4399 10.888 11.2925Z"
                  fill="#656B82"
                />
              </g>
            </svg>
          </View>
          <Text style={styles.infoText}>+7 000 000 00 00</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoItemIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="16 / target">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8Z"
                  fill="#656B82"
                />
              </g>
            </svg>
          </View>
          <Text style={styles.infoText}>координаты по карте</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoItemIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="16 / time">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM7.00295 8.99835H11.003V6.99835H9.00361V3.99835H7.00295V8.99835Z"
                  fill="#656B82"
                />
              </g>
            </svg>
          </View>
          <Text style={styles.infoText}>08:00 - 20:00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}
        >
          <View style={styles.infoItemIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="16 / star">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.42555 9.87848L3.58173 14.7983L8.00004 12.4755L12.4183 14.7983L11.5745 9.87848L15.149 6.39422L10.2092 5.67642L8.00004 1.2002L5.79088 5.67642L0.851074 6.39422L4.42555 9.87848ZM9.76207 11.1423L8.00004 10.2159L6.238 11.1423L6.57452 9.18024L5.149 7.7907L7.11902 7.50444L8.00004 5.7193L8.88105 7.50444L10.8511 7.7907L9.42555 9.18024L9.76207 11.1423Z"
                  fill="#6D61E7"
                />
              </g>
            </svg>
          </View>
          <View>
            <Text style={{ color: "#6D61E7", fontSize: 16, fontWeight: 600 }}>
              Бесплатная
            </Text>
            <Text style={styles.infoText}>0 руб. / 1 ч.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const ButtonContainer = ({ navigation }) => {
  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // submit();
          navigation.replace("TeamListScreen");
        }}
      >
        <Text style={styles.buttonText}>Забронировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const AdditionalInfoContainer = () => {
  return (
    <View style={styles.additionalInfoContainer}>
      <View style={styles.infoList}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Покрытие: </Text>
          <Text style={styles.additionalInfoGreyedText}>
            искусственный газон
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Игра: </Text>
          <Text style={styles.additionalInfoGreyedText}>футбол</Text>
        </View>
      </View>
    </View>
  );
};

const FieldsMapScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <FieldTitleContainer />
      <BasicInfoContainer />
      <ButtonContainer navigation={navigation} />
      <AdditionalInfoContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    // paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.primary,
  },
  back: {
    position: "absolute",
    left: 20,
  },
  fieldTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  timeRemaining: {
    color: "#6D61E7",
    fontSize: 14,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#656B82",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    placeholderTextColor: "#BDBDBD",
    marginLeft: 10,
  },
  basicInfoContainer: {
    flex: 1,
    width: "100%",
  },
  infoList: {
    backgroundColor: COLORS.white,
    padding: 15,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  infoItemIcon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 400,
  },
  submitButton: {
    margin: 20,
    height: 60,
    fontSize: 18,
    borderRadius: 30,
    backgroundColor: "#6843CF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 600,
  },
  additionalInfoGreyedText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#656b82",
  },
});

export default FieldsMapScreen;
