import { useContext } from 'react';
import Context from '../context';

export function useGreetingIn() {
  const { view } = useContext(Context);
  const { height } = view.client.dimensions;
  const { y: scrollY } = view.client.scrollPos;
  return scrollY <= height / 4;
}
