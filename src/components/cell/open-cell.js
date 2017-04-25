import React, { PureComponent } from 'react';
import { Cell } from './cell.js';
import './cell.css'

export class OpenCell extends PureComponent {

    render() {

    	const props = this.props;

        let icon = '',
        	className = 'cell__open ';
       
        if (props.exploded) {
        	icon = 'mine'
        	className += 'cell__mine--exploded';
        }
        else if (this.props.mistake) {
            icon = 'mine-mistake';
        } 
        else if (props.hasMine) {
            icon = 'mine';

        }
        else if (this.props.minesAround > 0) {
            icon = 'mine-' + this.props.minesAround;
        }

        return <Cell icon={icon} className={className} {...this.props}></Cell>
    }
}