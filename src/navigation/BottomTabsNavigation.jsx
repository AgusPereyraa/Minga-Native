import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Home.jsx'
import SettingsScreen from '../screens/Setting.jsx'


const Tab = createBottomTabNavigator()

export default function BottomTabsNavigation(){

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name='Settings' options={{ headerShown: false }} component={SettingsScreen} />
        </Tab.Navigator>
    )
}