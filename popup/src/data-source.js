import { Component } from 'preact'
import linkState from 'linkstate'

import defaultProps from './data-source-props' 

class DataSource extends Component {
  constructor (props) {
    this.state = {}
    this.get()
  }
 
  save = () => {
    chrome.storage.local.set({ data_source: this.state }, () => console.log('[Wave Plus] Data Sources Saved'))
  }

  get = () => {
    const _ = this
    chrome.storage.local.get(['data_source'], (result) => {
      if (result.data_source) {
        _.setState(result.data_source)
      } else {
        _.setState(defaultProps)
      }
    })
  }

  render (props, state) {
    return (
      <form>
        <button onClick={props.toggle}>Close</button>
        <br/>

        <label>Doctor Details Spreadsheet</label>
        <input type='text' name='sheet_doc' value={state.sheet_doc} onInput={linkState(this, 'sheet_doc')}/>
        <br/>

        <label>Discharge Medicine Spreadsheet</label>
        <input type='text' name='sheet_discharge' value={state.sheet_discharge} onInput={linkState(this, 'sheet_discharge')}/>
        <br/>

        <label>Doctor Details API</label>
        <input type='text' name='api_doc' value={state.api_doc} onInput={linkState(this, 'api_doc')}/>
        <br/>

        <label>Discharge Medicine API</label>
        <input type='text' name='api_discharge' value={state.api_discharge} onInput={linkState(this, 'api_discharge')}/>
        <br/>

        <label>Logo SVG</label>
        <input type='text' name='logo' value={state.logo} onInput={linkState(this, 'logo')}/>
        <br/>

        <button onClick={this.save}>Save</button>
      </form>
    )
  }
}

DataSource.defaultProps = defaultProps

export default DataSource