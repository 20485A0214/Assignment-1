import './index.css'

const ListHistory = props => {
  const {initialHistoryList, deleteLists} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryList

  const onDeleteList = () => {
    deleteLists(id)
  }
  return (
    <li className="container">
      <div className="list-container">
        <p className="time-paragraph">{timeAccessed}</p>
        <img src={logoUrl} alt="logo" className="logo" />
        <p className="title-paragraph">{title}</p>
        <p className="domine-paragraph">{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
          onClick={onDeleteList}
        />
      </button>
    </li>
  )
}

export default ListHistory
