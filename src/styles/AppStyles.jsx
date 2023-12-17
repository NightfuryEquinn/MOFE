import { StyleSheet } from "react-native";
import { colors } from "../assets/colors/Colors";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.greyblue
  },
  containerWrapper: {
    flexDirection: 'column'
  },
  headerDivider: {
    padding: 10,
    backgroundColor: colors.white,
  },
  header: {
    color: colors.deepblue,
    fontFamily: "Kronshtadt",
    fontSize: 20,
    textAlign: 'center'
  },
})