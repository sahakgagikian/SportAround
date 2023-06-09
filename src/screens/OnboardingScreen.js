import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    backgroundImage: require("../images/background1.jpg"),
    title:
      "Объединяйтесь в команды и создавайте собственную игру или ищите для себя подходящую",
  },
  {
    id: "2",
    backgroundImage: require("../images/background2.jpg"),
    title:
      "Подбирайте максимально удобный вариант площадки и бронируйте прямо в приложении Sport Around",
  },
  {
    id: "3",
    backgroundImage: require("../images/background3.jpg"),
    title:
      "Sport Around также напомнит, где и когда состоится ваша следующая по плану игра",
  },
];

const Slide = ({ item }) => {
  return (
    <ImageBackground
      source={item?.backgroundImage}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.3,
          justifyContent: "space-between",
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 0,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: width < height ? 20 : 120,
            // marginLeft: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.white,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.start}
                onPress={() => navigation.replace("HomeScreen")}
              >
                <Text style={{ fontSize: 20, color: COLORS.white }}>
                  Начать
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
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
                      d="M7.29267 8.70696L-0.000225576 1.41406L1.41399 -0.000151442L10.1211 8.70696L1.41399 17.4141L-0.000226851 15.9998L7.29267 8.70696Z"
                      fill="white"
                    />
                  </svg>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <FlatList
        ref={ref}
        onScroll={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: width,
    height: height,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 120,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  btn: {
    flex: 1,
    // left: 15,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#6566FD",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
  },
  start: {
    flex: 1,
    // left: 15,
    width: "100%",
    height: 80,
    borderRadius: 100,
    backgroundColor: "#6566FD",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
  },
});

export default OnboardingScreen;
