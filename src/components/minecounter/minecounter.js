import React, { PureComponent } from 'react';

import './minecounter.css'

class MineCounter extends PureComponent {

    render() {
        return <span className="minecounter">{this.props.minesRemaining}</span>
    }
}

export default MineCounter;