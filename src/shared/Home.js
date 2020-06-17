import React from 'react'
import FormHtmlEditor from './FormHtmlEditor'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
  	console.log('value:',value);
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
      	<div>
	      Select a Language
	    </div>
      
      	<FormHtmlEditor />

      </div>
    )
  }
}

export default Home;