function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        let start = 0;
        let finish = 5;

        async function letsGo() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    resolve(result);
                }

            } catch (error) {
                start++
                console.log('Error quantity =', start)
                if (start === finish) {
                    reject(error);
                }
                  else {
                    console.log('start new letsGo....')
                    letsGo();
                  }
            }
        }
        letsGo();
    });
}

fetchUrl('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response))
    .catch(error => console.log('fifth error:', error))
fetchUrl('https://jsonplaceholder1.typicode.com/todos/2')
    .then(response => console.log(response))
    .catch(error => console.log('fifth error:', error))