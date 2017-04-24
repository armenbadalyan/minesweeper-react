import React, { PureComponent } from 'react';
import LCD from '../lcd/lcd.js';

import './minecounter.css'

class MineCounter extends PureComponent {

    render() {
        return <LCD className="minecounter" value={this.props.minesRemaining} />;
    }
}

export default MineCounter;