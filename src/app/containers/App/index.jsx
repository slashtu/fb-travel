import React, { Component } from 'react';

import { connect } from 'react-redux';

// redux
import { fbLogin, fetchFBLoginStatus, fetchTaggedPlaces } from 'actions';

// containers
import TravelInfo from 'containers/TravelInfo';

// components
import Layout from 'components/Layout';
import AppBar from 'components/AppBar';
import Map from 'components/Map';

import css from './App.css';

const { Content, Header, Row } = Layout;

import LoadFB from '../../lib/FB';

class App extends Component {

  state = {
    name: 'name',
    taggedPlaces: [],
  };

  click = () => {
    this.setState({name: 'slash'})
  }

  componentDidMount(){
    this.props.fetchTaggedPlaces();
    // this.props.fbLogin();
  }

  render() {
    return (
      <Layout>
        <Header>
          <AppBar/>
        </Header>
        <Content>
          <TravelInfo/>
        </Content>
      </Layout>
    );
  }
}

function mapStateToProps({ FB }) {
  return {
    FB,
  };
}

export default connect(
  mapStateToProps, {
    fbLogin,
    fetchFBLoginStatus,
    fetchTaggedPlaces,
  }
)(App)
