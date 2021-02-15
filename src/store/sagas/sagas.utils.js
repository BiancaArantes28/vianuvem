export function fetchGet(endpoint) {
    const headersObject = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    };

    return fetch(endpoint, headersObject)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error);
}

export function fetchPost(endpoint, payload) {
    const headersObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: payload,
    };

    return fetch(endpoint, headersObject)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error);
}
