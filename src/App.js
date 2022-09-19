import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]); // init state array
    const uuid = Math.floor(Math.random() * new Date()); // basit bir uuid
    const [value, setValue] = useState('');

    useEffect(() => {
        // code
    });

    function submitHandle(event) {
        event.preventDefault(); // default işlemlere engel oluyorum
        // code
    }

    function deleteItem(event, id) {
        // code
    }

    function itemCompleted(id) {
        // code
    }

    function editValue(event, id) {
        event.preventDefault(); // default işlemlere engel oluyorum
        // code
    }

    return (<div className={'App'}>
        <div className={'container'}>
            <Form value={value} setValue={setValue} submitHandle={submitHandle}/>
            <List deleteItem={deleteItem} itemCompleted={itemCompleted} editValue={editValue} tasks={tasks}/>
        </div>
    </div>);
}

export default App;