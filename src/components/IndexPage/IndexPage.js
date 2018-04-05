import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';

import { extractChannelId } from '../../utils';
import * as tokenActions from '../../actions/tokenActions';
import * as videoActions from '../../actions/videoActions';
import * as channelActions from '../../actions/channelActions';

import ChannelList from '../ChannelList';
import VideoList from '../VideoList';
import style from './style';

class IndexPage extends Component {

  state = {
    channelField: ''
  }

  onSubmit = e => {
    e.preventDefault();
    const MAX_CHANNELS = 5;
    const { channelField } = this.state;
    const { token, channels, channelServices } = this.props;

    if(channels.length >= MAX_CHANNELS) {
      return;
    }

    const channelId = extractChannelId(channelField);
    channelServices.addChannel(channelId, token, channels);

  }

  render() {

    const { channelField } = this.state;
    const { loading } = this.props;

    // if(loading) {

    // }

    return (
      <div className={style}>
        <Header />
        <div className="input-box">
          <p>Enter a channel id or URL (5 maximum):</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ channelField: e.target.value })}
              value={channelField}
            />
            <p className="remove" onClick={() => this.setState({ channelField: ''})}>
              X
            </p>
          </form>
          <ChannelList />
          <VideoList />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // move to back of callstack
    setTimeout(() => {
      if(!this.props.token) {
        this.props.tokenServices.getToken();
      }
    }, 0)

  }
}

function mapStateToProps(state) {
  const { token, loading, channels } = state;
  return {
    token,
    channels,
    loading: loading.callsInProgress

  };
}

function mapDispatchToProps(dispatch) {
  return {
    tokenServices: bindActionCreators(tokenActions, dispatch),
    videoServices: bindActionCreators(videoActions, dispatch),
    channelServices: bindActionCreators(channelActions, dispatch)
  };
}

export { IndexPage };
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
