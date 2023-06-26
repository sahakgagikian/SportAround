import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Toolbar from "../components/Toolbar";

const COLORS = {
  primary: "#0E0938",
  white: "#fff",
  line: "#29DEC8",
};

const HeaderContainer = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Новая игра</Text>
    </View>
  );
};

const TextContainer = () => {
  return (
    <View style={styles.textContainer}>
      <View>
        <Text style={styles.textTitle}>Во что хотите сыграть?</Text>
      </View>
      <View>
        <Text style={styles.textSubtitle}>
          Выберите вид, чтобы создать или найти игру рядом с вами
        </Text>
      </View>
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
        <Text style={styles.buttonText}>Футбол</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.basketballButton}
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
            <g clip-path="url(#clip0_562_6599)">
              <path
                d="M72 22.0645C72 9.89762 62.1024 0 49.9355 0C37.7686 0 27.871 9.89762 27.871 22.0645C27.871 26.8271 29.4025 31.2295 31.9786 34.8387H3.48387C1.56332 34.8387 0 36.402 0 38.3226V40.6452C0 42.5657 1.56332 44.129 3.48387 44.129H4.01348C8.97675 51.4228 11.6129 59.9204 11.6129 68.7566V72H13.9355V68.7566C13.9355 68.443 13.9241 68.1305 13.9179 67.817L17.4194 71.3196L24.3871 64.3518L31.3548 71.3196L38.3226 64.3518L45.2903 71.3196L48.7918 67.8181C48.7855 68.1305 48.7742 68.443 48.7742 68.7566V72H51.0968V68.7566C51.0968 59.7231 53.835 51.0338 59.0364 43.604L60.4359 41.4662C67.3174 37.7266 72 30.4328 72 22.0645ZM49.9355 41.8064C49.7648 41.8064 49.5998 41.7855 49.4314 41.7809C50.8841 36.9674 48.9993 30.8683 44.4857 26.353C44.1188 25.9873 43.7378 25.6436 43.3499 25.3114C44.5401 23.7798 45.8069 22.314 47.1474 20.9174L63.0289 36.799C59.5405 39.9029 54.9617 41.8064 49.9355 41.8064ZM52.4798 50.638C51.3661 53.2385 50.4963 55.9313 49.8822 58.6917L46.9325 55.7419L52.2581 50.4163L52.4798 50.638ZM45.2903 54.0998L39.9647 48.7742L44.6099 44.129H45.9708L50.6159 48.7742L45.2903 54.0998ZM10.4516 50.4163L15.7772 55.7419L12.8275 58.6917C12.2134 55.9313 11.3436 53.2396 10.2299 50.638L10.4516 50.4163ZM12.0938 48.7742L16.7389 44.129H18.0998L22.745 48.7742L17.4194 54.0998L12.0938 48.7742ZM21.3841 44.129H27.3901L24.3871 47.1321L21.3841 44.129ZM24.3871 50.4163L29.7127 55.7419L24.3871 61.0675L19.0615 55.7419L24.3871 50.4163ZM26.0292 48.7742L30.6744 44.129H32.0353L36.6804 48.7742L31.3548 54.0998L26.0292 48.7742ZM45.5041 19.2753C44.0905 20.7467 42.754 22.2908 41.4997 23.9062C37.9245 21.5105 33.8135 20.4723 30.2412 21.1227C30.4618 16.4696 32.2933 12.24 35.1999 8.97221L45.5041 19.2753ZM40.1155 25.769C38.1065 28.5837 36.3391 31.5896 34.841 34.7622C32.2315 31.6661 30.5712 27.7581 30.2644 23.4787C33.3049 22.7761 36.9254 23.6511 40.1155 25.769ZM41.963 27.1786C42.2629 27.44 42.5578 27.7105 42.8424 27.9963C46.9115 32.0653 48.5701 37.518 47.0646 41.574C43.0454 40.9842 39.4238 39.1867 36.5704 36.5529C38.0754 33.234 39.8848 30.0994 41.963 27.1786ZM35.3196 44.129H41.3256L38.3226 47.1321L35.3196 44.129ZM38.3226 50.4163L43.6482 55.7419L38.3226 61.0675L32.997 55.7419L38.3226 50.4163ZM48.7895 19.2764C50.2315 17.8923 51.7472 16.583 53.3343 15.3604C53.9444 16.2002 54.6237 17.0128 55.3864 17.776C58.8601 21.2491 63.368 23.206 67.4779 23.206C68.2116 23.206 68.9295 23.1362 69.6298 23.0086C69.4081 27.6617 67.5777 31.8901 64.6711 35.1568L48.7895 19.2764ZM69.6054 20.6503C65.6549 21.5638 60.7171 19.823 57.0274 16.1339C56.347 15.4534 55.7419 14.731 55.1998 13.9854C58.0787 11.9509 61.1617 10.18 64.4238 8.7006C67.3724 11.8942 69.2777 16.0528 69.6054 20.6503ZM52.8064 2.5562C56.5142 3.09942 59.8926 4.6616 62.6343 6.97114C59.5813 8.41368 56.6826 10.1023 53.9603 12.0172C52.2393 8.80494 51.7681 5.34999 52.8064 2.5562ZM50.4396 2.3481C49.4189 5.72877 50.0472 9.73715 52.0772 13.3934C50.3511 14.7135 48.709 16.1327 47.1462 17.6331L36.842 7.33008C40.3305 4.22612 44.9093 2.32258 49.9355 2.32258C50.1062 2.32258 50.27 2.34356 50.4396 2.3481ZM2.32258 40.6452V38.3226C2.32258 37.6818 2.84425 37.1613 3.48387 37.1613H33.8889C35.674 39.0575 37.7873 40.6338 40.1411 41.8064H3.48387C2.84425 41.8064 2.32258 41.2859 2.32258 40.6452ZM13.4546 44.129L9.1996 48.3841C8.4823 46.9302 7.68051 45.512 6.80614 44.129H13.4546ZM17.4194 68.0353L13.7172 64.3331C13.6253 63.3657 13.5068 62.4029 13.3548 61.4486L17.4194 57.3852L22.745 62.7097L17.4194 68.0353ZM31.3548 68.0353L26.0292 62.7097L31.3548 57.3841L36.6804 62.7097L31.3548 68.0353ZM45.2903 68.0353L39.9647 62.7097L45.2903 57.3841L49.3548 61.4475C49.2029 62.4029 49.0844 63.3657 48.9925 64.3331L45.2903 68.0353ZM53.5101 48.3841L49.2188 44.0933C49.4592 44.1001 49.6939 44.129 49.9355 44.129C52.249 44.129 54.4774 43.7678 56.5732 43.105C55.4329 44.8072 54.4054 46.5679 53.5101 48.3841Z"
                fill="white"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_6599">
                <rect width="72" height="72" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </View>
        <Text style={styles.buttonText}>Баскетбол</Text>
      </TouchableOpacity>
    </View>
  );
};

const ChooseGameScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <HeaderContainer navigation={navigation} />
      <TextContainer />
      <ButtonsContainer navigation={navigation} />
      <Toolbar navigation={navigation} />
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
  textContainer: {
    marginBottom: 10,
  },
  textTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.white,
  },
  textSubtitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 400,
    color: COLORS.white,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
    position: "absolute",
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
