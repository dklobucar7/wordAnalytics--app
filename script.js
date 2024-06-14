const textAreaEl = document.querySelector(".analytics__area");
const textAreaTextEl = textAreaEl.textContent;
const wordCountEl = document.querySelector(".analytic__feature__count");
const charCountEl = document.querySelector(".analytics__character__count");
const twitterCountEl = document.querySelector(".analytics__twitter__count");
const faceCountEl = document.querySelector(".analytics__facebook__count");

function updateCounts() {
  const text = textAreaEl.value;

  // Update word count
  const wordCount = text.trim().split(/\s+/).length;
  wordCountEl.textContent = wordCount;

  // Update character count
  const charCount = text.length;
  charCountEl.textContent = charCount;

  // Update Twitter count
  const twitterCount = 280 - charCount;
  twitterCountEl.textContent = twitterCount;

  // Update Facebook count
  const faceCount = 2200 - charCount;
  faceCountEl.textContent = faceCount;
}

// Listen for the input event on the textarea
textAreaEl.addEventListener("input", updateCounts);

// Initial update when the page loads
updateCounts();
