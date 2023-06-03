function recipe() {
  let name = prompt("What is your name?");
  let country = prompt("Whick country are you from?");
  country = country.toLowerCase();
  country = country.trim();
  let email = prompt("What is your email address?");

  if (country === "vietnam") {
    alert("Xin chao " + name + "! We'll be in touch by email 🥖");
  } else {
    alert("Hello " + name + "! We'll be in touch by email 🥖🥖🥖");
  }
}

let recipeButton = document.querySelector("button");
recipeButton.addEventListener("click", recipe);
