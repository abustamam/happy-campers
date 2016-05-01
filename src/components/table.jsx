import React from 'react'
import request from 'superagent'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Table';
    }
    render() {
        return <div className="table">
        	Table
        </div>;
    }
}

export default Table