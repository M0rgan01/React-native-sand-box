import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Button, Col, Container, Grid, Header, Left, Right, Title } from 'native-base';
import { useState } from 'react';

export default function App() {

  const [test, setTest] = useState('coucou');
  const onChangeText = () => {
    setTest('coucou2');
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button danger onPress={onChangeText}>
            <Text style={{color: 'white'}}>
              {test}
            </Text>
          </Button>
        </Right>
      </Header>
      <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}/>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}/>
      </Grid>
      {/*<StatusBar style="auto" />*/}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
