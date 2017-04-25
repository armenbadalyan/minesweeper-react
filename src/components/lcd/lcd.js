import React, { PureComponent } from 'react';
import Icon from '../shared/icon.js';
import './lcd.css';

class LCD extends PureComponent {
    render() {

    	let d1,
    		d2,
    		d3,
    		currentDigit,
    		value = this.props.value;

    	currentDigit = Math.floor(value / 100);
    	d1 = `d-${currentDigit}`;

    	value -= currentDigit*100;
    	currentDigit = Math.floor(value / 10);
    	d2 = `d-${currentDigit}`;

    	value -= currentDigit*10;
    	d3 = `d-${value}`;

        return <span className="lcd">
                <Icon className="digit" asset={d1} />
	        	<Icon className="digit" asset={d2} />
                <Icon className="digit" asset={d3} />	        	
        	</span>
    }
}

export default LCD;