/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
import React, {
  Component,
} from 'react';
import { 
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


 var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


class MainFrame extends Component{

 constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
    };
  }
  
   componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
  }


    render(){
        if (!this.state.movies) {
      return this.renderLoadingView();
    }

    var movie = this.state.movies[0];
    return this.renderMovie(movie);
}




renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }


}

 




var styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


   rightContainer: {
    flex: 1,//占据 img 剩下的空间

    backgroundColor:'#58a',
  },


  thumbnail: {
    width: 53,
    height: 81,
  },


   title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },


});
 




module.exports = MainFrame;
