// Using loops to cycle through elements on a page, and do stuff with said elements.
// Some examples would be animating the links or changing the style properties.
//In this program, the JS loop cycles through the HTML elements.

var links = document.getElementsByTagName("a"); //created a variable called links. It will be array that'll hold all the anchor tags.

for(i = 0; i < links.length; i++)   { // created a for loop that starts at zero. As long as "i" is equal to a number that is less than the
                                      //  link on the pages, 5, it will continue to loop.

    links[i].className = "link-" + i; // Gives each anchor tag the "link-" in html code, every time it is cycled through.
                                      // Remember, starts off at 0, or in this case, "Link 0". It'll add "link-0" as the class name,
                                      // restart the loop, and does the entire thing again, but with "Link 1" and "link-1". It does
                                      // this until the "i" = 6, in which the for loop ends as i would be greater than highest link 
                                      // number in your html code, 5.
}