export function extractChannelId(string) {
  if(
    string.startsWith('http') ||
    string.startsWith('vimeo')) {

    // it's a URL. Extract the channel ID
    const splitURL = string.split('/');
    let channelId = splitURL[splitURL.length - 1];

    // Remove any query string
    if(channelId.includes('?')) {
      channelId =
        channelId.split('?')[0];
    }

    return channelId;

  } else {

    // It's the channel Id
    return string;
  }
}
