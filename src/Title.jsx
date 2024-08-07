import './Title.css';
import PropTypes from 'prop-types';
const Title = ({title}) => {

  
  return (
    <>
      <h1>{ title }</h1>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

Title.defaultProps = {
  title: "Soy un titulo"
}

export default Title
