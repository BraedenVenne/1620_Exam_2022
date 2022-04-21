// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

const  cardSection = document.querySelector('#display_all_contacts')
const infoSection = document.querySelector('#display_single_contact')

const infoTemp = 
  `<div id='card-info'>
    <h1>
      <p>
      </p>
    </h1>
  </div>`

const closeBtnTemp = `<button id='closecard'>Close</close>`

// Creates cards for each contact
function loadContacts() {
  for (const names of contactsList) {
    let cardName = names.name.toLowerCase()
    if (cardName == '"major" motoko') {
      cardName = 'motoko'
    }
    const cardTemp = `<div id='card'><img id='character-card' src='img/${cardName}.png' alt="${cardName}" style='width:10%'></div>`
    cardSection.insertAdjacentHTML('afterend', cardTemp)
    const card = document.querySelector('#character-card')
    card.addEventListener('click', displayContactInfo)
  }

}

loadContacts()




function displayContactInfo(evt) {
  const infoSection = document.querySelector('#card-info')
  alert('test')
  cardDiv = closeBtn = document.querySelector('#card')
  closeBtn = document.querySelector('#closeCard')
  cardDiv.insertAdjacentHTML('afterend', closeBtnTemp)
}


function closeContact(evt) {
  if (evt.target.id == 'closeCard') {
    evt.target.parentElement.remove()
  }
}