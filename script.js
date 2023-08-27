const numbersDiv = document.querySelector('#numbers');
const generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', () => {
  const numbers = [];

  // Generate 6 random numbers
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  // Sort the numbers in ascending order
  numbers.sort((a, b) => a - b);

  // Update the div content with the numbers
  numbersDiv.textContent = numbers.join(' - ');
});
