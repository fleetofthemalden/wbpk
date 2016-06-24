import React from 'react'
import {Link} from 'react-router'
import VerblingStore from '../stores/VerblingStore'
import VerblingActions from '../actions/VerblingActions'

import AddComponent from './AddComponent.jsx'

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
    let DisplayItems = (
      <div>Nothing right now</div>
    )

    let AddComponent = '';
    let AddButton = (
      <button onClick='this.displayAddComponent'>Add</button>
    )

    let ToggleButtons = (
      <div className='toggle-buttons'>
        <div classname='toggle-button'>
          <button>Open All</button>
        </div>
        <div classname='toggle-button'>
          <button>Close All</button>
        </div>
        <div classname='toggle-button'>
          <button>Toggle All</button>
        </div>
      </div>
    )

    if(this.state.showAddComponent){
      AddComponent = (
        <AddComponent />
      )
      AddButton = (
        <button onClick='this.hideAddComponent'>Cancel</button>
      )
      ToggleButtons = (
        <div className='toggle-buttons'>
          <div classname='toggle-button'>
            <button>Do Something</button>
          </div>
          <div classname='toggle-button'>
            <button>Clear Item</button>
          </div>
          <div classname='toggle-button'>
            <button>Save Item</button>
          </div>
        </div>
      )
    }

    let ButtonRow = (
      <div className='button-row'>
        {ToggleButtons}
        <div className='add-cancel-button'>
        </div>
      </div>
    )

    return (
      <div className='verbling-widget'>
        <h1 className='header'>Verbling Challenge</h1>
        <div className='search-box'>
          <div className='search-input'>
            <input>
            </input>
          </div>
          <div className='search-icon-div'>
            <span className='search-icon'></span>
          </div>
        </div>
        <div className='display-box'>
          {DisplayItems}
        </div>
        <div>
          {ButtonRow}
        </div>
        {AddComponent}
      </div>
    );
  }

  displayAddComponent(){
    this.setState({
      showAddComponent: true
    })
  }

  hideAddComponent(){
    this.setState({
      showAddComponent: false
    })
  }
}

export default VerblingWidget;