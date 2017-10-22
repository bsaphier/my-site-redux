import { BLUES_STEPS, ROOT_IN_HZ, OSC_TYPES, FILTER_TYPES } from '../constants';


const OSC1_TYPE = OSC_TYPES.triangle;
const OSC2_TYPE = OSC_TYPES.sawtooth;
const FILTER_TYPE = FILTER_TYPES.bandpass;

export class Drone {
    constructor(context) {
        this.context = context;
        this.gain = this.context.createGain();
        this.osc1level = this.context.createGain();
        this.osc2level = this.context.createGain();
        this.masterGain = this.context.createGain();
        this.masterGain.gain.value = 0.90;
        this.osc1 = this.context.createOscillator();
        this.osc2 = this.context.createOscillator();
        this.osc1.type = OSC_TYPES.triangle;
        this.osc2.type = OSC_TYPES.triangle;
        this.osc1.connect(this.osc1level);
        this.osc2.connect(this.osc2level);
        this.osc1level.connect(this.gain);
        this.osc2level.connect(this.gain);
        this.gain.connect(this.masterGain);
        this.masterGain.connect(this.context.destination);
    }

    attackDecaySustain(lvl, attackDuration, decayDuration, sustain) {
        this.gain.gain.setValueAtTime(0, this.context.currentTime);
        this.gain.gain.linearRampToValueAtTime(lvl, this.context.currentTime + attackDuration);
        this.gain.gain.linearRampToValueAtTime(sustain, this.context.currentTime + attackDuration + decayDuration);
    }

    release(duration) {
        this.gain.gain.exponentialRampToValueAtTime(0, this.context.currentTime + duration);
    }
}


export class Synth {
    constructor(context) {
        this.context = context;
        this.gainNode = this.context.createGain();
        this.levelNode = this.context.createGain();
        this.masterGain = this.context.createGain();
    }

    getTime() {
        return this.context.currentTime;
    }

    setupOsc(oscType1, oscType2) {
        this.oscillator1 = this.context.createOscillator();
        this.oscillator2 = this.context.createOscillator();
        this.oscillator1.type = oscType1;
        this.oscillator2.type = oscType2;
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
        this.setupOsc(OSC1_TYPE, OSC2_TYPE);
        this.setupFilter(FILTER_TYPE, 1760, 0.162);
        this.oscillator1.connect(this.filter);
        this.oscillator2.connect(this.levelNode);
        this.levelNode.connect(this.filter);
        this.filter.connect(this.gainNode);
        this.levelNode.gain.value = 0.025;
    }

    play(value) {
        this.setup();
        this.oscillator1.frequency.value = value;
        this.oscillator2.frequency.value = value * 2.05;
        this.gainNode.gain.setValueAtTime(0, this.getTime());
        this.gainNode.gain.linearRampToValueAtTime(0.6, this.getTime() + 0.02);
        this.oscillator1.start(this.getTime() + 0.001);
        this.oscillator2.start(this.getTime() + 0.001);
    }

    release() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.getTime() + 1);
    }

    kill() {
        this.oscillator1.stop(this.getTime() + 1.1);
        this.oscillator2.stop(this.getTime() + 1.1);
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
