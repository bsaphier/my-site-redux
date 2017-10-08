import { Synth } from './synth';
import * as consts from '../constants';


export function scaleFactory(scale, tonic) {
    return scale.map((step, idx) => (
        {
            step: idx + 1,
            noteInHz: tonic * step
        }
    ));
}


export const bluesScale = scaleFactory(consts.BLUES_STEPS, consts.ROOT_IN_HZ);


export default ({ noteInHz }) => aCtx => {
    let sound = new Synth(aCtx);
    sound.play(noteInHz);
    sound.stop();
    sound.kill();
    sound = undefined;
};
