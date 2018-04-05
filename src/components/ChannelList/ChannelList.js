import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as channelActions from '../../actions/channelActions';
import style from './style';
class ChannelList extends Component {
  // constructor(props) {
  //   super(props);

  // }

  removeChannel = evt => {
    const channelId = evt.target.dataset.channel;
    const { channels, token } = this.props;
    this.props.channelServices.removeChannel(channelId, token, channels);
  }

  render() {
    const { channels } = this.props;
    return (
      <div className={style}>
        {channels.map( item => {
          const { img } = item;
          return (
            <div key={item.channelId}>
              <p className="channel-name">
                {item.name}
              </p>
              <p className="channel-desc">
                {item.description}
              </p>
              <button
                onClick={this.removeChannel}
                data-channel={item.channelId}> Remove</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { channels, token } = state;
  return {
    channels,
    token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    channelServices: bindActionCreators(channelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
