import React, { PureComponent } from 'react';
import { Cell } from './';
import './cell.css'


export class ClosedCell extends PureComponent {
    render() {

        let icon = '';

        if (this.props.flagged) {
            icon = 'flag';
        }

        return <Cell icon={icon} {...this.props}></Cell>;
    }
}