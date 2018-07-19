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

    hover = () => {
        this.setState({
            scale: btnHoverMotion.scale.mouseOver,
            translate: btnHoverMotion.translate.mouseOver
        });
    }

    leave = () => {
        this.setState({
            scale: btnHoverMotion.scale.mouseLeave,
            translate: btnHoverMotion.translate.mouseLeave
        });
    }

    render() {
        const { content, display, onClick: handleClick } = this.props;
        return (
            <Motion style={this.state}>
                {({ scale, translate }) => (
                    <div
                        className={display ? s.greetingFooter : `${s.greetingFooter} ${s.hide}`}
                        onMouseOver={this.hover}
                        onMouseLeave={this.leave}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            this.leave();
                            handleClick();
                        }}
                        onTouchStart={(e) => {
                            e.preventDefault();
                            this.hover();
                        }}
                        onTouchCancel={(e) => {
                            e.preventDefault();
                            this.leave();
                        }}
                        onTouchEnd={(e) => {
                            e.preventDefault();
                            this.leave();
                            handleClick();
                        }}
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
