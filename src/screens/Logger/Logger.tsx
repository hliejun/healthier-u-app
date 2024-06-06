import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import {
  CameraCapturedPicture,
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { FC, useCallback, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../../App';
import {
  discoverGroceries,
  discoverMeal,
  discoverNutrition,
} from '../../services/discover';
import { useDebounce } from '../../utils/useDebounce';
import { styles } from './styles';

// ROW TEXT

export interface RowTextProps {
  index: number;
  children: string;
}

export const RowText: FC<RowTextProps> = ({ index, children }) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.numbering}>{index}.</Text>
      <Text style={styles.rowText}>{children}</Text>
    </View>
  );
};

// LOGGER INSTRUCTIONS

export interface LoggerInstructionsProps {
  lottie: string | AnimationObject | { uri: string };
  title: string;
  instructions: string[];
}

export const LoggerInstructions: FC<LoggerInstructionsProps> = ({
  lottie,
  title,
  instructions,
}) => {
  return (
    <View style={styles.instructionsContainer}>
      <LottieView source={lottie} style={styles.lottie} autoPlay loop />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.bodyTextContainer}>
          {instructions.map((text: string, index: number) => (
            <RowText index={index + 1} key={index}>
              {text}
            </RowText>
          ))}
        </View>
      </View>
    </View>
  );
};

// LOGGER

