import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider, Image } from 'react-native-paper';

export default function App() {
  return (
  
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
        <StatusBar style="auto" />


          <Button mode='contained' onPress={() => alert('Você clicou')}>
            <Text>Clicar</Text>
          </Button>
          <Button mode='contained-tonal' onPress={() => alert('Você clicou')}>
            <Text>Clicar</Text>
          </Button>
          <Button mode='elevated' onPress={() => alert('Você clicou')}>
            <Text>Clicar</Text>
          </Button>
          <Button mode='outlined' onPress={() => alert('Você clicou')}>
            <Text>Clicar</Text>
          </Button>
          <Button mode='text' onPress={() => alert('Você clicou')}>
            <Text>Clicar</Text>
          </Button>


          <Text variant='bodyLarge'>Um texto qualquer</Text>
          <Divider style={{ width: '90%', height: 2}}/>
          <Text variant='displayLarge'>Um texto qualquer</Text>
          <Divider style={{ width: '90%', height: 2}}/>
          <Text variant='headlineLarge'>Um texto qualquer</Text>
          <Divider style={{ width: '90%', height: 2}}/>
          <Text variant='labelLarge'>Um texto qualquer</Text>
          <Divider style={{ width: '90%', height: 2}}/>
          <Text variant='titleLarge'>Um texto qualquer</Text>
          <Divider style={{ width: '90%', height: 2}}/>
          <Text variant='displayMedium'>Um texto qualquer</Text>


          <Card style={{margin: 10}}>
              <Card.Content>
                  <Title>Titulo qualquer</Title>
                  <Paragraph>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                  </Paragraph>
              </Card.Content>
          </Card>
        
          <Card style={{margin: 10}}>
              <Card.Content>
                  <Title>Titulo qualquer</Title>
                  <Paragraph>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                  </Paragraph>
              </Card.Content>
          </Card>
          <Card style={{margin: 10}}>
              <Card.Content>
                  <Title>Titulo qualquer</Title>
                  <Paragraph>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                  </Paragraph>
              </Card.Content>
          </Card>

        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50
  },
});
