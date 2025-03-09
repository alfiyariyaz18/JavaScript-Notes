

const guestList = ['Alfiya', 'Hongjoong', 'Seonghwa', 'Yunho', 'Yeosang', 'San', 'Mingi', 'Wooyoung', 'Jongho']
const guest = prompt("Enter your name: ");

if(guestList.includes(guest)){
    console.log('WELCOME!');
}
else{
    console.log("Sorry, maybe next time.");
}