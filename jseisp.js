var myAge = 26;

if (myAge > 25) { // if the assigned value of var myAge is over 25.
    document.write("you are over 25"); // This will print. If it isn't, compiler goes to the first "if else".

} else if (myAge > 20) { // if the assigned value of var myAge is over 20.
    document.write("you are over 20"); // This will print. If it isn't, compiler goes to the next "if else".

} else if (myAge > 10) { // if the assigned value of var myAge is over 10.
    document.write("You are over 10"); // This will print. If it isn't, compiler goes to the "else" statement.

} else { // since none of the above are true, you can safely assume the person isn't over 10 years of age.
    document.write("you are not over 10");
}