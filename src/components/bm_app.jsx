import React from 'react';

import {Col, Grid, Row} from 'react-bootstrap';

import Menu from './menu.js';
import BookmarksList from './bookmarks/bookmarks_list.js';
import Alert from './alert.js';

class BmApp extends React.Component {
  render() {
    return <Grid fluid>
      <Row style={{marginTop: 10 + 'px'}}>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          <Alert/>
          <Menu/>
          <BookmarksList/>
        </Col>
      </Row>
    </Grid>;
  }
}
BmApp.propTypes = {};

export default BmApp;
