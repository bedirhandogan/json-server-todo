import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useEffect, useState} from "react";
import {addTask, deleteTask, editTask, getTasks} from "services";

function App() {
    const [tasks, setTasks] = useState([]);
    const uuid = Math.floor(Math.random() * new Date()); // uuid
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getTasks('http://localhost:3001/tasks/').then(result => setTasks(result));
    }, []);

    async function submitHandle(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        addTask('http://localhost:3001/tasks/', {
            id: uuid,
            value: event.target[0].value,
            done: false
        });
        await getTasks('http://localhost:3001/tasks/').then(result => setTasks(result));
    }

    async function deleteItem(id) {
        deleteTask(`http://localhost:3001/tasks/${id}`);
        await getTasks('http://localhost:3001/tasks/').then(result => setTasks(result));
    }

    async function itemCompleted(id) {
        const filtered = tasks.find(item => item.id === id);
        await editTask(`http://localhost:3001/tasks/${id}`, { done: !filtered.done })
        await getTasks('http://localhost:3001/tasks/').then(result => setTasks(result));
    }

    async function editValue(event, id) {
        event.preventDefault();
        editTask(`http://localhost:3001/tasks/${id}`, { value: event.target[0].value });
        await getTasks('http://localhost:3001/tasks/').then(result => setTasks(result));
    }

    return (<div className={'App'}>
        <div className={'container'}>
            <Form searchValue={searchValue} setSearchValue={setSearchValue} submitHandle={submitHandle}/>
            <List deleteItem={deleteItem} itemCompleted={itemCompleted} editValue={editValue} tasks={tasks}/>
        </div>
    </div>);
}

export default App;