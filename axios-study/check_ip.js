function onClick() {
    axios.get('https://httpbin.org/ip')
        .then(function (response) {
            let ip = document.getElementById('ip')
            ip.textContent = response.data.origin
        })
        .catch(function (error) {
            alert(error)
        })
}