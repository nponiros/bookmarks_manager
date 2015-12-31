export default function constructServerUrl(url, port) {
  if (typeof port === 'number') {
    return `${url}:${port}`;
  } else {
    return url;
  }
}
