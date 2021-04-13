const stringInput = document.getElementById('string');
const checkBtn = document.querySelector('.checkBtn');

let counter = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

checkBtn.addEventListener('click', checkVowels);

function checkVowels() {
  // Catch the string and convert to lower case
  let string = stringInput.value.toLowerCase();
  // Go across the string
  // then, checks if it fits with any vowel, add 1 to the counter
  for(let i = 0; i < string.length; i++) {
    vowels.forEach(vowel => {
      if (string.charAt(i) == vowel) { counter++ }
    });
  }
  alert('the number of vowels are: ' + counter);
  // Reset the counter
  counter = 0;
}