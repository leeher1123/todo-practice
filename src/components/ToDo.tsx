import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: IToDo['category']) => {
    setToDos((oldToDos) => {
      const TargetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, TargetIndex),
        newToDo,
        ...oldToDos.slice(TargetIndex + 1),
      ];
    });
  };

  const onClose = (id: number) => {
    setToDos((toDo) => {
      return toDo.filter((deleteToDo) => deleteToDo.id !== id);
    });
  }; // 삭제 기능 구현

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={() => onClose(id)}>Delete</button>
    </li>
  );
}

export default ToDo;
