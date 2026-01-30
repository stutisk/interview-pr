export const SingleTodo = ({singleTodo,toggleCheckBox,DeleteTodo}) => {
  return (
    <div>
      <div className="flex justify-center" key={singleTodo.id}>
        <input
          type="checkbox"
          checked={singleTodo.isSelected}
          onChange={() => toggleCheckBox(singleTodo.id)}
        />
        <p>{singleTodo.text}</p>
        <button onClick={() => DeleteTodo(singleTodo.id)}>Delete </button>
      </div>
    </div>
  );
};
