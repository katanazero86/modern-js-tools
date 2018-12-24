import axios from 'axios'
// const axios = require('axios')


// axios.get()
// axios.post()
// axios.put()
// axios.delete()

axios({
    //options
})

//예시
axios({
    method: 'get',
    url: '/',
    baseURL: '/',
    params: {},
    headers: {},
    data: {},
    timeout: 1000,
    withCredentials: false,
    responseType: 'json',
})

//data 옵션은 request body에 전송될 데이터를 의미한다. (post, put, patch 에만 사용가능)

axios.get('/', {params: {name: '홍길동'}}, {
    'content-type': 'application/json'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// 요청을 하면, Axios 는 Promise 객체를 반환한다.
// then() 이 resolve() 이행
// catch() 가 reject() 실패