import React, { PureComponent } from 'react';
import './cell.css';


export class Cell extends PureComponent {

	constructor(props) {
		super(props);
		
		
		this.handleClick = this.handleClick.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
	}

	handleClick() {
		if (this.props.onCellClick) {
			this.props.onCellClick(this.props.cellId);
		}		
	}

	handleContextMenu(e) {
		e.preventDefault();
		if (this.props.onCellAltClick) {
			this.props.onCellAltClick(this.props.cellId);
		}
	}

	render() {
		let className = this.props.className || '',
			style = {
				width: this.props.width,
				height: this.props.height,
				left: this.props.col * this.props.width + 'px',
				top: this.props.row * this.props.height + 'px'
			}
			
		return <div className={'cell ' + className} style={style} onClick={this.handleClick} onContextMenu={this.handleContextMenu}></div>
	}	
}