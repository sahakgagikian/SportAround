import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useActionSheet } from "@expo/react-native-action-sheet";

const COLORS = {
  primary: "#0E0938",
  white: "#fff",
  line: "#656B82",
};

const HeaderContainer = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  const openSheet = () => {
    console.log("ASHXATUM A", showActionSheetWithOptions);
    const options = ["Delete", "Save", "Cancel"];
    const destructiveButtonIndex = 0; //the first element in 'options' will denote the Delete option
    const cancelButtonIndex = 2; //Element number 2 in the array will be the 'Cancel' button

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex, //the third button will be the 'Cancel' button
        destructiveButtonIndex, //the first button will be the 'Delete' option
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        alert("Index pressed:" + buttonIndex);
      }
    );
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.replace("FieldInfoScreen")}
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
      <Text style={styles.title}>Команда</Text>
      <View style={styles.actionSheet}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.actionSheet}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.actionRow}>
                <Text style={styles.actionText}>Копировать ссылку игры</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow}>
                <Text style={styles.actionText}>Поделиться ссылкой игры</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow}>
                <Text style={styles.actionText}>Изменить интервал</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow}>
                <Text style={styles.leaveText}>Покинуть игру</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow}>
                <Text
                  style={styles.cancelText}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  Отмена
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.action}
          onPress={() => setModalVisible(true)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 22C11.8954 22 11 21.1046 11 20C11 18.8954 11.8954 18 13 18C14.1046 18 15 18.8954 15 20C15 21.1046 14.1046 22 13 22ZM20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22ZM25 20C25 21.1046 25.8954 22 27 22C28.1046 22 29 21.1046 29 20C29 18.8954 28.1046 18 27 18C25.8954 18 25 18.8954 25 20Z"
              fill="white"
            />
          </svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TeamContainer = ({ navigation }) => {
  return (
    <View style={styles.teamContainer}>
      <View style={styles.playersList}>
        <View style={styles.playersCountRow}>
          <Text style={styles.players}>Игроки:</Text>
          <Text style={styles.count}>4</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require("../images/Rectangle 2.7.jpg")}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Name</Text>
            <Text style={styles.playerPhoneNumber}>+7 000 000 00 00</Text>
          </View>
        </View>
      </View>

      <ButtonContainer />

      <View style={styles.playersList}>
        <View style={styles.listItem}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require("../images/Rectangle 2.7.jpg")}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Name</Text>
            <Text style={styles.playerPhoneNumber}>+7 000 000 00 00</Text>
          </View>
          <View style={styles.invited}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="24 / basic / check-mark / done">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70711 14.2929L19 5L20.4142 6.41421L9.70711 17.1213L4 11.4142L5.41421 10L9.70711 14.2929Z"
                  fill="black"
                />
              </g>
            </svg>
          </View>
        </View>
        <View style={styles.listItem}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require("../images/Rectangle 2.7.jpg")}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Name</Text>
            <Text style={styles.playerPhoneNumber}>+7 000 000 00 00</Text>
          </View>
          <View style={styles.notInvited}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="24 / basic / check-mark / done">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70711 14.2929L19 5L20.4142 6.41421L9.70711 17.1213L4 11.4142L5.41421 10L9.70711 14.2929Z"
                  fill="#BDBDBD"
                />
              </g>
            </svg>
          </View>
        </View>
        <View style={styles.listItem}>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require("../images/Rectangle 2.7.jpg")}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Name</Text>
            <Text style={styles.playerPhoneNumber}>+7 000 000 00 00</Text>
          </View>
          <View style={styles.notInvited}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="24 / basic / check-mark / done">
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70711 14.2929L19 5L20.4142 6.41421L9.70711 17.1213L4 11.4142L5.41421 10L9.70711 14.2929Z"
                  fill="#BDBDBD"
                />
              </g>
            </svg>
          </View>
        </View>
      </View>
    </View>
  );
};

const ButtonContainer = ({ navigation }) => {
  return (
    <View style={styles.inviteButtonContainer}>
      <TouchableOpacity
        style={styles.inviteButton}
        onPress={() => {
          // submit();
          navigation.replace("TeamListScreen");
        }}
      >
        <Text style={styles.buttonText}>Пригласить игроков</Text>
      </TouchableOpacity>
    </View>
  );
};

const DropDownContainer = () => {
  return (
    <SelectDropdown
      data={["Есть", "Нету"]}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
      buttonStyle={styles.dropDownContainer}
      buttonTextStyle={styles.buttonText}
    />
  );
};

const SubmitButtonContainer = ({ navigation }) => {
  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // submit();
          navigation.replace("TeamListScreen");
        }}
      >
        <Text style={styles.buttonText}>Подтвердить игру</Text>
      </TouchableOpacity>
    </View>
  );
};

const ActionSheet = () => {
  return (
    <ActionSheetProvider>
      <View>
        <Text>Click on 'More actions' to see your options</Text>
        <ActionButton />
      </View>
    </ActionSheetProvider>
  );
};

const FieldListScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <TeamContainer navigation={navigation} />
      <DropDownContainer />
      <SubmitButtonContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
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
  action: {
    position: "absolute",
    right: 0,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
  },
  teamContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flex: 1,
    marginTop: 20,
    width: "100%",
  },
  playersList: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  playersCountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  players: {
    fontSize: 16,
  },
  count: {
    fontSizeL: 16,
    fontWeight: 600,
  },
  listItem: {
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  profilePictureContainer: {
    width: 44,
    height: 44,
    aspectRatio: 1, // To make it square
    marginRight: 10,
  },
  playerInfo: {
    paddingVertical: 5,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 600,
  },
  playerPhoneNumber: {
    fontSize: 16,
    fontWeight: 400,
  },
  inviteButton: {
    margin: 20,
    height: 60,
    fontSize: 18,
    borderRadius: 30,
    backgroundColor: "#28ddc9",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 600,
  },
  invited: {
    position: "absolute",
    right: 0,
  },
  notInvited: {
    position: "absolute",
    right: 0,
  },
  fieldTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginVertical: 5,
  },
  dropDownContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#5201cf",
    marginVertical: 20,
  },
  submitButtonContainer: {},
  submitButton: {
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
  /* -------------------------------------- */
  actionSheet: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    marginHorizontal: 20,
  },
  modalView: {
    margin: 20,
    paddingVertical: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  actionRow: {
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 15,
  },
  actionText: {
    color: "#656B82",
    fontSize: 16,
    fontWeight: 600,
  },
  leaveText: {
    color: "#FF3333",
    fontSize: 16,
    fontWeight: 600,
  },
  cancelText: {
    color: "#9C4CED",
    fontSize: 16,
    fontWeight: 600,
  },
});

export default FieldListScreen;
