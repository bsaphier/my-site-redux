import { BLUES_STEPS, ROOT_IN_HZ, OSC_TYPES, FILTER_TYPES } from '../constants';


const OSC_TYPE = OSC_TYPES.triangle;
const FILTER_TYPE = FILTER_TYPES.bandpass;


export class Synth {
    constructor(context) {
        this.context = context;
        this.gainNode = this.context.createGain();
        this.masterGain = this.context.createGain();
    }

    setupOsc(oscType) {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = oscType;
    }

    setupFilter(filterType, value, qValue) {
        this.filter = this.context.createBiquadFilter();
        this.filter.frequency.value = value;
        this.filter.type = filterType;
        this.filter.Q.value = qValue;
    }

    setupOutput() {
        this.masterGain.gain.value = 0.90;
        this.masterGain.connect(this.context.destination);
        this.gainNode.connect(this.masterGain);
    }


    setup() {
        this.setupOutput();
        this.setupOsc(OSC_TYPE);
        this.setupFilter(FILTER_TYPE, 1760, 0.162);
        this.oscillator.connect(this.filter);
        this.filter.connect(this.gainNode);
    }

    play(value) {
        this.setup();
        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.02);
        this.oscillator.start(this.context.currentTime + 0.001);
    }

    release() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.162);
    }

    kill() {
        this.oscillator.stop(this.context.currentTime + 0.3);
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                this[i] = undefined;
            } else if (this.prototype.hasOwnProperty(i)) {
                this.prototype[i] = undefined;
            }
        }
    }
}


export const soundCreator = ({ noteInHz }) => aCtx => {
    let sound = new Synth(aCtx);
    sound.play(noteInHz);
    sound.release();
    setTimeout(() => {
        sound.kill();
        sound = undefined;
    }, 500);
};


export const scaleFactory = (scale, tonic) => scale.map((step, idx) => (
    {
        step: idx + 1,
        noteInHz: tonic * step
    }
));


export const bluesScale = scaleFactory(BLUES_STEPS, ROOT_IN_HZ);
