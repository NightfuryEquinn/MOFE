import { StyleSheet } from "react-native";
import { colors } from "../assets/colors/Colors";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.greyblue,
    alignContent: 'center'
  },
  containerWrapper: {
    flex: 1,
    flexDirection: 'column',
    gap: 20
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
  imageButton: {

  },
  buttonWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.deepblue,
    borderTopRightRadius: 10
  },
  buttonWrapperAlt: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    position: 'absolute',
    top: 0,
    backgroundColor: colors.deepblue,
    borderBottomRightRadius: 10
  },
  buttonWrapperAltAlt: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.deepblue,
    borderTopLeftRadius: 10
  },
  buttonLabel: {
    fontSize: 36,
    fontFamily: 'Noatun',
    color: colors.skyblue
  },
  middleDivider: {
    flexDirection: 'row',
    gap: 20
  },
  middleSection: {
    gap: 10,
    width: 150
  },
  quote: {
    fontFamily: "Kronshtadt",
    fontSize: 16
  },
  taskMainContainer: {
    flexDirection: 'row',
    gap: 15
  },
  taskMainLeft: {
    width: 260,
    flexDirection: 'column',
    gap: 25
  },
  taskMainRight: {
    width: 50,
    flexDirection: 'column'
  },
  taskContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.white,
    borderRightWidth: 10,
    borderRightColor: colors.deepblue,
    borderBottomLeftRadius: 20,
    gap: 15
  },
  taskDateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    backgroundColor: colors.deepblue,
    borderBottomLeftRadius: 10
  },
  taskDate: {
    color: colors.skyblue,
    fontFamily: 'Kronshtadt',
    fontSize: 16
  },
  taskPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskMore: {
    width: 28,
    height: 28,
  },
  taskPreview: {
    gap: 5
  },
  taskPreviewLabel: {
    color: colors.deepblue,
    fontFamily: 'Kronshtadt',
    fontSize: 14,
    textAlign: 'right'
  },
  taskScroll: {
    height: '77.5%'
  },
  bookmarkContainer: {
    paddingHorizontal: 7.5,
    paddingTop: 15,
    paddingBottom: 5,
    position: 'absolute',
    top: -20,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  bookmark: {
    fontFamily: 'Noatun',
    fontSize: 36,
    color: colors.deepblue,
  }
})