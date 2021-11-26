// Person Constructor
function Person(FirstName,LastName,OfficeAddress){
    this.FirstName = FirstName
    this.LastName = LastName
    this.OfficeAddress = OfficeAddress
}

// Person's User defined prototypes
Person.prototype.printDetails = function(){
    console.log(`Name is ${this.FirstName} ${this.LastName} and I work at ${this.OfficeAddress}.`)
}
Person.prototype.printDetailsOnHTML = function(selector){
    selector.innerHTML = `Name is ${this.FirstName} ${this.LastName} and I work at ${this.OfficeAddress}.`
}

// creating of 3 Person's Object
let p1 = new Person("Tony","Stark","Stark Industries, New York")
let p2 = new Person("Steve","Rogers","Shield")
let p3 = new Person("Thor","Odinson","Asgard")

// Printing details on console
p1.printDetails()
p2.printDetails()
p3.printDetails()

// Printing details on HTML Page
p1.printDetailsOnHTML(document.getElementById("person1"))
p2.printDetailsOnHTML(document.getElementById("person2"))
p3.printDetailsOnHTML(document.getElementById("person3"))

