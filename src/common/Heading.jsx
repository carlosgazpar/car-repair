import '../styles/common/heading.scss'
const Heading = ({ text, needIcon }) => {
  return (
    <div className="heading">
      {
        needIcon && <span></span>
      }
      <h2>{text}</h2>
    </div>

  )
}

export default Heading