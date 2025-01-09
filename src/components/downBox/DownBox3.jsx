import { useDispatch, useSelector } from "react-redux";
import { addChildren } from "../../redux/userSlice";

export default function DownBox3() {
  const counter = useSelector((state) => state.counter.value);

  const userChildren = useSelector((state) => state.user.children);

  const dispatch = useDispatch();

  console.log(userChildren);

  return (
    <div className="bg-white p-4">
      <h5>DownBox3</h5>

      <button
        className="bg-orange-500 shadow-md rounded p-2"
        onClick={() => dispatch(addChildren(["child3", "child4"]))}
      >
        addChildren
      </button>

      {userChildren.map((child, index) => (
        <h3 key={index}>{child}</h3>
      ))}

      <h1>Counter: {counter}</h1>
    </div>
  );
}
