import { StyleSheet } from "react-native";
import { colors } from "../colors/Colors";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyblue
  },
  title: {
    fontSize: 32,
    fontFamily: "Noatun"
  },
  body: {
    fontSize: 16,
    fontFamily: "Kronshtadt"
  }
})