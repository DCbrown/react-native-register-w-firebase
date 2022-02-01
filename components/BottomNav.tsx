import React from 'react';
import { Text } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

const activitiesRoute = () => <Text>Activities Page</Text>;

const exploreRoute = () => <Text>Explore Page</Text>;

const inboxRoute = () => <Text>Inbox page</Text>;

const profileRoute = () => <Text>Profile page</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'activities', title: 'Activities', icon: 'pulse' },
    { key: 'explore', title: 'Explore', icon: 'compass' },
    { key: 'inbox', title: 'Inbox', icon: 'inbox' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    activities: activitiesRoute,
    explore: exploreRoute,
    inbox: inboxRoute,
    profile: profileRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default BottomNav;
