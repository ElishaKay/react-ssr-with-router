import React, {Component} from 'react'
const Quill = typeof window === 'object' ? require('react-quill') : () => false;

export default class FormHtmlEditor extends Component {
  constructor(props) {
    super(props)
    console.log('loaded FormHtmlEditor')
  }

  render() {
    console.log('loaded FormHtmlEditor')
    const Quill = this.quill
    if (Quill) {
      return (
        <Quill
          onChange={this.props.onChange}
          theme="bubble"
          value={this.props.value}
        />
      )
    } else {
      return null
    }
  }
}