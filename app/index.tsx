import { Image, View } from 'react-native';
import Text from '../components/Text';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const navigation = useRouter()

  const navigateToSearchCriteriaPage = () => {
    navigation.push("search-criteria")
  }
  return (
    <View className="flex-1 items-center justify-between p-4 w-full">
      <View className="w-full mt-24">
        <Text displaySerif huge centered>Find a great park for your kids</Text>
        <Image 
          source={require('../assets/images/welcome-image.png')}
          resizeMode='contain'
          className="w-full my-16"
          alt="A children's play structure with twisty slide and a rocket ship spring rider." />
        <Text large centered>PlayPath helps you find great parks to visit along your route while traveling with small kids.</Text>
      </View>
      <Button text="Get Started" onPress={navigateToSearchCriteriaPage} />
    </View>
  );
}
