const button = document.getElementById("button")

function getprofile(event) {
    event.preventDefault()
    let input = document.getElementById("input").value
    fetch (`https://api.github.com/users/${input}`)
        .then(response => response.json())
            .then(data => {
                const result = document.getElementById("result")

                const h2 = document.createElement("h2")
                h2.innerHTML = data.login

                const p = document.createElement("p")
                p.innerHTML = data.location
                
                const h4 = document.createElement("h4")
                h4.innerHTML = data.bio
    
                const wrapperimg = document.createElement("div")
                wrapperimg.classList.add("wrapperimg")
                
                const img = document.createElement("img")
                img.src = data.avatar_url

                const a = document.createElement("a")
                a.href = data.html_url
                a.innerHTML = "view profile"
                a.setAttribute('target', "_blank")
                

                result.append(wrapperimg)
                wrapperimg.append(img)
                result.append(h2)
                result.append(p)
                result.append(h4)
                result.append(a)
            })
}

button.addEventListener("click", getprofile)