class Speaker {

  constructor(name, verb) {

    this.name = name
    
    this.verb = verb || "says"

}

 
 speak(text) {

    console.log(this.name + " " + this.verb +" "+ text + "'")

}

}

class Shouter {

  constructor(name, verb = "shouts") {

this.name = name;
this.verb = verb;
    
  
}


  speak(text) {

   console.log(this.name + " " +this.verb + "'" + text.toUpperCase() + "'")
 	 
}

}
