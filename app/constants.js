/* LAYOUT ACTION-TYPES */
export const OPEN_BURGER = 'OPEN_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';
export const ON_SCROLL = 'ON_SCROLL';
export const RESIZE = 'RESIZE';


/* APP-STATE ACTION-TYPES */
export const DATA_LOADED = 'DATA_LOADED';
export const FONTS_LOADED = 'FONTS_LOADED';
export const HIDE_GREETING = 'HIDE_GREETING';
export const SHOW_GREETING = 'SHOW_GREETING';
export const LOAD_COMPLETE = 'LOAD_COMPLETE';

/* GREETING ACTION-TYPES */
export const TOGGLE_GREETING = 'TOGGLE_GREETING';

/* SOUND ACTION-TYPES */
export const DRONE_ON = 'DRONE_ON';
export const DRONE_OFF = 'DRONE_OFF';


/* WEB AUDIO */
export const ROOT_IN_HZ = 220;
export const BLUES_STEPS = [1, (6 / 5), (4 / 3), (45 / 32), (3 / 2), (9 / 5), 2];
export const OSC_TYPES = {
    sine:     'sine',
    square:   'square',
    triangle: 'triangle',
    sawtooth: 'sawtooth'
};
export const FILTER_TYPES = {
    lowpass:  'lowpass',
    highpass: 'highpass',
    bandpass: 'bandpass'
};
