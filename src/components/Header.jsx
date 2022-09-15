import PropTypes from 'prop-types'

function Header({text, bgColor, textColor,textAlign}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: textAlign
    }
  return (
    <header style={headerStyles}>
        <div className="container" ></div>
        <h1 style={{textAlign:'center'}}>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
    textAlign: 'center'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header