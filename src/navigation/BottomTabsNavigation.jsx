import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Home.jsx'
import MangasScreen from '../screens/Mangas.jsx'
import LogoutScreen from '../screens/Logout.jsx'


const Tab = createBottomTabNavigator()

export default function BottomTabsNavigation(){

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name='Mangas' options={{ headerShown: false }} component={MangasScreen} />
            <Tab.Screen name='Logout' options={{ headerShown: false }} component={LogoutScreen} />
        </Tab.Navigator>
    )
}