export const Logger = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const mode = route?.params?.mode as unknown as string;
  const cameraRef = useRef<CameraView>(null);

  const [facing, _setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPressedStart, setHasPressedStart] = useState<boolean>(false);
  const [base64Photo, setBase64Photo] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const navigator = useNavigation<NavigationProp<RootStackParamList>>();

  const { debounce } = useDebounce();

  const handleCameraPermission = useCallback(() => {
    if (!permission?.granted) {
      requestPermission();
    }

    setHasPressedStart(true);
  }, [permission?.granted, requestPermission]);

  const capture = useCallback(async () => {
    try {
      cameraRef?.current?.takePictureAsync({
        exif: true,
        base64: true,
        quality: 1,
        onPictureSaved: (pic: CameraCapturedPicture) => {
          setBase64Photo(pic.base64 ?? '');
        },
      });
    } catch (error) {
      // handle error
    }
  }, []);

  const retakeCallback = useCallback(() => {
    setBase64Photo('');
  }, []);

  // api submission

  const dismissErrorCallback = useCallback(() => {
    setHasError(false);
  }, []);

  const submitMeal = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setHasError(false);
    try {
      const res = await discoverMeal(base64Photo);
      setIsLoading(() => false);
      navigator.navigate('Results', {
        image: base64Photo,
        result: res,
        mode: 'MEAL',
        title: route.params?.title,
      });
    } catch (error) {
      setIsLoading(() => false);
      setHasError(() => true);
    }
  }, [base64Photo, isLoading, navigator, route.params?.title]);

  const submitGroceries = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setHasError(false);
    try {
      const res = await discoverGroceries(base64Photo);
      setIsLoading(() => false);
      navigator.navigate('Results', {
        image: base64Photo,
        result: res,
        mode: 'GROCERIES',
        title: route.params?.title,
      });
    } catch (error) {
      setIsLoading(() => false);
      setHasError(() => true);
    }
  }, [base64Photo, isLoading, navigator, route.params?.title]);

  const submitNutrition = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setHasError(false);
    try {
      const res = await discoverNutrition(base64Photo);
      setIsLoading(() => false);
      navigator.navigate('Results', {
        image: base64Photo,
        result: res,
        mode: 'NUTRITION',
        title: route.params?.title,
      });
    } catch (error) {
      setIsLoading(() => false);
      setHasError(() => true);
    }
  }, [base64Photo, isLoading, navigator, route.params?.title]);

  let title = '';
  let animation: string | AnimationObject | { uri: string } = '';
  let startInstructions: string[] = [];
  let captureInstructions: string[] = [];
  let confirmInstructions: string[] = [];
  let submitCallback: () => void = () => undefined;
  switch (mode) {
    case 'MEAL':
      title = 'Find out your calories intake...';
      animation = require('../../../assets/lottie/misc/bento.json');
      startInstructions = [
        'Ensure you have allowed "Camera" permissions.',
        'Take a photo of your current meal.',
        'Submit it to find out what we think about it.',
        'Earn points based on how healthy it is!',
      ];
      captureInstructions = [
        'Keep the food in the center.',
        'Try to show all the ingredients in the picture.',
        'Keep a fair distance away to show the full portion.',
      ];
      confirmInstructions = [
        'Press "Confirm" if everything is good to go.',
        'You can only earn points for up to 5 submissions a day!',
      ];
      submitCallback = submitMeal;
      break;
    case 'GROCERIES':
      title = 'Discover Healthier Choice products...';
      animation = require('../../../assets/lottie/misc/cart.json');
      startInstructions = [
        'Ensure you have allowed "Camera" permissions.',
        'Take a photo of a grocery item.',
        'Discover if the product is a healthier choice for you!',
        'Earn points based on how healthy it is!',
      ];
      captureInstructions = [
        'Keep the product in the center.',
        'Ensure the packaging labels of the product is in frame.',
        'Keep a fair distance away to show the full product.',
      ];
      confirmInstructions = [
        'Press "Confirm" if everything is good to go.',
        'You can only earn points for up to 10 submissions a day!',
      ];
      submitCallback = submitGroceries;
      break;
    case 'NUTRITION':
      title = 'Decrypting nutrition labels...';
      animation = require('../../../assets/lottie/misc/nutrition.json');
      startInstructions = [
        'Ensure you have allowed "Camera" permissions.',
        'Take a photo of a nutrition label.',
        'Submit it to discover the health value of the product.',
      ];
      captureInstructions = [
        'Keep the nutrition table and ingredients list in the center.',
        'Ensure that the prints are clearly visible and not blurred.',
        'Keep a fair distance away to show the full list.',
      ];
      confirmInstructions = [
        'Ensure photo is well lit and text are readable',
        'Press "Confirm" if everything is good to go.',
      ];
      submitCallback = submitNutrition;
      break;
    default:
      break;
  }

  // post-capture confirmation
  if (base64Photo) {
    return (
      <>
        <View style={styles.cameraContainer}>
          <View style={styles.cameraFrame}>
            <Image
              width={512}
              height={512}
              src={'data:image/jpg;base64,' + base64Photo}
              style={styles.camera}
            />
          </View>
          <View style={styles.cameraTips}>
            {confirmInstructions.map((instr, index) => (
              <RowText key={index} index={index + 1}>
                {instr}
              </RowText>
            ))}
          </View>
          <View style={styles.cameraActions}>
            <TouchableOpacity
              style={styles.retakeButton}
              onPress={retakeCallback}
            >
              <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={submitCallback}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
        {!!isLoading && (
          <BlurView
            style={styles.loadingModal}
            intensity={100}
            tint="dark"
            experimentalBlurMethod="dimezisBlurView"
          >
            <LottieView
              source={require('../../../assets/lottie/misc/loading.json')}
              style={styles.loader}
              autoPlay
              loop
            />
          </BlurView>
        )}
        {!isLoading && !!hasError && (
          <BlurView
            style={styles.errorModal}
            intensity={100}
            tint="dark"
            experimentalBlurMethod="dimezisBlurView"
          >
            <View style={styles.errorView}>
              <Text style={styles.errorTitle}>Network Error</Text>
              <Text style={styles.errorText}>
                Sorry, we encountered a technical issue. Please try again.
              </Text>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={dismissErrorCallback}
              >
                <Text style={styles.buttonText}>Try again</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        )}
      </>
    );
  }

  // camera
  if (hasPressedStart && permission?.granted) {
    return (
      <View style={styles.cameraContainer}>
        <View style={styles.cameraFrame}>
          <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
        </View>
        <View style={styles.cameraTips}>
          {captureInstructions.map((instr, index) => (
            <RowText key={index} index={index + 1}>
              {instr}
            </RowText>
          ))}
        </View>
        <View style={styles.cameraActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => debounce(capture)}
          >
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // start instructions
  return (
    <View style={styles.container}>
      <LoggerInstructions
        lottie={animation}
        title={title}
        instructions={startInstructions}
      />
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleCameraPermission}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logger;
