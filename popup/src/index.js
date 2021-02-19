import { Component } from 'preact'

import Main from './main'
import DataSource from './data-source'

import './style'

class App extends Component {
	state = {
		edit: false
	}

	toggle = () => {
		this.setState(state => ({ edit: !state.edit }))
	}

	render (props, { edit }) {
		if (edit) {
			return <DataSource />
		}

		return <Main />
	}
}