// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

const balloon = document.getElementById('balloon');
// using a css standard property and assigning it to 20
let fontSize = 20;
// and this is the max font size
let maxSize = 90;

// added an event listener for "keydown" so that when we press on a key, it would function.
document.addEventListener('keydown', (event) => {
    if (!balloon.textContent.includes('🎈')) return;

        // if the "ArrowUp" key is pressed
    if (event.key === 'ArrowUp') {
        // then the balloon size will increase by 10%
        originalSize = 1.1;
        // and if the original size is greater than the max size then:
        if (fontSize >= maxSize) {
            // then the 🎈 emoji will be replaced with a 💥 emoji
            balloon.textContent = '💥';
            //this will remove the event listener after pressing the key down and after it meets the condition(originalSize >= largeSize). Since there is no function called, the arguments.callee is being used.
            document.removeEventListener('keydown', arguments.callee);
        } else {
            // this allows us to access the CSS and change the font size
            balloon.style.fontSize = fontSize + 'px'; 
        }
        // this will prevent scrolling on the page 
        event.preventDefault();
    }
});

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
