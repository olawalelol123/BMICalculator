let person = 'Sheriff';
let bestFriend = 'Olawale';
let school = 'Sunny Luba Secondary';
let game = 'Football'
let age = '20';
let statement = `Hi, My name is ${person} and my closest friend is ${bestFriend}. We both attended ${school} and we are both born on ${new Date().getFullYear()- age}. We love to play ${game} whenever we go out together.`

let show = document.querySelector('p')
show.textContent = statement
document.body.style.backgroundColor = "#ff6347"
document.getElementById("about").style.color = '#ffffff';