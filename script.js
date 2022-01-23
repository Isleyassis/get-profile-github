const button = document.getElementById("button")

function getprofile(event) {
    event.preventDefault()
    fetch ("https://api.github.com/users/isleyassis")
        .then(response => response.json())
            .then(data => {
                const result = document.getElementById("result")
                result.innerHTML = data.login
            })
}

button.addEventListener("click", getprofile)