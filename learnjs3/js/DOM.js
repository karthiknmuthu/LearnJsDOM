//accessing of the html elements by js
//*getElementById()
//*querySelector
//*var.style.display is used to accessing the css components
//display to show the element
const view1 = document.getElementById("view1");
console.log(view1);
const vew = document.querySelector("#view2");
view1.style.display = "flex";
vew.style.display = "flex";
const views = document.getElementsByClassName("view");
console.log(views);
const sameviews = document.querySelectorAll(".view");
console.log(sameviews);
const divs = view1.querySelectorAll("div");
console.log(divs);

const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDiv);

evenDiv[4].style.backgroundColor = "green";
vew.style.backgroundColor = "blue";

for (i = 0; i < evenDiv.length; i++) {
  {
    evenDiv[i].style.backgroundColor = "green";
    evenDiv[i].style.width = "150px";
  }
}

const navText = document.querySelector("h1");
console.log(navText);
navText.textContent = "Hello world";
const navBar = document.querySelector("nav");
navBar.innerHTML = "<h2>Karthikeyan</H2> <p> paadi da paarama</p>";
console.log(navBar);
navBar.style.justifyContent = "fspace-evenly";
console.log(evenDiv[0]);
console.log(evenDiv[0].parentElement);
console.log(evenDiv[0].parentElement.children);
console.log(evenDiv[1].parentElement.childNodes);
console.log(evenDiv[0].parentElement.hasChildNodes);
console.log(evenDiv[0].parentElement.lastElementChild);
console.log(evenDiv[0].parentElement.firstChild);
console.log(evenDiv[0].nextSibling);
console.log(evenDiv[0].nextElementSibling);
console.log(evenDiv[0].nextElementSibling.nextElementSibling);
console.log(evenDiv[0].previousElementSibling);
vew.style.flexDirection = "row";
vew.style.justifyContent = "left";
vew.style.margin = "10px";
while (vew.lastChild) {
  vew.lastChild.remove();
}
console.log(vew.childElementCount);

const createDivL = (parent, it) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = it;
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.color = "black";
  newDiv.style.display = "flex";
  newDiv.style.justifyItems = "center";
  newDiv.style.alignItems = "center";

  parent.append(newDiv);
};
for (i = 0; i < 12; i++) {
  createDivL(vew, i);
}
