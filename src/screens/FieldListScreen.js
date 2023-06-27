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
        onPress={() => navigation.replace("CreateGameScreen")}
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
      <Text style={styles.title}>Список площадок</Text>
      <TouchableOpacity style={styles.action}>
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
  );
};

const SearchbarContainer = () => {
  return (
    <View style={styles.searchbar}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
          fill="#BDBDBD"
        />
      </svg>
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const ListContainer = () => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.mapRow}>
        <Text style={styles.mapText}>Смотреть на карте</Text>
        <TouchableOpacity style={styles.mapButton}>
          <svg
            width="100"
            height="106"
            viewBox="0 0 100 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_563_8799)">
              <path
                d="M26 22H70C75.5228 22 80 26.4772 80 32V76H36C30.4772 76 26 71.5228 26 66V22Z"
                fill="url(#paint0_linear_563_8799)"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.0962 55.2554L53 56.2126L51.9038 55.2554C47.9884 51.8366 46 48.8112 46 46C46 42.0214 49.1035 39 53 39C56.8965 39 60 42.0214 60 46C60 48.8112 58.0116 51.8366 54.0962 55.2554ZM46.6856 51.8034C47.0961 52.3656 47.5535 52.9373 48.0575 53.519C46.1953 53.9384 45 54.5337 45 55C45 55.807 48.5791 57 53 57C57.4209 57 61 55.807 61 55C61 54.5337 59.8047 53.9384 57.9425 53.519C58.4465 52.9373 58.9039 52.3656 59.3144 51.8034C61.5633 52.4858 63 53.5804 63 55C63 57.5068 58.5203 59 53 59C47.4797 59 43 57.5068 43 55C43 53.5804 44.4367 52.4858 46.6856 51.8034ZM53 41C55.8038 41 58 43.1382 58 46C58 48.047 56.3727 50.5659 53 53.556C49.6273 50.5659 48 48.047 48 46C48 43.1382 50.1962 41 53 41ZM53 43C54.6569 43 56 44.3431 56 46C56 47.6569 54.6569 49 53 49C51.3431 49 50 47.6569 50 46C50 44.3431 51.3431 43 53 43ZM52 46C52 45.4477 52.4477 45 53 45C53.5523 45 54 45.4477 54 46C54 46.5523 53.5523 47 53 47C52.4477 47 52 46.5523 52 46Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_563_8799"
                x="0"
                y="0"
                width="106"
                height="106"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="13" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_563_8799"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_563_8799"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_563_8799"
                x1="53"
                y1="22"
                x2="53"
                y2="76"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6566FD" />
                <stop offset="1" stopColor="#6843CF" />
              </linearGradient>
            </defs>
          </svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FieldListScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <SearchbarContainer />
      <ListContainer />
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
});

export default FieldListScreen;
