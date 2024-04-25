let users: string[]=['sana',' ayesha','maheen','kifa','admin']

for(let user of users){
if(user == "admin"){
    console.log("helllo admin, would you like to see status report?")
}

else{
    console.log(`hello ${user}, thank you for logging in again.`)
}
}