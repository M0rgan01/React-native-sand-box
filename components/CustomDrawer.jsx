import React from 'react';
import { Body, Card, CardItem, Drawer } from 'native-base';
import { Text } from 'react-native';

export default function CustomDrawer({ children, value, onClose }) {

  const closeDrawer = () => {
    onClose();
  };

  const sideBar = <Card style={{ height: '100%' }}>
    <CardItem>
      <Body>
        <Text>
          test
        </Text>
      </Body>
    </CardItem>
  </Card>;

  return (<Drawer open={value}
                  content={sideBar}
                  onClose={closeDrawer}>
    {children}
  </Drawer>);
}
