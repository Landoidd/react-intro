
/*
Conditonal Rendering
1. Allows you to control what gets rendered in application based on certain conditions
2. Can show, hide or change components
*/
import propTypes from 'prop-types'

const UserGreeting = (props) => {
    //Generate messages
    const loggedIn = `Welcome ${props.username}`;
    const isNotLoggedIn = "User is not logged in";
    const welcomeMessage = <h2 className='welcomeMessage'>{loggedIn}</h2> 
    const loginPrompt = <h2 className='loginPrompt'>{isNotLoggedIn}</h2> 

    //Return body based on props passed in
    return(
        props.isLoggedIn ? welcomeMessage :loginPrompt
    )
}

//Define props here
UserGreeting.propTypes = {
    username: propTypes.string,
    isLoggedIn: propTypes.bool,
}
//Default props if non passed
UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}
export default UserGreeting