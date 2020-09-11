import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../theme';
import Home from './Home';
import DrawerUserInfo from './DrawerUserInfo';

const Drawer = createDrawerNavigator();

class HomeDrawer extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        drawerType={'slide'}
        drawerStyle={{backgroundColor: colors.secondary, width: null}}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName={'Home'}
        drawerContentOptions={{
          activeBackgroundColor: colors.transparent,
          itemStyle: styles.menuItemContainer,
          labelStyle: styles.menuItemText,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="IssueManagement"
          component={Home}
          options={{drawerLabel: 'Issue Management'}}
        />
        <Drawer.Screen
          name="ActionItems"
          component={Home}
          options={{drawerLabel: 'Meeting & Action Items'}}
        />
        <Drawer.Screen
          name="TaskManagement"
          component={Home}
          options={{drawerLabel: 'Task Management'}}
        />
        <Drawer.Screen
          name="FullKitManagement"
          component={Home}
          options={{drawerLabel: 'Full Kit Management'}}
        />
        <Drawer.Screen
          name="Progress Update"
          component={Home}
          options={{drawerLabel: 'Progress Update'}}
        />
        <Drawer.Screen
          name="Report"
          component={Home}
          options={{drawerLabel: 'Report'}}
        />
        <Drawer.Screen
          name="ChangePassword"
          component={Home}
          options={{drawerLabel: 'Change Password'}}
        />
      </Drawer.Navigator>
    );
  }
}

class CustomDrawerContent extends React.Component {
  onLogoutPress = () => {
    const {navigation} = this.props;
    navigation.closeDrawer();
    navigation.navigate('Logout');
  };

  render() {
    return (
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
        {...this.props}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[colors.primary, colors.secondary]}
          style={styles.gradientView}>
          <DrawerUserInfo />
          <View style={styles.menuContainer}>
            <DrawerItemList {...this.props} />
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={this.onLogoutPress}>
            <Text style={styles.buttonLabel}>Logout</Text>
          </TouchableOpacity>
        </LinearGradient>
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  gradientView: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
  },
  menuItemContainer: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBorder,
  },
  menuItemText: {
    ...fonts.h18,
    color: colors.white,
  },
  logoutButton: {
    marginHorizontal: 30,
    marginVertical: 16,
    borderRadius: 24,
    padding: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  buttonLabel: {
    ...fonts.h20,
    color: colors.white,
  },
});

export default HomeDrawer;
