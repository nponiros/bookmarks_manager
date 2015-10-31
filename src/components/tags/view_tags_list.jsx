import React from 'react';

import TagsStore from '../../stores/tags_store.js';
import ViewTag from './view_tag.js';

import {CHANGE} from '../../constants/tags_constants.js';

class ViewTagsList extends React.Component {
  constructor() {
    super();
    this.state = {
      availableTags: []
    };
    TagsStore.getAllTags();
  }

  componentDidMount() {
    TagsStore.addListener(CHANGE, (data) => this.onChange(data));
  }

  componentWillUnmount() {
    TagsStore.removeListener(CHANGE, this.onChange);
  }

  onChange(availableTags) {
    this.setState({availableTags});
  }

  renderTags() {
    const selectedTags = this.state.availableTags.filter((tag) => this.props.tagIds.indexOf(tag._id) !== -1);
    const tags = selectedTags.map((tag) => {
      return <li key={tag._id}>
        <ViewTag name={tag.name}/>
      </li>;
    });
    return tags;
  }

  render() {
    return <div>
      <strong>Tags:</strong>
      <ul className="list-inline">
        {this.renderTags()}
      </ul>
    </div>;
  }
}
ViewTagsList.propTypes = {
  tagIds: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default ViewTagsList;
