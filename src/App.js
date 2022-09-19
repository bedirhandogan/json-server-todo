import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]); // init state array
    const uuid = Math.floor(Math.random() * new Date()); // basit bir uuid
    const [value, setValue] = useState('');

    useEffect(() => {
        // her render olduğunda state'i güncelliyorum. Sunucuyu yoracak bir hareket ama şuanlık kalsın bir test projesi çünki :)
        fetch('http://localhost:3001/tasks/').then(res => res.json()).then(res => setTasks(res));
    });

    // headers
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    function submitHandle(event) {
        event.preventDefault(); // default işlemlere engel oluyorum
        // fake database'e yeni veri ekliyorum
        fetch('http://localhost:3001/tasks/', {
            ...requestOptions,
            method: 'POST',
            body: JSON.stringify({
                id: uuid,
                value: event.target[0].value,
                done: false
            })
        });
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