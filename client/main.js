const complimentBtn = document.getElementById("complimentButton")
const cowboysBtn = document.getElementById("fortuneButton")
const playerBtn = document.querySelector("#getplayers")
const display = document.querySelector('#container')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const position = document.querySelector('#player-position')
const playerUpdate = document.querySelector('#player-update')


const BaseURL = "http://localhost:4000"
   

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const showPlayers = (arr) => {
    display.innerHTML = ``
    console.log(arr)
    arr.map(player => {
        let playerCards = document.createElement('div')
        playerCards.innerHTML = `
        <h4>${player.fname}  ${player.lname}</h4>
        <h6>${player.position}</h6>
        `
        display.appendChild(playerCards)
    })
}

const getPlayers = () => {
    axios.get(`${BaseURL}/api/players`)
    .then(res => showPlayers(res.data) )
    .catch(err => console.log(err))
}

const postPlayer = (event)=> {
    event.preventDefult()
    let body = {
        fName: firstName.value,
        lName: lastName.value,
        position: position.value
    }
    axios.post(`${BaseURL}/api/players`, body)
    .then(res => showPlayers(res.data) )
    .catch(err => console.log(err))

    firstName.value =''
    lastName.value = ''
    position.value = ''
}

playerBtn.addEventListener('click', getPlayers)
cowboysBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
playerUpdate.addEventListener('submit', postPlayer)
