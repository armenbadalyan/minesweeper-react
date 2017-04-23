import React, { PureComponent } from 'react';
import Timer from '../timer/timer.js';
import MineCounter from '../minecounter/minecounter.js';
import './statboard.css'

class StatBoard extends PureComponent {    

    render() {

        let className = 'start-button ',
            minesRemaining = this.props.game.totalMines - this.props.flaggedMines;

        switch (this.props.game.status) {
	        case 'won':
	            className += 'start-button__win';
	            break;
	        case 'lost':
	            className += 'start-button__lost';
	            break;
	        default:
	            className += 'start-button__alive';
        }

        return <div className="statboard game__border">
			<Timer startedAt={this.props.game.startedAt} status={this.props.game.status} />
			<div className={className} onClick={this.props.onGameButtonClick}></div>
			<MineCounter minesRemaining={minesRemaining} />
		</div>
    }
}

export default StatBoard;