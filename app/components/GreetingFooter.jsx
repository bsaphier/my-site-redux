import React from 'react';
import s from './greeting-footer.scss';


const GreetingFooter = (props) => {
    const { content, display } = props;
    return (
        <div className={display ? s.greetingFooter : `${s.greetingFooter} ${s.hide}`}>
            { content ? content : (
                <div className={s.contentWrap}>
                    <div className={s.pointDown}>
                        <div className={s.pointDown}>
                            <div className={s.pointDown} />
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};


export default GreetingFooter;