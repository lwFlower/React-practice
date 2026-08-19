import Button from "./components/Button/Button";

const addButtonAction = () => {
  console.log('Add task');
}

const addButton = {
  label: 'Add task',
  action: addButtonAction,
};

const removeButton = {
  label: 'x',
  action: () => { console.log('remove')},
  color: 'red'
}

function App() {
  const tasks = [
    'Pet the cat',
    'Make coffe',
    'Watch  JSX video',
  ]

  return (
    <>
      <h1>Another list</h1>
      <ul>
        {tasks.map((task) => <li key={task}>{task} <Button label={removeButton.label} action={removeButton.action} color={removeButton.color} type="remove"/></li>)}
      </ul>
      <Button label={addButton.label} action={addButton.action} type="text"/>
    </>
  )
}

export default App
