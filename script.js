let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let delate = document.getElementById("delate");

window.onload = () => {
  input.value = "";
};
//ecupération du valeur saisi par l'écoute de lévennement au clavier
buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed === 1) {
      // input.value = "";
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
//gestion des erreurs
  try {
    //La eval()fonction évalue le code JavaScript représenté sous forme de chaîne et renvoie sa valeur d'achèvement
    //stockage du resultat dans solution
    let solution = eval(inputValue);
    //La Number.isNaN()méthode statique détermine si la valeur transmise est la valeur numérique NaNet renvoie false si 
    //l'entrée n'est pas du type Number. Il s’agit d’une version plus robuste de la fonction globale originale isNaN()
    
    //La Number.isFinite()méthode statique détermine si la valeur transmise est un nombre fini, c'est-à-dire qu'elle vérifie 
    //qu'une valeur donnée est un nombre et que le nombre n'est ni positif Infinity, Infinityni négatif NaN.

    //vérification de la saisie
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    //La Number.isInteger()méthode statique détermine si la valeur transmise est un entier.
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
    //pour afficher deux chiffre apés la virgule
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
});

// programmation du boutton égal
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
  console.log(inputValue, "hvyutfv");
  //gestion des erreurs
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
});
//programmation du button effacer
clear.addEventListener("click", () => {
  input.value = "";
});
//prognamation du boutton delate pour le backspace
delate.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
