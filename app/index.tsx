import { View } from 'react-native';
import Text from '../components/Text';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const navigation = useRouter()

  const navigateToSearchCriteriaPage = () => {
    navigation.push("search-criteria")
  }
  return (
    <View className="flex-1 items-center justify-around p-4 w-full">
      <Text displaySerif huge centered>Find a great park for your kids</Text>
      <View className="h-1/2 w-full bg-neutral-200" />
      <Text large centered>PlayPath helps you find great parks to visit along your route while traveling with small kids.</Text>
      <Button text="Get Started" onPress={navigateToSearchCriteriaPage} />
    </View>
  );
}
