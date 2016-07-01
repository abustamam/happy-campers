import React from 'react'
import moment from 'moment'

class UserRow extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'UserRow'
        this.state = {}
    }
    render() {
    	const { user } = this.props 
        const { username, alltime, recent, lastUpdate } = user

        return <div className="user-row">
        	<div className="user-cell username">
                <div className="image"><img src={user.img}/></div>
        		{username}
        	</div>
        	<div className="user-cell">{alltime}</div>
        	<div className="user-cell">{recent}</div>
        	<div className="user-cell">{moment(lastUpdate).format('lll')}</div>
        </div>;
    }
}

export default UserRow