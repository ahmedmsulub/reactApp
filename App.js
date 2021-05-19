import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Screens and components
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/Settings';
import CreateEventSplash from './screens/event/CreateEventSplash'
import CreateEvent from './screens/event/CreateEvent';
import EditProfile from './screens/profile/EditProfile';
import Profile from './screens/profile/Profile';
import UserMenu from './components/UserMenu';
import Guest from './screens/guest/Guest';
import Specifics from './screens/guest/Specifics';
import GuestList from './screens/guest/GuestList';
import Chat from './screens/Chat'
import RegisterUser from './screens/RegisterUser';
import Contact from './screens/Contact';
import InviteFriends from './screens/InviteFriends';
import Host from './screens/host/Host'
import HostSpecifics from './screens/host/HostSpecifics'
import HostList from './screens/host/HostList';
// import Login from './screens/Login'
import Report from './screens/Report';

/** 
* Logic for navigation and disables standard Header 
**/

const HomePage = createStackNavigator(
  {
    UserMenu: UserMenu,
    Home: HomeScreen,
    Settings: SettingsScreen,
    Event: CreateEventSplash,
    CreateEvent: CreateEvent,
    EditProfile: EditProfile,
    Profile: Profile,
    Guest: Guest,
    Specifics: Specifics,
    GuestList: GuestList,
    Chat: Chat,
    Register: RegisterUser,
    Contact: Contact,
    Invite: InviteFriends,
    Host: Host,
    HostSpecifics: HostSpecifics,
    HostList: HostList,
    // Login: Login,
    Report: Report,
  },
  
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
  
);

export default createAppContainer(HomePage);
