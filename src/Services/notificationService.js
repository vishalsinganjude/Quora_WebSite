
const showNotification = () =>{
    return new Promise((resolve, reject) =>{
        fetch('/feedservice/notification/', {
            method:'GET',
            credentials:'same-origin'
        }).then((response) =>{
            response.json().then((data) =>{
                resolve(data);
            }).catch((error) =>{
                reject(error);
            })
        })
    })
}

export default showNotification;