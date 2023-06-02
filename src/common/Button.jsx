import '../styles/common/button.scss'
const Button = ({ text, link }) =>{
return (
  <a className="button" href={link}>{text}</a>
)
}

export default Button