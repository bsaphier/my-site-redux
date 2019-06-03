import { presets, spring } from 'react-motion';

const { stiff, wobbly, gentle } = presets;


export const greetingMotion = {
    initial: {
        top:    -42,
        title0: 21,
        title1: 13,
        title2: 8,
        title3: 5,
        title4: 3,
        title5: 2,
        title6: 1,
        title7: 1
    },
    exit: {
        top:    spring(-42, stiff),
        title0: spring(3, wobbly),
        title1: spring(2, wobbly),
        title2: spring(8, wobbly),
        title3: spring(2, wobbly),
        title4: spring(1, wobbly),
        title5: spring(2, wobbly),
        title6: spring(1, wobbly),
        title7: spring(2, wobbly)
    },
    enter: {
        top:    spring(42, stiff),
        title0: spring(0.65, wobbly),
        title1: spring(0.92, gentle),
        title2: spring(1.45, wobbly),
        title3: spring(-0.83, gentle),
        title4: spring(-0.02, gentle),
        title5: spring(-0.05, gentle),
        title6: spring(-0.015, gentle),
        title7: spring(0.4, gentle)
    }
};

export const btnHoverMotion = {
    scale: {
        initial: 1,
        mouseOver: spring(1.3, wobbly),
        mouseLeave: spring(1, gentle)
    },
    translate: {
        initial: 0,
        mouseOver: spring(-13, stiff),
        mouseLeave: spring(0, gentle)
    },
    rotate: {
        initial: spring(0, wobbly),
        flipped: spring(180, wobbly)
    }
};
