import './cheese-list.css'
import React from 'react'
import { connect } from 'react-redux'
import { fetchCheeses } from '../actions'

class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }

  render() {
    return (
      <ul>
      {this.props.cheeses.map(c => <li key={c}>{c}</li>)}
    </ul>
    )
  }
}

const mapPropsToState = state => ({
  cheeses: state.cheeses
})

export default connect(mapPropsToState)(CheeseList)
