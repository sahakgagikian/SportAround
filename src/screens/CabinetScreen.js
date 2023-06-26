import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toolbar from "../components/Toolbar";

const COLORS = {
  primary: "#0E0938",
  white: "#fff",
  line: "#656B82",
};

const HeaderContainer = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Личный кабинет</Text>
      <TouchableOpacity style={styles.logout}>
        <Text style={{ color: "#29DEC8" }}>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image
          source={require("../images/Rectangle 2.7.jpg")}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.name}>Алексей Кузнецов</Text>
        <Text style={styles.username}>id ivan_ivanov92</Text>
      </View>
    </View>
  );
};

const PersonalInfoContainer = ({ navigation }) => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.editButton}>
        <TouchableOpacity
          onPress={() => navigation.replace("EditPersonalDataScreen")}
        >
          <svg
            fill="#ffffff"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.707,5.565,18.435,2.293a1,1,0,0,0-1.414,0L3.93,15.384a.991.991,0,0,0-.242.39l-1.636,4.91A1,1,0,0,0,3,22a.987.987,0,0,0,.316-.052l4.91-1.636a.991.991,0,0,0,.39-.242L21.707,6.979A1,1,0,0,0,21.707,5.565ZM7.369,18.489l-2.788.93.93-2.788,8.943-8.944,1.859,1.859ZM17.728,8.132l-1.86-1.86,1.86-1.858,1.858,1.858Z" />
          </svg>
        </TouchableOpacity>
      </View>
      <Text style={styles.blockTitle}>Личная информация</Text>
      <Text style={styles.blockElement}>alex.kuznecov@gmail.com</Text>
      <Text style={styles.blockElement}>+7 906 668 88 00</Text>
      <Text style={styles.blockElement}>12.08.1992</Text>
      <View style={styles.line} />
      <Text style={styles.blockElement}>улица Генерала Кузнецова, 24/1</Text>
      <Text style={styles.blockElement}>Москва, Россия</Text>
    </View>
  );
};

const NotificationsContainer = () => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.notifsButton}>
        <TouchableOpacity
          onPress={() => navigation.replace("AccountAccessScreen")}
        >
          <svg
            fill="#ffffff"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28.3 22.247c-1.167-1.419-2.765-3.429-2.765-5.48v-6.53c0-5.625-4.207-10.202-9.584-10.202-5.378 0-9.552 4.577-9.552 10.202v6.53c0 2.016-1.734 3.921-2.833 5.4-0.989 1.328-1.77 2.378-1.242 3.427 0.463 0.923 1.624 1.041 2.583 1.041h5.73c0.002 2.944 2.389 5.331 5.333 5.331s5.333-2.386 5.334-5.331h5.864c0.61 0 2.036 0 2.527-1.038 0.495-1.050-0.297-2.016-1.395-3.351zM15.969 29.871c-1.788 0-3.239-1.448-3.241-3.235h6.482c-0.003 1.787-1.452 3.235-3.241 3.235zM27.168 24.506h-22.262c-0.153 0-0.281-0.005-0.386-0.012 0.206-0.319 0.508-0.727 0.755-1.058 1.218-1.637 3.255-3.949 3.255-6.669v-6.53c0-4.452 3.22-8.073 7.423-8.073s7.455 3.622 7.455 8.073v6.53c0 2.813 1.878 5.164 3.249 6.832 0.231 0.281 0.507 0.617 0.722 0.905-0.064 0.002-0.134 0.003-0.209 0.003z"></path>
          </svg>
        </TouchableOpacity>
      </View>
      <Text style={styles.blockTitle}>У вас есть одно новое уведомление:</Text>
      <Text style={styles.blockElement}>
        id_max1976 пригласил вас в игру: 15.06.2019 в 17:00
      </Text>
    </View>
  );
};

const CabinetScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer />
      <View style={styles.profileContent}>
        <ProfileContainer />
        <PersonalInfoContainer navigation={navigation} />
        <NotificationsContainer />
      </View>
      <Toolbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingHorizontal: 20,
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
  logout: {
    position: "absolute",
    right: 0,
    fontSize: 14,
  },
  profileContent: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#201b4c",
    borderRadius: 10,
    overflow: "hidden",
  },
  profilePictureContainer: {
    width: 108,
    height: 108,
    aspectRatio: 1, // To make it square
    marginRight: 10,
  },
  profilePicture: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    width: "50%",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 27,
    color: COLORS.white,
    paddingBottom: 10,
  },
  username: {
    flex: 1,
    alignItems: "flex-end",
    fontSize: 16,
    color: COLORS.white,
    lineHeight: 22,
  },
  columnContainer: {
    padding: 20,
    flexDirection: "column",
    backgroundColor: "#201b4c",
    borderRadius: 10,
    overflow: "hidden",
  },
  blockTitle: {
    width: "70%",
    color: COLORS.white,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22,
  },
  blockElement: {
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
  },
  line: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  editButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    width: 54,
    height: 54,
    backgroundColor: "#6843CF",
    borderBottomLeftRadius: 10,
  },
  notifsButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    width: 54,
    height: 54,
    backgroundColor: "#049DFF",
    borderBottomLeftRadius: 10,
  },
});

export default CabinetScreen;
