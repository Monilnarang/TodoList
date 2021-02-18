import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = (props) => {
    const location = useLocation()
    return (
            <header className = 'header'>
                <h1 >{props.title}</h1>
                {location.pathname === '/' && <Button 
                 text={props.showAdd ? 'Close' : 'Add'}
                 color={props.showAdd ? 'red' : 'green'}
                 onClick={props.onClick} />}
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