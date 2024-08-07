import './Title.css';
import PropTypes from 'prop-types';
const Title = ({title}) => {

  
  return (
    <div>
      <h1>{ title }</h1>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

Title.defaultProps = {
  title: "Soy un titulo"
}

export default Title
