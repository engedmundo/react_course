import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <Heading />
      <Button onClickMethod={() => actions.increase()}>Increase</Button>
      <Button onClickMethod={() => actions.decrease()}>Decrease</Button>
      <Button onClickMethod={() => actions.reset()}>Reset</Button>
      <Button onClickMethod={() => actions.setCounter({ counter: 10 })}>
        Set 10
      </Button>
      <Button onClickMethod={() => actions.setCounter({ counter: 100 })}>
        Set 100
      </Button>
      <Button onClickMethod={() => actions.asyncIncrease()}>
        async increase
      </Button>
    </div>
  );
};
