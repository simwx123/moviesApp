import React, { FunctionComponent } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


interface ISimpleMovieListProps {
  data: [];
  title?: string;
  icon?: string;
  // onSelectMovie: (movie: IDiscoverDomain) => void;
}

const SimpleMovieList: FunctionComponent<ISimpleMovieListProps> = ({
  data,
  title,
  // onSelectMovie,
  icon,
}) => {
  return (
    <View style={styles.flatListContainer}>
      {title && (
        <View style={styles.titleContainer}>
          {icon && (
            <Icon name={icon} size={20} />
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
   
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    height: 280,
  },
  title: {
    fontFamily: 'SourceSansPro-Black',
    marginLeft: 10,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default SimpleMovieList;