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
      <Text style={styles.title}>Новая игра</Text>
    </View>
  );
};

const ButtonsContainer = ({ navigation }) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.footballButton}
        onPress={() => {
          navigation.replace("CreateGameScreen");
        }}
      >
        <View style={styles.icon}>
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_562_6604)">
              <path
                d="M71.685 45.0648L71.7138 45.0602L65.637 4.99901C65.2057 2.14715 62.7987 0.0776367 59.9146 0.0776367H12.2113C9.39731 0.0776367 6.99937 2.08836 6.51096 4.85995L0 41.755H26.7589C26.0682 43.9489 25.6917 46.2813 25.6917 48.7012C25.6917 61.4682 36.0788 71.8554 48.8458 71.8554C61.6133 71.8554 71.9999 61.4682 71.9999 48.7012C71.9999 47.461 71.8738 46.2524 71.685 45.0648ZM41.8995 68.324C39.4711 67.4614 37.2467 66.172 35.3264 64.5281L37.8476 63.0714L37.9612 56.3224L42.9346 53.4502L47.6881 56.3026V61.938L41.8995 65.4111V68.324ZM59.844 34.3306L59.7309 41.0801L54.757 43.9523L50.0035 41.0993V35.464L55.792 31.9908V29.0779C58.221 29.9405 60.4449 31.23 62.3657 32.8738L59.844 34.3306ZM48.8458 54.2976L44.215 51.5186V45.8844L48.8458 43.1061L53.4766 45.8844V51.5186L48.8458 54.2976ZM42.9346 43.9512L37.9612 41.0789L37.8476 34.3294L35.3264 32.8727C37.2478 31.2288 39.4711 29.9394 41.8995 29.0768V31.9897L47.6881 35.4628V41.0982L42.9346 43.9512ZM43.6361 19.6586L49.5241 25.5471L49.4919 25.5794C49.2754 25.5737 49.0634 25.5471 48.8458 25.5471C45.5824 25.5471 42.4784 26.2334 39.6593 27.4572L37.7481 25.5471L43.6361 19.6586ZM36.111 23.9101L30.223 18.0221L36.111 12.1335L41.999 18.0221L36.111 23.9101ZM48.8458 33.4589L44.215 30.6799V28.3996C45.7073 28.0593 47.2528 27.8626 48.8458 27.8626C50.4388 27.8626 51.9842 28.0593 53.4766 28.3996V30.6799L48.8458 33.4589ZM51.1612 23.9101L45.2732 18.0221L51.1612 12.1335L57.0492 18.0221L51.1612 23.9101ZM62.1362 35.6805L64.0977 34.5493C66.2001 36.8139 67.8219 39.5295 68.7574 42.5538L66.7682 43.7019L62.0475 41.0812L62.1362 35.6805ZM52.4834 25.862L58.6863 19.6586L61.8225 22.7953L63.1922 30.5607C60.1475 28.148 56.4856 26.4974 52.4834 25.862ZM60.3233 18.0221L60.8824 17.4624L61.1221 18.8197L60.3233 18.0221ZM58.6863 16.385L52.7983 10.497L56.2714 7.02387H59.0407L60.3917 14.6807L58.6863 16.385ZM51.1612 8.85991L49.3251 7.02387H52.9972L51.1612 8.85991ZM46.051 7.02387L49.5241 10.497L43.6361 16.385L37.7481 10.497L41.2212 7.02387H46.051ZM36.111 8.85991L34.275 7.02387H37.9471L36.111 8.85991ZM31.0008 7.02387L34.4739 10.497L28.5859 16.385L22.6979 10.497L26.171 7.02387H31.0008ZM10.3984 22.7965L13.5346 19.6586L19.4238 25.5471L13.5358 31.4352L9.57424 27.4731L10.3984 22.7965ZM15.1728 18.0221L21.0609 12.1335L26.9489 18.0221L21.0609 23.9101L15.1728 18.0221ZM21.0609 8.85991L19.2248 7.02387H22.8969L21.0609 8.85991ZM15.9507 7.02387L19.4238 10.497L13.5358 16.385L11.8309 14.6795L13.1819 7.02387H15.9507ZM11.3396 17.4636L11.8987 18.0232L11.1011 18.8219L11.3396 17.4636ZM9.08358 30.2565L11.8987 33.0722L7.87726 37.0937L9.08358 30.2565ZM13.5358 34.7087L18.2661 39.4396H8.80546L13.5358 34.7087ZM15.1728 33.0722L21.0609 27.1837L26.9489 33.0722L21.0609 38.9602L15.1728 33.0722ZM22.6979 25.5471L28.5859 19.6586L34.4739 25.5471L28.5859 31.4352L22.6979 25.5471ZM36.111 27.1837L37.4796 28.5522C35.0274 29.9405 32.8476 31.7534 31.0557 33.9055L30.223 33.0722L36.111 27.1837ZM33.5944 34.5482L35.5553 35.6793L35.6458 41.0789L30.9245 43.6996L28.9358 42.5515C29.8697 39.5295 31.4921 36.8127 33.5944 34.5482ZM28.0071 48.7012C28.0071 47.4022 28.1427 46.1354 28.3706 44.9014L30.9013 46.3627L36.8035 43.0863L41.8995 46.028V51.3739L36.8035 54.3168L30.9013 51.041L28.3706 52.5017C28.1427 51.2665 28.0071 49.9997 28.0071 48.7012ZM50.0035 56.3026L54.757 53.4513L59.7309 56.3236L59.844 63.0725L62.3657 64.5293C60.4437 66.1731 58.221 67.4625 55.792 68.3251V65.4122L50.0035 61.9391V56.3026ZM60.8886 54.3168L55.792 51.3739V46.028L60.8886 43.0851L66.7902 46.3615L69.321 44.9003C69.5494 46.1354 69.6845 47.4022 69.6845 48.7012C69.6845 49.9997 69.5494 51.2665 69.321 52.5005L66.7902 51.041L60.8886 54.3168ZM8.79189 5.263C9.08471 3.59937 10.5222 2.39305 12.2113 2.39305H59.9146C61.6455 2.39305 63.0893 3.63385 63.3487 5.3461L67.9423 35.6341C67.3577 34.7822 66.7037 33.984 66.0124 33.2192L61.3199 6.62082C61.1243 5.51173 60.1662 4.70846 59.0407 4.70846H13.1819C12.0564 4.70846 11.0977 5.51173 10.901 6.62082L5.11131 39.4396H2.75972L8.79189 5.263ZM23.8556 39.4396L28.5859 34.7087L29.6475 35.7703C28.8697 36.9224 28.2027 38.153 27.6391 39.4396H23.8556ZM28.9347 54.8499L30.9234 53.7012L35.6447 56.3224L35.5542 61.7215L33.5932 62.8526C31.4921 60.5898 29.8697 57.8724 28.9347 54.8499ZM44.215 69.0024V66.722L48.8458 63.9436L53.4766 66.722V69.0024C51.9842 69.3427 50.4388 69.5399 48.8458 69.5399C47.2528 69.5399 45.7073 69.3427 44.215 69.0024ZM64.0977 62.8537L62.1362 61.7232L62.0463 56.3236L66.767 53.7023L68.7563 54.851C67.8219 57.8724 66.2001 60.5898 64.0977 62.8537Z"
                fill="white"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_6604">
                <rect width="72" height="72" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </View>
        <Text style={styles.buttonText}>aaaaa</Text>
      </TouchableOpacity>
    </View>
  );
};

