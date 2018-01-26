var person = { /* The curly braces mean that an OBJECT is represented. Brackets would represent an array. */
    name : 'Sam',
    country : 'USA', /* Notice how you can use strings in an object's property? */
    age : 33, /* Notice how you can use numbers in an object's property? */
    CodeLouisville : true, /* Notice how you can use boolean true/false values in an object's property? */
    skills : ['HTML', 'CSS', 'JavaScript'] /* Notice how you can put an array as an object's property? */
};

function print(message) {
    var div = document.getElementById('listDiv');
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>'; /* FYI, person.name is the "dot notation" way of accessing info in an object. The object is person and the property is name, the value of which is Sam. As an alternative to "dot notation", you also could have used "bracket notation" -- person['name'] instead of person.name -- to access the same info. */
print(message); /* This just prints the above line's output to the page. */