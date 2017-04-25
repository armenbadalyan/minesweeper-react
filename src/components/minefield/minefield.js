import React, { PureComponent } from 'react';
import { OpenCell, ClosedCell } from '../cell';
import './minefield.css'

class Minefield extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            cellWidth: 0,
            cellHeight: 0,
            fieldHeight: 0
        }

        this.onResize = this.onResize.bind(this);
    }


    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        this.calculateCellDimensions(this.minefield.clientWidth, this.minefield.clientHeight, this.props.field.rows, this.props.field.cols);
    }

    componentWillUnmout() {
        window.removeEventListener('resize', this.onResize);
    }

    componentWillReceiveProps(nextProps) {
        this.calculateCellDimensions(this.minefield.clientWidth, this.minefield.clientHeight, nextProps.field.rows, nextProps.field.cols);
    }

    onResize() {
        this.calculateCellDimensions(this.minefield.clientWidth, this.minefield.clientHeight, this.props.field.rows, this.props.field.cols);
    }

    calculateCellDimensions(fieldWidth, fieldHeight, rows, cols) {
        let cellSize = fieldWidth / cols;
        this.setState({
        	cellWidth: cellSize,
            cellHeight: cellSize,
            fieldHeight: cellSize * rows
        })
    }

    render() {

    	let cells = null,
    		fieldStyles = {
    			height: this.state.fieldHeight + 'px'
    		};

        if (this.state.cellWidth && this.state.cellHeight) {
            cells = Object.keys(this.props.field.cells).map((id) => {
                const cell = this.props.field.cells[id];
                if (cell.closed) {
                    return <ClosedCell
                        key={cell.id}
                        cellId={cell.id}
                        row={cell.row}
                        col={cell.col}
                        flagged={cell.flagged}                        
                        width={this.state.cellWidth}
                        height={this.state.cellHeight}
                        onCellClick={this.props.onCellClick} onCellAltClick={this.props.onCellAltClick} />
                } else {
                    return <OpenCell
                        key={cell.id}
                        cellId={cell.id}
                        row={cell.row}
                        col={cell.col}
                        exploded={cell.exploded}       
                        mistake={cell.mistake}                 
                        minesAround={cell.minesAround}
                        hasMine={cell.mine}
                        width={this.state.cellWidth}
                        height={this.state.cellHeight}
                        onCellClick={this.props.onCellClick} onCellAltClick={this.props.onCellAltClick} />
                }
            });
        }

        return <div className="game__border">
        			<div ref={(div) => {
                	this.minefield = div
            		}} style={fieldStyles} className="minefield">{cells}</div>
            	</div>;

        
    }
}

export default Minefield;