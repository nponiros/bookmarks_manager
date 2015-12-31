import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Glyphicon, Panel} from 'react-bootstrap';

import AddNewBookmark from './bookmarks/add_new_bookmark.js';
import Search from './search.js';
import Settings from './settings.js';

import {sync} from '../actions/sync_actions.js';
import {showError} from '../actions/error_actions.js';

import connectionStatusStore from '../stores/connection_status_store.js';
import {CHANGE} from '../constants/connection_status_constants.js';

class Menu extends React.Component {
  constructor() {
    super();
    this.searchOpen = false;
    this.addOpen = false;
    this.settingsOpen = false;
    this.state = {
      open: this.isOpen(),
      syncing: false,
      isOnline: connectionStatusStore.getInitialState().isOnline
    };

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    connectionStatusStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    connectionStatusStore.removeListener(CHANGE, this.changeListener);
  }

  onChange(data) {
    this.setState(data);
  }

  isOpen() {
    return this.searchOpen || this.addOpen || this.settingsOpen;
  }

  handleSearchToggle() {
    this.searchOpen = !this.searchOpen;
    this.addOpen = false;
    this.settingsOpen = false;
    this.setState({
      open: this.isOpen()
    });
  }

  handleAddToggle() {
    this.addOpen = !this.addOpen;
    this.searchOpen = false;
    this.settingsOpen = false;
    this.setState({
      open: this.isOpen()
    });
  }

  handleSettingsToggle() {
    this.settingsOpen = !this.settingsOpen;
    this.searchOpen = false;
    this.addOpen = false;
    this.setState({
      open: this.isOpen()
    });
  }

  handleSync() {
    this.setState({
      syncing: true
    });
    sync().then(() => {
      this.setState({
        syncing: false
      });
    }).catch((err) => {
      this.setState({
        syncing: false
      });
      showError(err);
    });
  }

  renderTitle() {
    const classes = this.state.syncing ? 'syncing' : '';
    const glyph = this.state.isOnline ? 'signal' : 'plane';
    return <Row>
      <Col xs={12} sm={12} className="h3" componentClass="h2">
        <Col xs={3} sm={3}>
          <Glyphicon onClick={() => this.handleAddToggle()} glyph="plus"/>
        </Col>
        <Col xs={3} sm={3}>
          <Glyphicon onClick={() => this.handleSearchToggle()} glyph="search"/>
        </Col>
        <Col xs={2} sm={2} className={classes}>
          <Glyphicon onClick={() => this.handleSync()} glyph="refresh"/>
        </Col>
        <Col xs={2} sm={2}>
          <Glyphicon glyph={glyph}/>
        </Col>
        <Col xs={2} sm={2}>
          <Glyphicon onClick={() => this.handleSettingsToggle()} glyph="cog"/>
        </Col>
      </Col>
    </Row>;
  }

  renderBody() {
    if (this.addOpen) {
      return <AddNewBookmark closePanel={() => this.handleAddToggle()}/>;
    } else if (this.searchOpen) {
      return <Search closePanel={() => this.handleSearchToggle()}/>;
    } else {
      return <Settings closePanel={() => this.handleSettingsToggle()}/>;
    }
  }

  render() {
    if (this.state.open) {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}>
        {this.renderBody()}
      </Panel>;
    } else {
      return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}/>;
    }
  }
}
Menu.propTypes = {};

export default Menu;
