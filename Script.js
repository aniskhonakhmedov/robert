
let api = "https://api.instantwebtools.net/v1/airlines/"
let data = []

for(let item = 0; item <= 100; item++){
    axios.get(api + item)
        .then(res => {
            if(res.statusText == "OK"){
                data.push(res.data)
                if(data.length == 95){
                    data.splice(0, 45)
                    reload(data)
                }
            } else{
                console.log('no content');
            }
        })
        .catch(err => {
            console.log(err);
        })
}

const reload = (data) => {
    console.log(data);
}