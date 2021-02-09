import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
            <header className = 'header'>
                <h1 >{props.title}</h1>
                <Button text = {props.button} color = 'red'/>
            </header>
    )
}

Header.defaultProps = {
    title: 'TODOODA', 
    Button: 'testbutton'
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}
// css in js
// const headingStyle = {
//     color: 'white', 
//     backgroundColor: 'pink'
// }

export default Header