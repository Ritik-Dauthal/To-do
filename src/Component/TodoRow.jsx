import Input from "./Input";
import { MdDeleteForever } from "react-icons/md";
const TodoRow = ({ todo, todoDone, checked, deleteTodo }) => {
  return (
    <div className="flex space-x-2 items-center my-4">
      <Input
        theme="secondary"
        type="checkbox"
        checked={checked}
        onChange={() => {
          todoDone(todo);
        }}
      ></Input>

      <span className="font-medium text-gray-600">{todo}</span>
      <MdDeleteForever
        className="text-2xl cursor-pointer"
        onClick={() => {
          deleteTodo(todo);
        }}
      />
    </div>
  );
};
export default TodoRow;
