function makeGreat(magi: string[]) {
    let greatMagicians = [];
    for (let magician of magi) {
      greatMagicians.push(magician);
    }
    return greatMagicians;
  }
  
  let magicians = ["alice", "david", "chris"];
  let greatMagicians = makeGreat(magicians);
  console.log(magicians); // ["alice", "david", "chris"]
  console.log(greatMagicians); // ["alice", "david", "chris"]
  