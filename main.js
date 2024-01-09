function showInfo(page) {
  function getById(id) {
    return document.getElementById(id);
  }

  function setDisplay(element, value) {
    element.style.display = value;
  }

  // Hide all info divs

  let signInfo = getById("sign-info");
  setDisplay(signInfo, "none");

  let homeInfo = getById("home-info");
  setDisplay(homeInfo, "none");

  let strawberriesInfo = getById("strawberries-info");
  setDisplay(strawberriesInfo, "none");

  let mangosInfo = getById("mangos-info");
  setDisplay(mangosInfo, "none");

  let kiwiInfo = getById("kiwi-info");
  setDisplay(kiwiInfo, "none");

  let blueberriesInfo = getById("blueberries-info");
  setDisplay(blueberriesInfo, "none");

  let recipesInfo = getById("recipes-info");
  setDisplay(recipesInfo, "none");

  // Show the selected page's info
  let selectedInfoDiv = getById(`${page}-info`);
  if (selectedInfoDiv) {
    setDisplay(selectedInfoDiv, "block");
  }
}
//Strawberry Quiz

// Event listener for the button click
document
  .getElementById("calculateScore")
  .addEventListener("click", calculateScore);

// Function to calculate and display the quiz score
function calculateScore() {
  // Retrieving user inputs and converting to lowercase
  let colorAnswer = document.getElementById("red1").value.toLowerCase();
  let nutrientAnswer = document.getElementById("vitamin-c").value.toLowerCase();
  let tasteAnswer = document.getElementById("sweet").value.toLowerCase();
  let strawberryColorAnswer = document
    .getElementById("red")
    .value.toLowerCase();

  // Initialize variables for tracking correct answers
  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  console.log(colorAnswer);
  if (colorAnswer === "red") {
    document.getElementById("res1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res1").innerHTML = "Incorrect";
  }

  // Question 2
  console.log(nutrientAnswer);
  if (nutrientAnswer === "vitamin c") {
    document.getElementById("res2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res2").innerHTML = "Incorrect";
  }

  // Question 3
  console.log(tasteAnswer);
  if (tasteAnswer === "sweet") {
    document.getElementById("res3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res3").innerHTML = "Incorrect";
  }

  // Question 4
  console.log(strawberryColorAnswer);
  if (strawberryColorAnswer === "red") {
    document.getElementById("res4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res4").innerHTML = "Incorrect";
  }

  // Calculate the percentage
  let percentage = (correctAnswers / totalQuestions) * 100;

  // Display the total score and percentage
  document.getElementById("output").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";

  // Provide feedback to the user based on their score
  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Perfect score! Great job!";
  } else if (percentage >= 75) {
    feedbackMessage = "Well done! Keep it up!";
  } else {
    feedbackMessage = "You can do better. Keep practicing!";
  }

  // Display the feedback message
  document.getElementById("feedback").innerHTML = feedbackMessage;
}

// Mango Quiz
document
  .getElementById("calculateMangoScore")
  .addEventListener("click", calculateMangoScore);

