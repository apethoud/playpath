import { View } from 'react-native';
import Header from '../UI-components/Header';

export default function Welcome() {
  return (
    <View className="flex-1 bg-violet-200 p-4 w-full">
      <Header>Find a great park for your kids</Header>
    </View>
  );
}