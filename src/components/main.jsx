import React from 'react'
import request from 'superagent'
import _ from 'lodash'
import UserRow from './userRow'
import Icon from './icon'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Main'
        this.state = {
        	orderBy: 'alltime',
            order: 'down'
        }
        this.urls = {
            recent: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
            alltime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
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

    // alltime
    // img
    // lastUpdate
    // recent
    // username

    handleClick(type) {
        const { orderBy, order } = this.state
        if (type === orderBy) {
            this.setState({order: order === 'down' ? 'up' : 'down'})
        } else {
            if (type === 'alltime' || type === 'recent') {   
                this.getResults(type)    
            }
            this.setState({orderBy: type, order: 'down'})
        } 
    }

    componentDidMount() {
    	this.getResults('alltime')
    }

    render() { 
        const { orderBy, order, userList } = this.state
        const sortOrder = order === 'down' ? 'desc' : 'asc'
        const arrowIcon = type => {
            return orderBy === type ? <Icon type={`arrow-${this.state.order}`} /> : null
        }

        return <div className="main">
        	<div className="user-row user-header">
        		<div className="user-cell" onClick={()=>{this.handleClick('username')}}>Username {arrowIcon('username')}</div>
        		<div className="user-cell" onClick={()=>{this.handleClick('alltime')}}>All-Time points {arrowIcon('alltime')}</div>
        		<div className="user-cell" onClick={()=>{this.handleClick('recent')}}>Points in last 30 days {arrowIcon('recent')}</div>
        		<div className="user-cell" onClick={()=>{this.handleClick('lastUpdate')}}>Last Updated {arrowIcon('lastUpdate')}</div>
        	</div>
        	{_(userList).orderBy(orderBy, sortOrder).map(user => {
        		return (<UserRow key={user.username} user={user}/>)
        	}).value()}
        </div>;
    }
}

export default Main