import React from 'react'
import {Link} from 'react-router'
import VerblingStore from '../stores/VerblingStore'
import VerblingActions from '../actions/VerblingActions'

class VerblingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = VerblingStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    VerblingStore.listen(this.onChange);
  }

  componentWillUnmount() {
    VerblingStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div>
        Add Component
      </div>
    );
  }
}

export default VerblingWidget;