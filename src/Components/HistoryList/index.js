import {Component} from 'react'

import ListHistory from '../ListHistory/index'

import './index.css'

class HistoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteUsers: props.initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {deleteUsers} = this.props
    const filterUserData = deleteUsers.filter(eachUser => eachUser.id !== id)
    this.setState({
      deleteUsers: filterUserData,
    })
  }

  render() {
    const {searchInput, deleteUsers} = this.state
    const searchResults = deleteUsers.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search"
          />
          <input
            type="search"
            placeholder="Search history"
            className="input"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <div className="container">
          <ul className="unlist-container">
            {searchResults.map(eachList => (
              <ListHistory
                key={eachList.id}
                initialHistoryList={eachList}
                deleteLists={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryList
