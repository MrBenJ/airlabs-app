import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tokenActions from '../../actions/tokenActions';
import Header from '../../components/Header';
import style from './style';

class SettingsPage extends Component {

  onClick = () => {
    this.props.dispatch.getToken();
  }

  render() {
    const { loading } = this.props;

    if(loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={style}>
        <Header />
        <div className="">
          Your current token API token:
          {this.props.token || 'No token :('}
          <br/>
          <button onClick={this.onClick}>
            Click to grab new credentials
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    loading: state.loading.callsInProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators(tokenActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
