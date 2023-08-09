import { View } from 'react-native';
import Text from '../components/Text';
import Button from '../components/Button';

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-around p-4 w-full">
      <Text displaySerif huge centered>Find a great park for your kids</Text>
      <View className="h-1/2 w-full bg-neutral-200" />
      <Text large centered>PlayPath helps you find great parks to visit along your route while traveling with small kids.</Text>
      <Button text="Get Started" navTo="search-criteria" />
    </View>
  );
}
