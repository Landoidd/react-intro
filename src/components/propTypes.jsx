/*
props:
1. imported and used as below
2. Can set default props
3. Are read-only properties that are shared between components
4. A parent component (App) can send data to child component (Student)
5. syntax: <Component key=value />
*/

import propTypes from 'prop-types'

const Student = (props) => {

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

export default Student;