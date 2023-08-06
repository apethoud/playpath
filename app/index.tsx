import { View } from 'react-native';
import Header from '../UI-components/Header';
import Text from '../UI-components/Text';

export default function Welcome() {
  return (
    <View className="flex-1 items-center mt-12 p-4 w-full">
      <Header centered>Find a great park for your kids</Header>
      <View className="h-3/5" />
      <Text>PlayPath helps you find great parks to visit along your route while traveling with small kids.</Text>
    </View>
  );
}