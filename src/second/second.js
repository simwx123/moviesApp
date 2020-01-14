import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

const second: FunctionComponent<{}> = props => {
  const movieKey = (props.navigation.state.params && props.navigation.state.params.movieKey) ? props.navigation.state.params.movieKey : 0;
  const allMovies = useSelector(state => state.act.allMovies);
  const selectedMovie = (allMovies[movieKey]) ? allMovies[movieKey] : '';

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.container}>
        <View style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('MOVIE');
          }}>
            <Icon style={{ marginLeft: 10 }} name="chevron-left" size={25} color='grey' />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingHorizontal: 30, alignItems: 'center' }}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={{ fontSize: 30 }}
            >
              {selectedMovie.title}
            </Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', }}>
          <FastImage
            source={{ uri: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}` }}
            style={{ height: 400, width: 300, borderRadius: 5 }}
          />
          <Text style={{ fontWeight: 'bold', marginHorizontal: 25, paddingTop: 10, fontSize: 20 }}>Release Date : {selectedMovie.release_date}</Text>

        </View>


        <Text style={{ fontWeight: 'bold', marginHorizontal: 25, paddingTop: 10, fontSize: 20 }}>Synopsis :</Text>
        <Text style={{ marginHorizontal: 25, paddingTop: 10, fontSize: 20 }}>
          {selectedMovie.overview}
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    height: 260,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    flex: 1,
  },
  title: {
    fontSize: 14,
    paddingTop: 7,
    fontWeight: 'bold'
  },
});

export default withNavigation(second);
