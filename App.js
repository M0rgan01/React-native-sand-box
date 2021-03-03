import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Spinner,
  Title
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import CustomDrawer from './components/CustomDrawer';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });

  let [drawerValue, setDrawerValue] = useState(false);

  if (!fontsLoaded) {
    return <Container style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner color='blue'/>
    </Container>
  }

  return (
    <CustomDrawer value={drawerValue} onClose={() => setDrawerValue(false)}>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => setDrawerValue(true)}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </CustomDrawer>
  );
  {/*<StatusBar style="auto" />*/
  }
}
