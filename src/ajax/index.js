import axios from 'axios'

export function first() {
    // axios.get('/users', {
    //     params: {
    //         ID: 12345
    //     }
    // }).then(function (response) {
    //         console.log(response);
    // }).catch(function (error) {
    //         console.log(error);
    // });
    promiseGet('/users').then((result)=>{
        console.log(result);
    })
}

function get(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.response);
            } else {
                console.log(xhr.error);
            }
        }
    };
    xhr.send();
}

function promiseGet(url) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(xhr.response, this);
                } else {
                    reject(xhr.response, this)
                }
            }
        };
        xhr.send();
    })
}

