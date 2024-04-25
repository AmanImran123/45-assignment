function make_great(magicians: string | any[]) {
  for (let i = 0; i < magicians.length; i++) {
    function show_magicians(magicians: any[]) {
      magicians.forEach(magician => {
        console.log(magician);
      });
    }
    show_magicians(magicians);

    function make_great(magicians: string | any[]) {
      for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
      }

      make_great(magicians); // Modifies the original array
      show_magicians(magicians); // Shows modified names
    }
  }
}
