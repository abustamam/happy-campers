import React from 'react'
import request from 'superagent'
import _ from 'lodash'
import UserRow from './userRow'
import moment from 'moment'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Main'
        this.state = {
        	sortBy: 'username'
        }
    }

    getResults(url, cb) {
    	request
    		.get(url)
    		.end(function(err, res){
    			if (err || !res.ok) {
    				alert('Oh no! error');
    			} else {
    				cb(res.body)
    			}
    		})
    }

    sortBy(key) {
        
    }

    componentDidMount() {
    	// urls
    	// https://fcctop100.herokuapp.com/api/fccusers/top/recent
    	// https://fcctop100.herokuapp.com/api/fccusers/top/alltime

    	const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    	const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

    	this.getResults(recentUrl, (res) => this.setState({recents: res}))
    	this.getResults(allTimeUrl, (res) => this.setState({allTimes: res}))
    }

    render() {

        return <div className="main">
        	<div className="user-row user-header">
        		<div className="user-cell">Username</div>
        		<div className="user-cell">All-Time points</div>
        		<div className="user-cell">Points in last 30 days</div>
        		<div className="user-cell">Last Updated</div>
        	</div>
        	{_.map(this.state.recents, (user) => {
        		return (<UserRow key={user.username} user={user}/>)
        	})}
        </div>;
    }
}

export default Main