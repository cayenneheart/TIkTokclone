import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'ホーム', tabBarIcon: ({color}) => (<MaterialIcons name="home" size={24} color={color}/>)}} />
      <Tabs.Screen name="friends" options={{ title: '友達', tabBarIcon: ({color}) => (<MaterialIcons name="people" size={24} color={color} />)}} />
      <Tabs.Screen name="newPost" options={{ title: '投稿', tabBarIcon: ({color}) => (<MaterialIcons name="add" size={24} color={color} />)}} />
      <Tabs.Screen name="inbox" options={{ title: '受信箱', tabBarIcon: ({color}) => (<MaterialIcons name="inbox" size={24} color={color} />)}} />
      <Tabs.Screen name="profile" options={{ title: 'プロフィール', tabBarIcon: ({color}) => (<MaterialIcons name="person" size={24} color={color} />)}} />
    </Tabs>
  );
}
