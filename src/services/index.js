const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export function getTasks(url) {
    return fetch(url, {
        headers,
        method: 'GET'
    }).then(res => res.json())
        .catch(err => console.error(err));
}

export function addTask(url, data) {
    return fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json()).catch(err => console.error(err));
}

export function deleteTask(url) {
    return fetch(url, {
        method: 'DELETE'
    }).catch(err => console.log(err));
}

export function editTask(url, body) {
    return fetch(url, {
        headers,
        method: 'PATCH',
        body: JSON.stringify(body)
    })
}