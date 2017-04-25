import React, { PureComponent } from 'react';

class Icon extends PureComponent {

	render() {
		return <svg className={this.props.className} width="100%" height="100%">
            <use xlinkHref={'#' + this.props.asset} />
        </svg>
	}
}

export default Icon;