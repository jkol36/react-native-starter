import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



export default class SearchContainer extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	search: ''
	  };
	}

	render() {
		const {search} = this.state
		return (
			<SearchBar
        placeholder='games, events, or teams'
        containerStyle={{
          backgroundColor:'#fff', 
          borderBottomColor:'#fff', 
          elevation:24
        }}
        onChangeText={this.updateSearch}
        inputContainerStyle={{
        	width: '80%',
			    height: 38,
			    borderRadius: 5,
			    borderBottomColor: '#fff',
			    backgroundColor:'#fff',
			    shadowColor: "#c4c4c4",
			    shadowOffset: {
			      width: 1,
			      height: 2
			  },
        }}
        searchIcon={<FontAwesomeIcon name='search' size={30}/>}
        round
        leftIconContainerStyle={{
          marginLeft:10,
        }}
        placeholderTextColor={'black'}
        value={search}
      />
		)
	}
}