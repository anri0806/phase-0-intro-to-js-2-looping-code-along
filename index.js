const message = [];

function writeCards(name, eventName) {
    for (let i = 0; i < name.length; i++)
    message.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    return message;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count -= 1;
    }
}