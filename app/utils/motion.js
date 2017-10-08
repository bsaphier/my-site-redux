import { presets, spring } from 'react-motion';

export const greeting = {
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
        title0: spring(1, presets.wobbly),
        title1: spring(1, presets.wobbly),
        title2: spring(1, presets.wobbly),
        title3: spring(1, presets.wobbly),
        title4: spring(1, presets.wobbly),
        title5: spring(1, presets.wobbly),
        title6: spring(1, presets.wobbly),
        title7: spring(1, presets.wobbly)
    },
    enter: {
        top:    spring(42, presets.stiff),
        title0: spring(-0.055, presets.wobbly),
        title1: spring(0.175, presets.gentle),
        title2: spring(-0.06, presets.wobbly),
        title3: spring(-0.08, presets.gentle),
        title4: spring(-0.048, presets.gentle),
        title5: spring(-0.1, presets.gentle),
        title6: spring(-0.091, presets.gentle),
        title7: spring(-0.1, presets.gentle)
    }
};

export const btnHoverFx = {
    initial: {},
    mouseOver: {},
    mouseLeave: {}
}