function calculateMangoScore() {
  let countryAnswer = document.getElementById("country1").value.toLowerCase();
  let vitaminAnswer = document
    .getElementById("skin-vitamin")
    .value.toLowerCase();
  let seasonAnswer = document
    .getElementById("ripen-season")
    .value.toLowerCase();
  let pitShapeAnswer = document.getElementById("pit-shape").value.toLowerCase();

  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  if (countryAnswer === "india") {
    document.getElementById("mres1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("mres1").innerHTML = "Incorrect";
  }

  // Question 2
  if (vitaminAnswer === "vitamin a") {
    document.getElementById("mres2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("mres2").innerHTML = "Incorrect";
  }

  // Question 3
  if (seasonAnswer === "summer") {
    document.getElementById("mres3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("mres3").innerHTML = "Incorrect";
  }

  // Question 4
  if (pitShapeAnswer === "oval") {
    document.getElementById("mres4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("mres4").innerHTML = "Incorrect";
  }

  let percentage = (correctAnswers / totalQuestions) * 100;
  document.getElementById("moutput").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";

  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Perfect score! Great job!";
  } else if (percentage >= 75) {
    feedbackMessage = "Well done! Keep it up!";
  } else {
    feedbackMessage = "You can do better. Keep practicing!";
  }

  document.getElementById("mfeedback").innerHTML = feedbackMessage;
}

// Kiwi Quiz
document
  .getElementById("calculateKiwiScore")
  .addEventListener("click", calculateKiwiScore);

function calculateKiwiScore() {
  let kiwiCountryAnswer = document
    .getElementById("kiwi-country1")
    .value.toLowerCase();
  let kiwiSkinTextureAnswer = document
    .getElementById("kiwi-skin-texture")
    .value.toLowerCase();
  let kiwiFlavorAnswer = document
    .getElementById("kiwi-flavor")
    .value.toLowerCase();
  let kiwiConsumptionAnswer = document
    .getElementById("kiwi-consumption")
    .value.toLowerCase();

  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  if (kiwiCountryAnswer === "new zealand") {
    document.getElementById("kres1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("kres1").innerHTML = "Incorrect";
  }

  // Question 2
  if (kiwiSkinTextureAnswer === "fuzzy") {
    document.getElementById("kres2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("kres2").innerHTML = "Incorrect";
  }

  // Question 3
  if (kiwiFlavorAnswer === "tangy") {
    document.getElementById("kres3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("kres3").innerHTML = "Incorrect";
  }

  // Question 4
  if (kiwiConsumptionAnswer === "peeled") {
    document.getElementById("kres4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("kres4").innerHTML = "Incorrect";
  }

  let percentage = (correctAnswers / totalQuestions) * 100;
  document.getElementById("kiwi-output").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";

  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Perfect score! Great job!";
  } else if (percentage >= 75) {
    feedbackMessage = "Well done! Keep it up!";
  } else {
    feedbackMessage = "You can do better. Keep practicing!";
  }

  document.getElementById("kiwi-feedback").innerHTML = feedbackMessage;
}

// Blueberry Quiz
document
  .getElementById("calculateBlueberryScore")
  .addEventListener("click", calculateBlueberryScore);

function calculateBlueberryScore() {
  let blueColorAnswer = document.getElementById("blue1").value.toLowerCase();
  let antioxidantAnswer = document
    .getElementById("antioxidant")
    .value.toLowerCase();
  let dessertUseAnswer = document
    .getElementById("dessert-use")
    .value.toLowerCase();
  let sizeAnswer = document.getElementById("size").value.toLowerCase();

  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  if (blueColorAnswer === "blue") {
    document.getElementById("bres1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("bres1").innerHTML = "Incorrect";
  }

  // Question 2
  if (antioxidantAnswer === "anthocyanins") {
    document.getElementById("bres2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("bres2").innerHTML = "Incorrect";
  }

  // Question 3
  if (dessertUseAnswer === "in pies") {
    document.getElementById("bres3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("bres3").innerHTML = "Incorrect";
  }

  // Question 4
  if (sizeAnswer === "small") {
    document.getElementById("bres4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("bres4").innerHTML = "Incorrect";
  }

  let percentage = (correctAnswers / totalQuestions) * 100;
  document.getElementById("blueberry-output").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";

  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Perfect score! Great job!";
  } else if (percentage >= 75) {
    feedbackMessage = "Well done! Keep it up!";
  } else {
    feedbackMessage = "You can do better. Keep practicing!";
  }

  document.getElementById("blueberry-feedback").innerHTML = feedbackMessage;
}

//Recipe Finder
function findRecipe() {
  let userInput = document.getElementById("recipe-input").value.toLowerCase();
  let recipeResult = document.getElementById("recipe-result");

  // Recipes
  let recipes = {
    strawberries: {
      title: "Strawberry Smoothie",
      ingredients: "Fresh strawberries, yogurt, honey, ice cubes",
      instructions:
        "Blend all ingredients until smooth. Enjoy your refreshing strawberry smoothie!",
    },
    mangos: {
      title: "Mango Salsa",
      ingredients: "Fresh mango, red onion, cilantro, lime juice, salt",
      instructions:
        "Dice mango, onion, and cilantro. Mix with lime juice and salt. Serve with chips.",
    },
    kiwi: {
      title: "Kiwi Sorbet",
      ingredients: "Ripe kiwi, sugar, water, lemon juice",
      instructions:
        "Puree kiwi, sugar, and water. Add lemon juice. Freeze the mixture. Scoop and enjoy!",
    },
    blueberries: {
      title: "Blueberry Pancakes",
      ingredients: "Blueberries, pancake mix, milk, eggs",
      instructions:
        "Mix pancake batter with blueberries. Cook on a griddle. Serve hot with syrup.",
    },
  };

  // Check if the user input matches a recipe
  if (recipes.hasOwnProperty(userInput)) {
    var recipe = recipes[userInput];
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-ingredients").textContent =
      "Ingredients: " + recipe.ingredients;
    document.getElementById("recipe-instructions").textContent =
      "Instructions: " + recipe.instructions;
    recipeResult.style.display = "block";
  } else {
    // If no match, display a message
    recipeResult.style.display = "none";
    alert("Sorry, no recipe found for " + userInput + ". Try another fruit!");
  }
}

//Sign up
function SignUp() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");
  let cpasswordInput = document.getElementById("cpassword");

  if (username.length === 0) {
    usernameInput.style.borderColor = "red";
    alert("Username is a required field. Please enter a username.");
    return;
  } else if (username.length < 5) {
    usernameInput.style.borderColor = "red";
    alert("Username is too short. Please enter at least 5 characters.");
    return;
  } else {
    usernameInput.style.borderColor = "green";
  }

  if (password.length === 0) {
    passwordInput.style.borderColor = "red";
    alert("Password is a required field. Please enter a password.");
    return;
  }

  if (password !== cpassword) {
    passwordInput.style.borderColor = "red";
    cpasswordInput.style.borderColor = "red";
    alert("Passwords do not match. Please check your password.");
    return;
  } else {
    passwordInput.style.borderColor = "green";
    cpasswordInput.style.borderColor = "green";
  }

  alert("Sign up successful!");
}

//Adventure Story
