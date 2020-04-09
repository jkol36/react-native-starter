
import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    TouchableOpacity,
    Dimensions,
    View,
    Image,
   } from 'react-native'
import PropTypes from 'prop-types';
import { Title } from 'react-native-paper';

import { connect } from 'react-redux';
import { Container, Card, Grid, Col, CardItem, Body, Text, Button, Row } from 'native-base';
import { Error, Spacer } from '../../components/UI';
import { Actions } from 'react-native-router-flux';


const sports = [{
  name: 'Basketball',
  uri: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1667&q=80',
  id: 1,
  bgColor:'blue'
},
{
  name:'Baseball',
  uri: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2548&q=80',
  id: 2,
  bgColor: 'orange'
},
{
  name: 'Soccer',
  uri: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  id: 3,
  bgColor: 'yellow'
},
{
  name: 'Football',
  uri: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80',
  id: 4,
  bgColor: 'red'
},

]


class Sports extends React.Component {
  constructor(props) {
    super(props);
    console.log('sports', this.props)
  }
  renderItem = ({item, index}) => {
    const { uri, name, bgColor } = item
    return (
        <TouchableOpacity onPress={() => this.props.dispatch(Actions.push('gameview'))} style={{width:Dimensions.get('window').width / 2}} key={item.id}>
          <Card> 
            <CardItem cardBody> 
              <Image
                source={{uri}}
                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height / 3}}
              />
            </CardItem>
            <CardItem cardBody> 
              <Body style={{paddingHorizontal: 15}}>
                <Spacer size={10} />
                <Text style={{fontWeight: '800'}}> {name} </Text>
                <Spacer size={15} />
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>

    )
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.sports}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
  );
  }
}

Sports.propTypes = {
  sports: PropTypes.array
}

const mapStateToProps = (state) => ({
  sports: state.sports || sports
})
export default connect(mapStateToProps)(Sports);

