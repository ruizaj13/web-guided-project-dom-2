console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.getElementById('launchButton')
const confirmButton = document.getElementById('confirmButton')
const cancelButton = document.getElementById('cancelButton')

// B- MESSAGES
const successMessage = document.getElementsByClassName('report success off')
const failureMessage = document.getElementsByClassName('report failure off')

// C- MODAL
const modal = document.getElementsByClassName('modal off')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute

launchButton.onclick =  event => {
    console.log('gg');
}

//  C- element.addEventListener('click', callback)

launchButton.addEventListener('click', event => {
    console.log('gg two electric boogaloo')
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function launch(event) {
    modal.classList.remove('off');

}


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.



// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

document.addEventListener('keydown', function (event){
});

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        modal.classList.add('off');
    }
});

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
