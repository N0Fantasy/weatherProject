import React from 'react'

import './CardList.css'

import { Card } from '../Card/Card'
import { withGlobalState } from '../hocs/withGlobalState'

class CardListNoState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderBy: 'asc',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange = (event) => {
    this.setState({ orderBy: event.target.value })
  }

  render() {
    let sortedCities = this.props.state.cities.sort()
    
    if (this.state.orderBy === 'desc')
      sortedCities.reverse()
    return (
      <>
        <div className="Select">
          <select onChange={this.handleOnChange} value={this.state.orderBy}>
            <option value='asc'>By name asc</option>
            <option value='desc'>By name desc</option>
          </select>
        </div>
        <div className='cardList'>
          {
            sortedCities.map(city => <Card key={city} city={city}/>)
          }        
        </div>
      </>
    )
  }
}

export const CardList = withGlobalState(CardListNoState)