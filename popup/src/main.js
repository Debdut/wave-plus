import { Component } from 'preact'

class Main extends Component {
  constructor (props) {
    this.state = {}
    this.get()
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

  updateData = async () => {
    fetchNSave(this.state.sheet_discharge)
    fetchNSave(this.state.sheet_doc)
  }

  render (props, state) {
    return (
      <div>
        <a href={state.sheet_doc}>Edit Doctor Details</a>
        <a href={state.sheet_discharge}>Edit Discharge Medicine</a>
        <br/>
        <button onClick={this.updateData}>Update Data</button>
        <button onClick={props.toggle}>Edit Data Source</button>
      </div>
    )
  }
}

export default Main

function fetchNSave (url, key) {
  if (url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const store = {}
        store[key] = data
        chrome.storage.local.set(store, () => console.log(`[Wave Plus] Saved ${key}`))
      })
      .catch(e => console.error(e.message))
  }
}