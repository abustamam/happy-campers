import React from 'react'

class Icon extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Icon'
    }

    render() {
    	const { type, style = {} } = this.props
    	const { width = 24, height = 24, fill="black" } = style

    	const renderedIcon = icon => {
    		switch (icon) {
    			case 'arrow-down':
    				return <path d="M7 10l5 5 5-5z"/>
				case 'arrow-up':
    				return <path d="M7 14l5-5 5 5z"/>
				case 'circle':
				default:
					return <circle cx="12px" cy="12px" r="8px"/>
    		}
    	}

        return <svg width={width} height={height} fill={fill}>
        	{renderedIcon(type)}
        </svg>
    }
}

export default Icon