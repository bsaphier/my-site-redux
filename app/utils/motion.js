import { presets, spring } from 'react-motion';

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
        top:    spring(-42, presets.stiff),
        title0: spring(3, presets.wobbly),
        title1: spring(2, presets.wobbly),
        title2: spring(8, presets.wobbly),
        title3: spring(2, presets.wobbly),
        title4: spring(1, presets.wobbly),
        title5: spring(2, presets.wobbly),
        title6: spring(1, presets.wobbly),
        title7: spring(2, presets.wobbly)
    },
    enter: {
        top:    spring(42, presets.stiff),
        title0: spring(0.66, presets.wobbly),
        title1: spring(0.92, presets.gentle),
        title2: spring(1.45, presets.wobbly),
        title3: spring(-0.83, presets.gentle),
        title4: spring(-0.02, presets.gentle),
        title5: spring(-0.05, presets.gentle),
        title6: spring(-0.015, presets.gentle),
        title7: spring(0.4, presets.gentle)
    }
};

export const btnHoverMotion = {
    initial: {},
    mouseOver: {},
    mouseLeave: {}
}
