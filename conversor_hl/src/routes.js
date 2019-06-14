import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Nav = createStackNavigator({
    Main: {
        screen:Main,
        navigationOptions:{ header:null }
    }
});

export default createAppContainer(Nav);
