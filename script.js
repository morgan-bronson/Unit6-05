'use strict'

document.getElementById('mybtn').addEventListener('click', time)
// Event Listener connects the button with the function "time()"

function time () {
  const age = (document.getElementById('age').value)
  // gets age from html document
  const day = (document.getElementById('weekday').value)
  // gets day of week from html document
  if ((age >= 18) && (weekday >=4)) {
    alert('Time For School!')
    // makes an alert pop up
  } else if ((age >= 18) && (weekday >=4)) {
    alert('Time For Work')
    // makes an alert pop up
  } else {
    alert('Time To Relax!')
  }
}
