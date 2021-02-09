import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {

  const onClick = () => {
    console.log('clickclick')
  }

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Category Script',
        day: 'Feb 9th at 1:30 pm',
        reminder : true,
    },
    {
        id: 2,
        text: 'Jmeter',
        day: 'Feb 6th at 1:30 pm',
        reminder : true,
    },
    {
        id: 3,
        text: 'PDP',
        day: 'Feb 10th at 2:30 am',
        reminder : true,
    }
  ])

  const deteleTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  return (
    <div className="container">
      <Header title = 'To-Do List' button = 'Add' onClick = {onClick}/>
      <Tasks tasks = {tasks} onDelete = {deteleTask} />
    </div>
  )
}

export default App;
