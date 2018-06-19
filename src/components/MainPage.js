import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const mapStateToProps = state => {
  return {
    roomCount: state.chatManager.room_count,
    rooms: state.chatManager.rooms,
  };
};

class MainPage extends Component {
  componentDidMount() {
    let { dispatch } = this.props;

    dispatch(actions.getRoomCount());
  }
  render() {
    return (
      <div className='App'>
        <p>count: {this.props.roomCount}</p>
      </div>
    );
  }
}

MainPage.propTypes = {
  roomCount: PropTypes.number.isRequired,
  dispatch: PropTypes.any,
};

export default connect(mapStateToProps)(MainPage);
