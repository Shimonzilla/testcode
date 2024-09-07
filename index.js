let container = document.getElementsByClassName("container")
console.log(container[0])

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {


        json.forEach(element => {
            const card  = document.createElement("div")
            card.classList.add("card")
            console.log(card)
            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
            const header  = document.createElement("h1")
            header.textContent = element.title + ` (Id: ${element.id})`
            const text  = document.createElement("p")
            text.textContent = element.body
            const author  = document.createElement("div")
            author.textContent = element.userId
            author.classList.add("author")
            cardBody.appendChild(header)
            cardBody.appendChild(text)
            card.appendChild(cardBody)
            card.appendChild(author)
    
            container[0].appendChild(card)
                console.log(element)

        });


        
    })