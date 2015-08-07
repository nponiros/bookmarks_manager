import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Panel} from 'react-bootstrap';

// TODO edit button
// TODO delete button
class Bookmark extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  renderTitle() {
    return <Row>
      <Col xs={12} className="h3" componentClass="h2">
        <Col xs={10} componentClass="span">
          {this.props.data.title}
        </Col>
      </Col>
    </Row>;
  }

  render() {
    return <Panel header={this.renderTitle()} bsStyle="primary" collapsible expanded={this.state.open}
                  onSelect={() => this.handleSelect()}>
      <Row>
        <Col sm={6} smPush={6}>
          <p><strong>Description</strong> {this.props.data.description}</p>
        </Col>
        <Col sm={6} smPull={6}>
          <p><strong>Url</strong> {this.props.data.url}</p>

          <p><strong>Author</strong> {this.props.data.author}</p>

          <p><strong>Date</strong> {this.props.data.dateWritten}</p>
        </Col>
      </Row>
    </Panel>;
  }
}

export default Bookmark;
