import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    // Перевіряємо, чи є дані та чи вони не є "undefined"
    if (savedTodos && savedTodos !== 'undefined') {
      try {
        return JSON.parse(savedTodos); // Перетворюємо збережене на об'єкт
      } catch (error) {
        console.error('Error parsing todos from localStorage:', error);
        return []; // Повертаємо порожній масив, якщо виникла помилка
      }
    }
    return []; // Якщо дані відсутні або "undefined", повертаємо порожній масив
  });

  // Функція для додавання нової тудушки
  const addNewTodo = text => {
    const newTodo = {
      text,
      id: nanoid(),
    };
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Оновлюємо localStorage
      return updatedTodos;
    });
  };

  // Функція для видалення тудушки
  const deleteTodo = id => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Оновлюємо localStorage
      return updatedTodos;
    });
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}

      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
};

export default Todos;
