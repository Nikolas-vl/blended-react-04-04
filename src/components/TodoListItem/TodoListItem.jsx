import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ todo, number, onDelete }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{number}
      </Text>
      <Text>{todo.text}</Text>
      <button
        onClick={() => onDelete(todo.id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
