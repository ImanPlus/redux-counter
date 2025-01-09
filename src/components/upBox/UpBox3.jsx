import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counterSlice";

export default function UpBox3() {
  const counter = useSelector((state) => state.counter.value);

  const distpatch = useDispatch();

  return (
    <div className="bg-white p-4">
      <h5>UpBox3</h5>

      <button
        className="bg-blue-500 shadow-md rounded p-2"
        onClick={() => distpatch(increment())}
      >
        increment
      </button>

      <br />
      <br />

      <button
        className="bg-yellow-500 shadow-md rounded p-2"
        onClick={() => distpatch(decrement())}
      >
        decrement
      </button>
      <br />
      <br />

      <button
        className="bg-green-500 shadow-md rounded p-2"
        onClick={() => distpatch(incrementByAmount(2))} // counterSlice.actions.incrementByAmount({a1:2, b2:4})
      >
        incrementByAmount
      </button>

      <h1>Counter: {counter}</h1>
    </div>
  );
}
