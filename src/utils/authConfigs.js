export function postConfig(url, data) {
    return {
        method: 'POST',
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
}

export function getConfig(url) {
    return {
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
}
