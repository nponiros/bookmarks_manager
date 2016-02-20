import React from 'react';

import {Col, Grid, Row} from 'react-bootstrap';

import Menu from './menu.js';
import BookmarksList from './bookmarks/bookmarks_list.js';
import Alerts from './alerts.js';

class BmApp extends React.Component {
  render() {
    const alertStyles = {
      position: 'fixed',
      zIndex: 100
    };

    return <Grid fluid>
      <Row style={{marginTop: 10 + 'px'}}>
        <Col md={8} sm={10} mdOffset={2} smOffset={1} style={alertStyles}><Alerts/></Col>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          <Menu/>
          <BookmarksList/>
        </Col>
      </Row>
    </Grid>;
  }
}
BmApp.propTypes = {};

export default BmApp;
