import React, { FunctionComponent, useEffect, useState } from 'react';
import { Animated, Platform, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import FastImage from "react-native-fast-image";
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Act } from '../actions/types';

const main: FunctionComponent<{}> = props => {
  const myApiKey = '3ff66b47d9d854216aa2e157a15c9835'; //change this to your moviedb api key
  const allMovies = useSelector(state => state.act.allMovies);
  const dispatch = useDispatch();
  const [movies, setAllMovie] = useState([]);
  const [searcText, setSearchText] = useState('');
  const [errorSearch, setError] = useState('');

  const fetchMovies = async () => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}`)
    if (response.status !== 200) {
      return;
    }

    let data = await response.json();
    setAllMovie(data.results)
    dispatch({ type: Act.ALL_MOVIE, payload: data.results })
  };

  const RenderItem = ({ ikey, items }) => {
    return (

      <View
        style={{
          flex: 1,
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MOVIEDETAILS', {
              movieKey: ikey,
            })
          }}
        >
          <FastImage
            source={{ uri: `https://image.tmdb.org/t/p/w500${items.poster_path}` }}
            style={{ height: 160, width: 160, borderRadius: 8 }}
          />

          <View style={{ width: 160 }}>
            <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>{ikey + 1}. {items.title}</Text>
          </View>


        </TouchableOpacity>

      </View>
    )

  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchFilterFunction = async (text) => {
    setSearchText(text)

    var matchData = [];

    allMovies.forEach(element => {
      const itemData = element.title.toUpperCase();
      const textData = text.toUpperCase();

      if (textData !== "") {
        if (itemData.indexOf(textData) > -1) {
          matchData.push(element);
        }
      }

    });


    if (matchData.length !== 0) {
      dispatch({ type: Act.ALL_MOVIE, payload: matchData })
    } else {
      if (text !== "") {
        setError("No results found!")
      } else {
        setError("")
        dispatch({ type: Act.ALL_MOVIE, payload: movies })
      }
    }

  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center', paddingVertical: 8 }}>Popular Movies</Text>

      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          // ref={input => {
          //   this.textInput = input;
          // }}
          style={styles.TextInputSearch}
          placeholder="Search"
          placeholderTextColor="#778899"
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilterFunction(text)}
        />
      </View>


      <FlatList
        numColumns={2}
        data={allMovies}
        horizontal={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <RenderItem ikey={index} items={item} />}
      ></FlatList>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    fontSize: 14,
    paddingTop: 7,
  },
  title: {
    fontSize: 14,
    paddingTop: 7,
    fontWeight: 'bold'
  },
  TextInputSearch: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    height: Platform.OS === 'ios' ? 40 : 0,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10
  },
});

export default withNavigation(main);
