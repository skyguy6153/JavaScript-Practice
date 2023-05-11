var links = document.getElementsByTagName("a"); // gets the links from html doc

for (i = 1; i <= links.length; i++) {  // var keyword not needed, as the variable here is locally for this "for" loop                                                                           
 //links.length counts the links, gives a number 
 
 console.log("this is link number" + i);
}

document.write("all links now looped");