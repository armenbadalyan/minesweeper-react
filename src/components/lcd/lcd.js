import React, { PureComponent } from 'react';
import './lcd.css'

export class LCD extends PureComponent {   


    render() {

    	let d1,
    		d2,
    		d3,
    		currentDigit,
    		value = this.props.value;

    	d1 = d2 = d3 = 'digit ';

    	currentDigit = Math.floor(value / 100);
    	d1 += `digit__${currentDigit}`;

    	value -= currentDigit*100;
    	currentDigit = Math.floor(value / 10);
    	d2 += `digit__${currentDigit}`;

    	value -= currentDigit*10;
    	d3 += `digit__${value}`;

        return <span className="lcd">
	        	<div className={d1}></div>
	        	<div className={d2}></div>
	        	<div className={d3}></div>
        	</span>
    }
}

export default LCD;