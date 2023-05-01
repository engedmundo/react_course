import Prop from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ children, onClickMethod }) => {
  const [state, actions] = useCounterContext();

  return <button onClick={onClickMethod}>{children}</button>;
};

Button.propTypes = {
  children: Prop.node.isRequired,
  onClickMethod: Prop.func.isRequired,
};
