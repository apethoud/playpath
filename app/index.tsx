import { View } from 'react-native';
import Header from '../UI-components/Header';

export default function Welcome() {
  return (
    <View className="flex-1 items-center bg-violet-200 p-4 w-full">
      <View className="mt-12">
        <Header centered>Find a great park for your kids</Header>
      </View>
    </View>
  );
}