const FormContainer = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Дата"
        placeholderTextColor={COLORS.white}
        textAlignVertical="top"
      />
      <TextInput
        style={styles.input}
        placeholder="Время"
        placeholderTextColor={COLORS.white}
        textAlignVertical="top"
      />
    </View>
  );
};

const FieldTypeContainer = () => {
  return (
    <View style={styles.fieldTypeContainer}>
      <Text style={styles.typeText}>Тип площадки:</Text>
      <TouchableOpacity style={styles.freeButton}>Бесплатные</TouchableOpacity>
    </View>
  );
};

const ButtonContainer = () => {
  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          submit();
          navigation.replace("CabinetScreen");
        }}
      >
        <Text style={styles.buttonText}>Начать</Text>
      </TouchableOpacity>
    </View>
  );
};

const ChooseGameScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <ButtonsContainer navigation={navigation} />
      <FormContainer />
      <FieldTypeContainer />
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
  back: {
    position: "absolute",
    left: 0,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    backgroundColor: COLORS.primary,
    width: "48%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 10,
    color: COLORS.white,
    textAlignVertical: "top",
    fontSize: 16,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldTypeContainer: {
    marginVertical: 20,
  },
  typeText: {
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 20,
  },
  freeButton: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#29DEC8",
    color: "#29DEC8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    // paddingRight: 20,
  },
  submitButton: {
    // flex: 1,
    height: 60,
    fontSize: 18,
    borderRadius: 30,
    backgroundColor: "#6843CF",
    justifyContent: "center",
    alignItems: "center",
  },
  footballButton: {
    height: 148,
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#6845d2",
  },
  basketballButton: {
    height: 148,
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#29DEC8",
  },
  buttonText: {
    // position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.white,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default ChooseGameScreen;
