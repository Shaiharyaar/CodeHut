import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const imgstyles = StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    height: height * 0.15,
    width: height * 0.15,
  },
  uploadImage: {
    alignSelf: "center",
    marginVertical: height * 0.05,
    height: height * 0.28,
    width: height * 0.28,
    borderRadius: height * 0.5,
  },
});
const inputstyles = StyleSheet.create({
  primary: {
    borderRadius: 50,
    height: height * 0.05,
    fontSize: height * 0.017,
    paddingHorizontal: height * 0.02,
    borderWidth: 1,
    borderColor: "#33003377",
  },
  primaryelevation: {
    backgroundColor: "#fff",
    borderRadius: 50,
    height: height * 0.055,
    fontSize: height * 0.019,
    paddingHorizontal: height * 0.01,
    borderWidth: 1.3,
    borderColor: "#330033",
    shadowColor: "#aaafff",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
const viewstyles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: "#330033",
  },
  scrollscreenspacing: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: width * 0.08,
    paddingHorizontal: width * 0.02,
  },
  fieldcontainer: {
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.01,
  },

  signupContainer: {
    position: "absolute",
    top: height * 0.03,
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "#eeeeee",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: width * 0.01,
    paddingVertical: width * 0.05,
  },
  loginContainer: {
    position: "absolute",
    top: height * 0.05,
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#eeeeee",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: width * 0.01,
    paddingVertical: width * 0.05,
  },
  imageUploadContainer: {
    position: "absolute",
    top: height * 0.17,
    right: 0,
    width: width * 0.9,
    height: height * 0.63,
    backgroundColor: "#eeeeee",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: width * 0.01,
    paddingVertical: width * 0.05,
  },
});

const buttonstyles = StyleSheet.create({
  primary: {
    backgroundColor: "#555555",
    borderRadius: width * 0.1,
    alignSelf: "flex-end",
    padding: height * 0.005,
    alignItems: "center",
    paddingVertical: height * 0.008,
    height: height * 0.045,
    width: "35%",
  },
  secondary: {
    backgroundColor: "#aaaaaa22",
    borderRadius: width * 0.013,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: height * 0.01,
    height: height * 0.045,
    width: "30%",
    marginHorizontal: width * 0.04,
  },
  secondaryDark: {
    backgroundColor: "#330033aa",
    borderRadius: width * 0.013,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: height * 0.01,
    height: height * 0.045,
    width: "30%",
    marginHorizontal: width * 0.04,
  },
});
const textstyles = StyleSheet.create({
  heading1: {
    color: "#777",
    fontSize: height * 0.03,
    letterSpacing: 5,
    borderBottomWidth: 1,

    paddingLeft: width * 0.04,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  primarybuttontext: {
    color: "#fff",
    fontSize: height * 0.02,
  },
  secondary: {
    color: "#330033",
    fontWeight: "600",
    fontSize: height * 0.02,
  },
  secondaryDark: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: height * 0.02,
  },

  signupheading: {
    position: "absolute",
    fontSize: width * 0.13,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#ffffff33",
    paddingVertical: width * 0.04,
    borderBottomRightRadius: 50,
    paddingLeft: width * 0.03,
    paddingRight: width * 0.1,
    bottom: -(width * 0.22),
  },
  imageuploadheading: {
    position: "absolute",
    right: 0,
    fontSize: width * 0.1,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#ffffff33",
    paddingVertical: width * 0.04,
    borderTopLeftRadius: 50,
    paddingRight: width * 0.03,
    paddingLeft: width * 0.1,
    top: -(width * 0.22),
  },
  link: {
    color: "#551abb",
  },
});
export { imgstyles, viewstyles, inputstyles, buttonstyles, textstyles };
