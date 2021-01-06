'use strict'

document.getElementById('mybtn').addEventListener('click', time)
// Event Listener connects the button with the function "time()"

function time () {
  const age = (document.getElementById('age').value)
  // gets age from html document
  const weekday = (document.getElementById('weekday').value)
  // gets day of week from html document
  if (weekday === 'Saturday' || weekday === 'Sunday') {
    alert('Time To Relax')
  } else if (age <= 18) {
  alert('Time For School')
  } else {
  alert('Time For Work')
  }
}
