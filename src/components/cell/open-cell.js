import React, { PureComponent } from 'react';
import { Cell } from './cell.js';
import './cell.css'

export class OpenCell extends PureComponent {

    render() {

    	const props = this.props;
        let className = 'cell__open ';
       
        if (props.exploded) {
        	className += 'cell__mine cell__mine--exploded'
        }
        else if (props.hasMine) {
            className += 'cell__mine ';
        }
        else if (this.props.minesAround > 0) {
            className += 'cell__open--mine-' + this.props.minesAround;
        }

        return <Cell className={className} {...this.props}></Cell>
    }
}