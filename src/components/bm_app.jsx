import React from 'react';

import {Col, Grid, Row} from 'react-bootstrap';

import Menu from './menu.js';
import BookmarksList from './bookmarks/bookmarks_list.js';
import Error from './error.js';

class BmApp extends React.Component {
  render() {
    return <Grid fluid>
      <Row>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          <Error/>
          <Menu/>
          <BookmarksList/>
        </Col>
      </Row>
    </Grid>;
  }
}
BmApp.propTypes = {};

export default BmApp;
