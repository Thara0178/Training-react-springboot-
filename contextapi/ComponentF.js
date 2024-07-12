import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
              (username) = () => <h1>Hii {username}</h1>
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF;