export class Synth {

    constructor(context) {
        this.context = context;
    }

    setup() {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = 'triangle';

        this.filter = this.context.createBiquadFilter();
        this.filter.frequency.value = 3520; // 7040 3520
        this.filter.type = 'bandpass';
        this.filter.Q.value = 0.162;

        this.gainNode = this.context.createGain();
        this.masterGain = this.context.createGain();
        
        this.oscillator.connect(this.filter);
        this.filter.connect(this.gainNode);
        this.gainNode.connect(this.masterGain);
        this.masterGain.connect(this.context.destination);
        this.masterGain.gain.value = 0.9;
    }

    play(value) {
        this.setup();
        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.02);
        this.oscillator.start(this.context.currentTime + 0.001);
    }

    stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.162);
    }

    kill() {
        this.oscillator.stop(this.context.currentTime + 1);
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                this[i] = undefined;
            } else if (this.prototype.hasOwnProperty(i)) {
                this.prototype[i] = undefined;
            }
        }
    }

}

export default Synth;
