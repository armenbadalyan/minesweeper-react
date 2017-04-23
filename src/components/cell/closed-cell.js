import React, { PureComponent } from 'react';
import { Cell } from './';
import './cell.css'


export class ClosedCell extends PureComponent {
	render() {

		let className = '';

		if (this.props.mistake) {
        	className = 'cell__mine cell__mine--mistake';
        }
        else if (this.props.flagged) {
        	className = 'cell__flagged';
        }
		
		return <Cell className={className} {...this.props}></Cell>;
	}
}