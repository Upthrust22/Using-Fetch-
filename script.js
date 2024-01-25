const containerDiv = document.getElementById("container")
const id = document.getElementById("userId")
// const submitBtn = document.getElementById("submit")
const form = document.getElementById("form")


form.addEventListener("click", function(event){
    event.preventDefault()
    const userId = Number(id.value)
    fetch(`https://jsonplaceholder.org/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        displayContact(data)
    })
    .catch(error => error);
    id.value = ""
})


function displayContact(data){
    containerDiv.innerHTML += `
        <div class="card">
            <p>FullName: ${data.firstname} ${data.lastname}</p>
            <p>Email: ${data.email}</p>
            <p>Birthday: ${data.birthDate}</p>
            <p>Phone: ${data.phone}</p>
            <p>Website: ${data.website}</p>
        </div>
        `
}