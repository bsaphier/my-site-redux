import { BLUES_STEPS, ROOT_IN_HZ, OSC_TYPES, FILTER_TYPES } from './constants';

const OSC1_TYPE = OSC_TYPES.triangle;
const OSC2_TYPE = OSC_TYPES.sawtooth;
const FILTER_TYPE = FILTER_TYPES.bandpass;

export const scaleFactory = (scale, tonic) => scale.map((step, idx) => ({
  step: idx + 1,
  noteInHz: tonic * step
}));

export const bluesScale = scaleFactory(BLUES_STEPS, ROOT_IN_HZ);

export class Synth {
  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.levelNode = this.context.createGain();
    this.masterGain = this.context.createGain();
    
    this._initialized = false;
    this._timer = null;
  }

  initialize() {
    this.setupOutput()
      .setupOsc(OSC1_TYPE, OSC2_TYPE)
      .setupFilter(FILTER_TYPE, 1760, 0.382);

    this.oscillator1.connect(this.filter);
    this.oscillator2.connect(this.levelNode);
    this.levelNode.connect(this.filter);
    this.filter.connect(this.gainNode);
    
    this.gainNode.gain.value = 0;
    this.levelNode.gain.value = 0.025;

    this.oscillator1.start();
    this.oscillator2.start();

    this._initialized = true;
    return this;
  }

  setupOsc(oscType1, oscType2) {
    this.oscillator1 = this.context.createOscillator();
    this.oscillator2 = this.context.createOscillator();
    this.oscillator1.type = oscType1;
    this.oscillator2.type = oscType2;
    return this;
  }

  setupFilter(filterType, value, qValue) {
    this.filter = this.context.createBiquadFilter();
    this.filter.frequency.value = value;
    this.filter.type = filterType;
    this.filter.Q.value = qValue;
    return this;
  }

  setupOutput() {
    this.masterGain.gain.value = 0.62;
    this.masterGain.connect(this.context.destination);
    this.gainNode.connect(this.masterGain);
    return this;
  }

  play(note) {
    clearTimeout(this._timer);

    if (!this._initialized) {
      this.initialize();
    }
    if (this.context.state === 'suspended') {
      this.context.resume();
    }

    const { note: noteInHz, attack, decay, sustain, release } = note;
    const currentTime = this.context.currentTime;
    const decayStartTime = currentTime + attack.time;
    const sustainStartTime = decayStartTime + decay.time + sustain.time;
    const totalTimeInMs = Math.round(
      (attack.time + decay.time + sustain.time + release.time) * 1000
    );

    this.filter.frequency.setTargetAtTime(noteInHz * 4, currentTime, attack.time / 3);
    this.filter.frequency.setTargetAtTime(1760, sustainStartTime, release.time);

    this.gainNode.gain.setTargetAtTime(0, currentTime, 0.01);
    this.oscillator1.frequency.setTargetAtTime(noteInHz, currentTime, attack.time / 4);
    this.oscillator2.frequency.setTargetAtTime(noteInHz * 2.05, currentTime, attack.time / 4);

    /** Attack */
    this.gainNode.gain.setTargetAtTime(attack.value, currentTime, attack.time);
    /** Decay */
    this.gainNode.gain.setTargetAtTime(decay.value, decayStartTime, decay.time);
    /** Release */
    this.gainNode.gain.setTargetAtTime(0, sustainStartTime, release.time);
    
    this._timer = setTimeout(() => {
      this.context.suspend();
    }, totalTimeInMs * 3);
  }

  kill() {
    this.oscillator1.stop();
    this.oscillator2.stop();
    this.context.close();

    /** Cleanup */
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        this[i] = undefined;
      } else if (this.prototype.hasOwnProperty(i)) {
        this.prototype[i] = undefined;
      }
    }
  }
}

const soundDict = {};
export function soundCreator(key) {
  if (!soundDict[key]) {
    /**
     * @TODO
     * Hard-coding `new Synth` defeats the purpose of this function...
     * Either `Synth` needs to be more configurable or a sound class
     * should be passed as an arg.
    */
    soundDict[key] = new Synth();
  }

  let sound = soundDict[key];

  return (note, destroyTime) => {
    sound.play(note);

    if (typeof destroyTime === 'number' && destroyTime > 0) {
      setTimeout(() => {
        sound.kill();
        sound = undefined;
        soundDict[key] = undefined;
      }, destroyTime);
    }
  };
}

/* AUDIO ACTION-CREATORS */
let pluckSynth = soundCreator('pluckSynth');
export const playSound = note => {
  pluckSynth({
    note: note.noteInHz,
    attack: { value: 0.8, time: 0.02 },
    decay: { value: 0.2, time: 0.05 },
    sustain: { time: 0 },
    release: { time: 0.162 },
  });
};

export const playDrone = note => {
  let pluckSynth = soundCreator('drone');
  pluckSynth({
    note: note.noteInHz,
    attack: { value: 0.6, time: 0.02 },
    decay: { value: 0.6, time: 0 },
    sustain: { time: 0 },
    release: { time: 1 },
  }, 300);
};
