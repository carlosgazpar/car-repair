import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RenovationItem = ({icon, title, text}) => {
  return (
    <div className="renovation-cards-item">
      <div className='renovation-item-icon'>
        <FontAwesomeIcon icon={icon} color='white' size='lg' />
      </div>
      <div className="renovation-item-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default RenovationItem