import React, { Component } from 'react';
import { Motion } from 'react-motion';
import { btnHoverMotion } from '../utils';
import s from './greeting-footer.scss';



class GreetingFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scale: btnHoverMotion.scale.initial,
            translate: btnHoverMotion.translate.initial
        };
    }

    handleMouseOver = () => {
        this.setState({
            scale: btnHoverMotion.scale.mouseOver,
            translate: btnHoverMotion.translate.mouseOver
        });
    }

    handleMouseLeave = () => {
        this.setState({
            scale: btnHoverMotion.scale.mouseLeave,
            translate: btnHoverMotion.translate.mouseLeave
        });
    }

    handleClick = (e) => {
        e.currentTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    render() {
        const { content, display } = this.props;
        return (
            <Motion style={this.state}>
                {({ scale, translate }) => (
                    <div
                        className={display ? s.greetingFooter : `${s.greetingFooter} ${s.hide}`}
                        onMouseOver={this.handleMouseOver}
                        onMouseLeave={this.handleMouseLeave}
                        onMouseUp={this.handleMouseOver}
                        onMouseDown={this.handleMouseLeave}
                        onClick={this.handleClick}
                        style={{transform: `
                            scale(${scale}) translateY(${translate}%)
                        `}}>
                        {content ? content : (
                            <div className={s.contentWrap}>
                                <div className={s.pointDown}>
                                    <div className={s.pointDown}>
                                        <div className={s.pointDown} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Motion>
        );
    }
}


export default GreetingFooter;
