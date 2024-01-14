import { StyleSheet } from "react-native";
import { colors } from "../assets/colors/Colors";

export const AppStyles = StyleSheet.create({
  flexFull: {
    flex: 1
  },
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
  headerDividerAlt: {
    padding: 10,
    backgroundColor: colors.deepblue,
    borderBottomLeftRadius: 20
  },
  header: {
    color: colors.deepblue,
    fontFamily: "Kronshtadt",
    fontSize: 20,
    textAlign: 'center'
  },
  headerAlt: {
    color: colors.skyblue,
    fontFamily: "Kronshtadt",
    fontSize: 24,
    textAlign: 'right'
  },
  topImageButton: {

  },
  middleImageButton: {

  },
  bottomImageButton: {

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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  noteMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskMainLeft: {
    width: 240,
    flexDirection: 'column',
    gap: 15
  },
  logMainLeft: {
    width: 240,
    flexDirection: 'column',
    gap: 15
  },
  noteMainLeft: {
    width: 240,
    flexDirection: 'column',
    gap: 15
  },
  taskMainRight: {
    position: 'relative',
    width: 50,
    flexDirection: 'column',
  },
  logMainRight: {
    position: 'relative',
    width: 50,
    flexDirection: 'column',
  },
  noteMainRight: {
    position: 'relative',
    width: 50,
    flexDirection: 'column',
  },
  logDailyContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 15
  },
  logDailyButtonContainer: {
    backgroundColor: colors.deepblue,
    padding: 5,
    paddingLeft: 15,
    borderBottomLeftRadius: 10,
  },
  logDailyButtonContainerCompleted: {
    backgroundColor: colors.skyblue,
    padding: 5,
    paddingLeft: 15,
    borderBottomLeftRadius: 10,
  },
  logDailyButton: {
    width: 87.5,
    color: colors.skyblue,
    fontFamily: 'Kronshtadt',
    fontSize: 16
  },
  logDailyButtonCompleted: {
    width: 87.5,
    color: colors.deepblue,
    fontFamily: 'Kronshtadt',
    fontSize: 16
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
  noteContainer: {
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
  noteDateContainer: {
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
  noteDate: {
    color: colors.skyblue,
    fontFamily: 'Kronshtadt',
    fontSize: 16
  },
  taskPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notePreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskMore: {
    width: 28,
    height: 28,
  },
  noteMore: {
    width: 28,
    height: 28,
  },
  taskPreview: {
    gap: 5
  },
  notePreview: {
    gap: 5
  },
  taskPreviewLabel: {
    color: colors.deepblue,
    fontFamily: 'Kronshtadt',
    fontSize: 14,
    textAlign: 'right'
  },
  notePreviewLabel: {
    color: colors.deepblue,
    fontFamily: 'Kronshtadt',
    fontSize: 14,
    textAlign: 'right'
  },
  taskScroll: {
    flex: 1
  },
  logScroll: {
    flex: 1,
  }, 
  noteScroll: {
    flex: 1
  },  
  logMonth: {
    marginBottom: 15,
    color: colors.deepblue,
    backgroundColor: colors.white,
    padding: 10,
    paddingRight: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 20,
    textAlign: 'right',
    textTransform: 'uppercase'
  },
  bookmarkContainer: {
    width: 'fit-content',
    paddingHorizontal: 7.5,
    paddingTop: 15,
    paddingBottom: 10,
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  bookmark: {
    fontFamily: 'Noatun',
    fontSize: 36,
    color: colors.deepblue,
  },
  ctaContainer: {
    marginTop: 'auto',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center'
  },
  ctaDetailContainerWrapper: {
    marginTop: 'auto',
  },
  ctaDetailContainerWrapperCompleted: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  ctaDetailContainer: {
    marginTop: 'auto',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center'
  },
  ctaButtonContainer: {
    height: 40,
    width: 40,
    padding: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctaDetailButtonContainer: {
    height: 32,
    width: 32,
    padding: 10,
    backgroundColor: colors.deepblue,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctaDetailButtonContainerCompleted: {
    height: 32,
    width: 32,
    padding: 10,
    backgroundColor: colors.greyblue,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    height: 20,
    width: 20
  },
  ctaDetailButton: {
    height: 20,
    width: 20
  },
  taskDetailContainer: {
    marginBottom: 20,
    width: 'fit-content',
    paddingVertical: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
  },
  noteDetailContainer: {
    marginBottom: 20,
    width: 'fit-content',
    paddingVertical: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
  },
  taskDetailContainerCompleted: {
    marginBottom: 20,
    width: 'fit-content',
    paddingVertical: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.deepblue,
    borderBottomLeftRadius: 20,
  },
  noteDetailContainerCompleted: {
    marginBottom: 20,
    width: 'fit-content',
    paddingVertical: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.deepblue,
    borderBottomLeftRadius: 20,
  },
  taskDetailLeft: {
    width: '80%'
  },
  taskDetailRight: {
    width: '11.25%'
  },
  noteDetailLeft: {
    width: '80%'
  },
  noteDetailRight: {
    width: '11.25%'
  },
  taskTitle: {
    fontFamily: 'Kronshtadt',
    fontSize: 18,
    color: colors.deepblue,
    paddingBottom: 5,
    paddingLeft: 15,
    marginRight: 10,
    borderBottomColor: colors.skyblue,
    borderBottomWidth: 5
  },
  taskTitleCompleted: {
    paddingLeft: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 18,
    color: colors.white,
    marginRight: 10,
  },
  noteTitle: {
    fontFamily: 'Kronshtadt',
    fontSize: 18,
    color: colors.deepblue,
    paddingBottom: 5,
    paddingLeft: 15,
    marginRight: 10,
    borderBottomColor: colors.skyblue,
    borderBottomWidth: 5
  },
  noteTitleCompleted: {
    paddingLeft: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 18,
    color: colors.white,
    marginRight: 10,
  },
  taskContentContainer: {
    paddingTop: 10
  },
  taskDetail: {
    paddingLeft: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 14,
    color: colors.deepblue
  },
  noteContentContainer: {
    paddingTop: 10
  },
  noteDetail: {
    paddingLeft: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 14,
    color: colors.deepblue
  },
  taskManageContainer: {
    flex: 1,
    gap: 10
  },
  taskInputContainer: {
    gap: 2.5
  },
  taskInputHeader: {
    fontFamily: 'Kronshtadt',
    fontSize: 16,
    color: colors.skyblue
  },
  taskInput: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    color: colors.greyblue,
    height: 40,
    borderBottomLeftRadius: 10
  },
  taskDescInput: {
    height: 80,
  },
  noteManageContainer: {
    flex: 1,
    gap: 10
  },
  noteInputContainer: {
    gap: 2.5
  },
  noteInputHeader: {
    fontFamily: 'Kronshtadt',
    fontSize: 16,
    color: colors.skyblue
  },
  noteInput: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    color: colors.greyblue,
    height: 40,
    borderBottomLeftRadius: 10
  },
  noteDescInput: {
    height: 70,
  },
  modalContainer: {
    alignItems: 'center'
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: 300,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.deepblue,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10
  },
  modalText: {
    fontFamily: 'Noatun',
    fontSize: 44,
    color: colors.skyblue
  },
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 25
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10
  },
  modalButtonText: {
    fontFamily: 'Kronshtadt',
    fontSize: 24,
    color: colors.deepblue
  },
  logManageHeader: {
    backgroundColor: colors.white,
    padding: 10,
    paddingRight: 15,
  },
  logManageTitle: {
    fontFamily: 'Kronshtadt',
    fontSize: 20,
    color: colors.deepblue,
    textAlign: 'right'
  },
  logContentContainer: {
    flex: 1,
    marginBottom: 20,
  },
  logTextarea: {
    padding: 15,
    height: 300,
    backgroundColor: colors.deepblue,
  },
  furyContainer: {
    flexDirection: 'column',
    gap: 15,
    flex: 1
  },
  furyHeader: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center'
  },
  furyTitle: {
    flex: 1,
    padding: 10,
    color: colors.skyblue,
    backgroundColor: colors.deepblue,
    borderBottomLeftRadius: 15,
    fontFamily: 'Kronshtadt',
    fontSize: 20
  },
  furyContentContainer: {
    flex: 1,
    gap: 5
  },
  furyTapText: {
    color: colors.white,
    fontFamily: 'Kronshtadt',
    fontSize: 16,
    textAlign: 'center'
  },
  furyTapTextMinor: {
    color: colors.white,
    fontFamily: 'Kronshtadt',
    fontSize: 12,
    textAlign: 'center'
  },
  furyArea: {
    padding: 10,
    flex: 1
  },
  dogeSticker: {
    height: 125,
    width: 125,
  },
  noValueLabel: {
    color: colors.white,
    fontFamily: 'Kronshtadt',
    fontSize: 16,
  }
})