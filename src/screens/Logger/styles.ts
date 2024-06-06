import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ROW
  rowContainer: {
    flexDirection: 'row',
  },
  numbering: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginRight: 8,
  },
  rowText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },

  // INSTRUCTIONS
  instructionsContainer: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
  },
  lottie: {
    width: '100%',
    height: '36%',
    marginVertical: 24,
  },
  textContainer: {
    marginHorizontal: 36,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 24,
  },
  bodyTextContainer: {
    gap: 16,
    marginHorizontal: 8,
  },

  // INSTRUCTION LEVEL
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
  },

  // CAMERA / POST-CAPTURE
  cameraContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
  },
  cameraFrame: {
    display: 'flex',
    height: 'auto',
    aspectRatio: 1,
    width: '85%',
    margin: 24,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#1C83E0',
  },
  camera: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: 24,
    backgroundColor: '#1F1F1F',
  },
  cameraTips: {
    display: 'flex',
    gap: 16,
    marginHorizontal: 48,
  },
  cameraActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
  },
  retakeButton: {
    display: 'flex',
    flexShrink: 1,
    width: '100%',
    backgroundColor: '#E7451F',
    margin: 0,
    paddingHorizontal: 36,
    paddingVertical: 16,
  },
  actionButton: {
    display: 'flex',
    backgroundColor: '#1C83E0',
    margin: 0,
    width: '100%',
    flexShrink: 1,
    paddingHorizontal: 36,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },

  // LOADING MODAL
  loadingModal: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    zIndex: 3,
    width: '50%',
    aspectRatio: 1,
    opacity: 1,
  },

  // ERROR MODAL
  errorModal: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorView: {
    zIndex: 3,
    width: '80%',
    aspectRatio: 3 / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
  },
  errorTitle: {
    fontSize: 18,
    fontFamily: 'Inter-ExtraBold',
    textAlign: 'left',
    flexGrow: 1,
    margin: 8,
    marginBottom: 0,
  },
  errorText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'left',
    flexGrow: 1,
    margin: 8,
    marginTop: 0,
  },
  errorButton: {
    display: 'flex',
    backgroundColor: '#1C83E0',
    margin: 0,
    width: '100%',
    flexShrink: 1,
    flexGrow: 0,
    paddingHorizontal: 36,
    paddingVertical: 16,
  },
});
