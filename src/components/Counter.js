import { useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { increment, decrement, toggle, increase } from '../store/Index';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  }

  const decrementCounter = () => {
    dispatch(decrement());
  }

  const toggleHandler = () => {
    dispatch(toggle())
  }

  const increaseHandler = (amount) => {
    dispatch(increase(amount));
  }
// finished video 16, 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <span><button onClick={decrementCounter}>Decrement</button></span>
      <button onClick={toggleHandler}>Toggle Counter</button>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={() => increaseHandler(10)}>Increseby 10</button>
    </main>
  );
};

export default Counter;
