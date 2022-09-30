import { Component } from 'react';

class Users extends Component {

    constructor(props) {
        // keep track of users state
        // this.state.users variable will be filled by users returned from express app 
        super(props);
        this.state = {
            users: []
        }
    }

    // contact express app (users route) via lifecycle method 
    // invoked immediately, mounted after render
    componentDidMount() {
        // react doesn't know this route so it defaults to the proxy (localhost) and hits server/users.js
        // fetch returns promise resolved into a json response
        // res.json() also returns promise resolved into array containing our users that we assign using setState()
        fetch('/api/users')
            .then(response => response.json()) 
            .then(data => {
                this.setState({users: data});
            });
    }

    render() {
        return (
            <div>
                <h1>User Component</h1>
                <ul>
                    {
                        this.state.users.map(user => (
                            <li>Username: {user.username}, Age: {user.age}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default Users; // js export function, class, anything singular to rest of app