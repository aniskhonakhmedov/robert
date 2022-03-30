let api = "https://jsonplaceholder.typicode.com/posts"
let data = []

// Отправка запроса
axios.get(api)
    // Принятие ответа
    .then(res => {
        // res - это весь ответ с сервера
        if (res.status == 200 || res.status == 201) {
            data = res.data
        } else {
            throw new Error("Backend is shit!")
        }

        // res.status // Статус запроса
        // res.data // Получаемые массивы/объекты
        // res.statusText // Салам, фронтендщик - сообщение от бекендера
        // res.headers // Безопасность запроса
        // res.config // Конфигурация запроса
    })
    // Принятие ошибки
    .catch(err => {
        throw new Error("Frontend is shit!")
    })



console.log(axios);
