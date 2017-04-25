import React, { PureComponent } from 'react';
import Timer from '../timer/timer.js';
import MineCounter from '../minecounter/minecounter.js';
import Icon from '../shared/icon.js';
import './statboard.css';

class StatBoard extends PureComponent {    

    render() {

        let buttonAsset,
            minesRemaining = this.props.game.totalMines - this.props.flaggedMines;

        switch (this.props.game.status) {
	        case 'won':
	            buttonAsset = 'face-win';
	            break;
	        case 'lost':
	            buttonAsset = 'face-lost';
	            break;
	        default:
	            buttonAsset = 'face-alive';
        }

        return <div className="statboard game__border">
			<Timer startedAt={this.props.game.startedAt} status={this.props.game.status} />
			<div className="start-button" onClick={this.props.onGameButtonClick}>
				<Icon className="start-button__icon"  asset={buttonAsset}  />
			</div>			
			<MineCounter minesRemaining={minesRemaining} />
		</div>
    }
}

export default StatBoard;