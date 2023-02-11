import './button.styles.scss'

const Button = ({ content, btnType, ...otherProps }) => {
  return (
    <button className={`${btnType || ''} button-container`} {...otherProps}>
      {content}
    </button>
  )
}

export default Button
