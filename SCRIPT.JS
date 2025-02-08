// const byId=(id)=>{
//     return document.getElementById(id);
// };
// const $singupButton=byId('singUp');
// const $singInButton=byId('signIn');
// const $container=byId('container');

// $singupButton.addEventListener(
//     'click', ()=>{
//         $container.classList.add('right-panel-active');

//     },
// );

// $singInButton.addEventListener(
//     'click',()=>{
//         $container.classList.remove('right-panel-active');

//     },

// );
// Select elements
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Event Listeners
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


