import React from 'react';

class UserRow extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'UserRow'
        this.state = {}
    }
    render() {
    	const user = this.props.user

    	// alltime
		// img
		// lastUpdate
		// recent
		// username


        return <div className="user-row">
        	<div className="user-cell username">
                <div className="image"><img src={user.img}/></div>
        		{user.username}
        	</div>
        	<div className="user-cell">{user.alltime}</div>
        	<div className="user-cell">{user.recent}</div>
        	<div className="user-cell">{user.lastUpdate}</div>
        </div>;
    }
}

export default UserRow;
