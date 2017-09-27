const axios = require('axios')

function get_request() {
    axios.get('http://httpbin.org/get?fuck=shit')
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })

    axios.get('http://httpbin.org/get', {
        params: {
            fuck: "shit"
        }
    })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function post_request() {
    axios.post('http://httpbin.org/post', {
        fuck: 'shit',
        son: 'bitch'
    })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function create_instance() {
    let instance = axios.create({
        baseURL: 'https://httpbin.org/',
        timeout: 4000
    })

    instance.get('ip')
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function cancel_request() {
    let cancelToken = axios.CancelToken
    let source = cancelToken.source()
    axios.get('https://httpbin.org/ip', {
        cancelToken: source.token
    })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })

    source.cancel('取消了HTTP请求')
}

get_request()
post_request()
create_instance()
cancel_request()