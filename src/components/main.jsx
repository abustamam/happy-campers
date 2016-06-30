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
        	sortBy: 'username',
            type: 'allTime'
        }
        this.urls = {
            recent: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
            allTime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
        }
    }

    getResults(type) {
    	request
    		.get(this.urls[type])
    		.end((err, res) => {
    			if (err || !res.ok) {
    				alert('Oh no! error');
    			} else {
                    this.setState({userList: res.body})
    			}
    		})
    }

    sortBy(key) {
        
    }

    // alltime
    // img
    // lastUpdate
    // recent
    // username

    handleClick(type) {
        if (type === this.state.type) {

        } else {
            this.setState({type, sortBy: 'username', desc: true})
            this.getResults(type)
        }
    }

    componentDidMount() {
    	this.getResults()
    }

    render() {
        return <div className="main">
        	<div className="user-row user-header">
        		<div className="user-cell">Username</div>
        		<div className="user-cell" onClick={()=>{this.handleClick('allTime')}}>All-Time points</div>
        		<div className="user-cell" onClick={()=>{this.handleClick('recent')}}>Points in last 30 days</div>
        		<div className="user-cell">Last Updated</div>
        	</div>
        	{_.map(this.state.userList, (user) => {
        		return (<UserRow key={user.username} user={user}/>)
        	})}
        </div>;
    }
}

export default Main