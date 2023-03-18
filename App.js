import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
  Satisfy_400Regular,
  RobotoCondensed_400Regular,
  Rubik_400Regular,
  Quicksand_400Regular
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Satisfy_400Regular,
    RobotoCondensed_400Regular,
    Rubik_400Regular,
    Quicksand_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Frameworks JS</Text>

        <View
          style={{
            borderBottomColor: '#ffff',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <FlatList
          data={arrayFramework}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image style={styles.img} source={item.capa} />
              <Text style={styles.framework}>
                {''}
                <Text style={styles.subtitulo}> {item.framework} </Text>
                {'\n'}
                Ano: {item.ano} {'\n'} {item.desc} {'\n'} {''}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3d3d3d',
    padding: 8,
  },
  titulo: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 40,
    color: '#ffff',
    fontFamily: 'RobotoCondensed_400Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginTop: 10
  },
  imgTitulo: {
    width: 300,
    height: 100,
    resizeMode: 'center',
    margin: 10
  },
  framework: {
    fontSize: 20,
    color: '#ffff',
    fontFamily: 'Quicksand_400Regular',
    backgroundColor: '#3d3d3d',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontFamily: 'Rubik_400Regular'
  },
});
const arrayFramework = [
  {
    framework: 'Angular',
    ano: '2016',
    desc: 'Angular (comumente referido como "Angular 2+" ou "Angular 2") é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.',
    capa: require('./assets/Angular.png'),
  },
  {
    framework: 'React',
    ano: '2013',
    desc: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    capa: require('./assets/react.png')
  },
  {
    framework: 'Vue.js',
    ano: '2014',
    desc: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única. O Vue.js conta com uma arquitetura que pode ser adotada de forma incremental, e que foca na renderização declarativa e na composição de componentes.',
    capa: require('./assets/vue.png')
  },
  {
    framework: 'Ember',
    ano: '2011',
    desc: 'O Ember.js, ou somente Ember, é um framework web JavaScript de código aberto, baseado na arquitetura Model–view–viewmodel. Ele permite aos desenvolvedores aplicativos web de página única escaláveis, ao incorporar expressões idiomáticas comuns e boas práticas de desenvolvimento em seu núcleo.',
    capa: require('./assets/ember.png')
  },

];
