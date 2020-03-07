import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import bannerImg from '../../statics/images/banner_01.png';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <a className='homeLink' href='#1'>
            <img className='banner-img' src={bannerImg} alt='' />
          </a>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;