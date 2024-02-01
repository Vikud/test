// let FirstName;
// let LastName;
// FirstName = 'Vitaly';
// LastName = 'Kudryashov';
// alert(FirstName + LastName);
// let a;
// let b;
// b = '2';
// a = '8';

// console.log(typeof(a))
// console.log(+a + +b)
// console.log(+a - +b)
// console.log(+a / +b)
// console.log(+a % +b)
// let isTrue;
// let isFalse;
// const elementById = document.querySelector("#id1");
// console.log(elementById)
// const elementByClass = document.querySelector(".class");
// console.log(elementByClass)
// const elementByTag = document.querySelector("h2");
// console.log(elementByTag)
// elementById.textContent = "Новый текст";
// elementById.setAttribute("id","id2");
// elementById.style.color = "blue";
// elementById.style.backgroundColor = "lightgray";
// function Hello(name) {
//     console.log("Привет, " + name + "!");

// }

// Hello("Vitaly");
// function step(a, b) {
//     return Math.pow(a,b);
// }
// const result = step(3,5);

// console.log(result)
// const me = {
//     firstName: 'Vitaly' ,
//     lastName: 'Kudryashov' ,
//     age: 30 ,
//     Hello: function () {
//         console.log("Hello, " + this.firstName + "!");
//     }
// };

// console.log(me.firstName);
// console.log(me["lastName"]);
// const car = {
//     brand: 'Aston Martin' ,
//     model: 'AM 310' ,
//     year: '2015' ,
//     startEngie: function() {
//         console.log("Запущен двигатель автомобиля " + this.brand + this.model);

//     }
// };

// car.startEngie();
// console.log(car.brand);
// console.log(car["year"]);
// const button = document.querySelector("#myButton");

// button.addEventListener("click", function () {
//     alert("Кнопка была нажата!");
// });
// const diw = document.querySelector("#myDiv");

// diw.addEventListener("mouseover", function() {
//     diw.style.backgroundColor = "lightgreen";

// });
// const div = document.querySelector("#myDiv");

// div.addEventListener("mouseover", function () {
//     div.style.backgroundColor = "pink";
//     div.textContent = "Уберите курсор мыши с меня";

// });
// const button = document.querySelector("#myButton");
// let a;
// a = 0;
// button.addEventListener("click", function () {
//     a++
//     button.innerHTML = a;
//     console.log(a)
// });

// console.dir(button.innerHTML)

// const diw = document.querySelector("#myDiv");

// div.addEventListener("mouseout", function () {
//     div.style.backgroundColor = "aqua";
//     div.textContent = "Нведите мышку на меня";

// });

// const p = document.querySelector("#myDiv");

// p.addEventListener("mouseover", function () {
//     p.style.textContent = "pink";
//     p.textContent = "Уберите курсор мыши с меня";

// });

// const div = document.querySelector("#myDiv");

// div.addEventListener("mouseover", function () {
//     div.style.color = "pink";

// });

// const diw = document.querySelector("#myDiv");

// div.addEventListener("mouseout", function () {
//     div.style.color = "aqua";

// });

// const left = document.querySelector("#left");

// button.addEventListener("click", function () {
//     button.position = "left" + 1;
// });
// function left() {
//     block1 -= 10;
//     document.getElementById('inspo').style.marginLeft = leftNum + 'px';
//   }

// let left = document.querySelector("#left")

// console.log(left)

// let bl = document.querySelector('.block1')

// console.log(bl)

// let counter = 0;


//   left.addEventListener("click", function () {
//       counter=counter-25;


//       console.log()
//       bl.style.left = counter + 'px';
//       if(counter<0) {
//         alert('Вы вышли за границу!') 
//         counter=0;
//         bl.style.left = counter + 'px';
//       }
//   });

//  let top1 = document.querySelector("#top")

//   console.log(top1)

//   let bt = document.querySelector('.block1')

//   console.log(bt)

//   let counter1 = 0;

//   top1.addEventListener("click", function () {
//         counter1=counter1-25;

//         console.log()
//         bt.style.top = counter1 + 'px';
//         if(counter1<0) {
//           alert('Вы вышли за границу!') 
//           counter1=0;
//           bt.style.top = counter1 + 'px';
//         }
//     });

// let right1 = document.querySelector("#right")

// console.log(right1)

// let br = document.querySelector('.block1')

// console.log(br)

// let MP = document.querySelector('#PM')
// let b;
// b = 0;

// let b2 = document.querySelector('.block2')
// b2 = 740;

// console.log(b2)

// let counter2 = 0;

// let col = ["black" , "pink" , "red" , "blue" , "white" , "green"]
// for(let i=0; i>5;i++){
//   console.log(col[i]);
// }
// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// right1.addEventListener("click", function () {
//           counter= counter+25;
//           console.log()
//           br.style.left = counter + 'px';
//           if(counter>750) {
//             alert('Вы вышли за границу!') 
//             counter=750;
//             bl.style.left = counter + 'px';
//             bl.style.left = 0 + 'px';
//             counter = 0;
//           }
//           else if (counter==725) {
//             console.log('test')
//             bl.style.backgroundColor = col[getRandomInt(0, col.length)]
//           }
//           else if(counter>b2) {
//             alert('Вы коснулись второго объекта')
//             counter=0;
//             bl.style.left = counter + 'px';
//             b++
//             MP.innerHTML = b;

//             div.style.color = "aqua";
//           }
// });

//   let left = document.querySelector("#left")

//   console.log(left)

//   let bl = document.querySelector('.block1')

//   console.log(bl)

//   let counter = 0;


//     left.addEventListener("click", function () {
//         counter--;
//         console.log()
//         bl.style.left = counter + 'px';
//     });

//     let left = document.querySelector("#left")

//     console.log(left)

//     let bl = document.querySelector('.block1')

//     console.log(bl)

//     let counter = 0;


//       left.addEventListener("click", function () {
//           counter--;
//           console.log()
//           bl.style.left = counter + 'px';
//       });
// let bottom = document.querySelector("#bottom")

// console.log(bottom)

// let bb = document.querySelector('.block1')

// console.log(bb)

// let counter3 = 0;


//   bottom.addEventListener("click", function () {
//       counter1= counter1+25;
//       if(counter1>350) alert('Вы вышли за границу!');
//       console.log( bb.style.top )
//       bb.style.top = counter1 + 'px';
//       if(counter1>350) {
//         alert('Вы вышли за границу!') 
//         counter1=350;
//         bt.style.top = counter1 + 'px';
//       }
//   });
// const burgerIcon = document.querySelector("#burger-icon");
// const closeIcon = document.querySelector("#close-icon");
// const menu = document.querySelector("#menu");

// console.log(burgerIcon);
// console.log(closeIcon);
// console.log(menu);

// burgerIcon.addEventListener("click", function () {
//   menu.style.right = "0";
//   menu.style.display = 'block'
// });

// closeIcon.addEventListener("click", function() {
//   menu.style.right = "-100%";
// });

// document.addEventListener("click", function (event) {
//   if (!menu.contains(event.target) && event.target !== burgerIcon) {
//     menu.style.right = "-100%";
//   }
// });

// window.addEventListener("resize", function() {
//   if(window.innerWidth >768) {
//     menu.style.right = "-100%";
//   }
// });

// const openBtn = document.querySelector("#openBtn");
// const popup = document.querySelector("#popup");
// const closeBtn = document.querySelector("#closeBtn");

// console.log(openBtn);
// console.log(popup);
// console.log(closeBtn);

// openBtn.addEventListener("click", function() {
//   popup.style.display = "block";
// });

// closeBtn.addEventListener("click", function(){
//   popup.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//   if(event.target === popup) {
//     popup.style.display = "none";
//   }
// });
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const FT1 = document.querySelector("#FT1");
const FT2 = document.querySelector("#FT2");
const FT3 = document.querySelector("#FT3");
const active = document.querySelector('.active');
const div1 = document.querySelectorAll(".div1");

console.log(div1);
console.log(slidesContainer);
console.log(slides);
console.log(prevBtn);
console.log(nextBtn);

let currentIndex = 0;

function prevSlide() {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateSlidePosition();
  updateControllerL();
}
let b = 4;

function updateControllerL() {
  div1[b].classList.remove('active')
  b--
  div1[b].classList('active')
}

function nextSlide() {

  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateSlidePosition();
  updateControllerR()

}

let c = 0;

function updateControllerR() {
  console.log(c)
  div1[c].classList.remove('active')
  c++
  div1[c].classList.add('active')
  if(c==2){
  c=0;
  }
}
function updateSlidePosition() {
  const newPosition = -currentIndex * slides[0].offsetWidth;
  slidesContainer.style.transform = `translateX(${newPosition}px)`;
  // if()
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function per(){
  if(currentIndex>=1){
    div1.style.backgroundColor = "yellow";
  }
}
          // if(counter>b2) {
          //   alert('Вы коснулись второго объекта')
          //   counter=0;
          //   bl.style.left = counter + 'px';
          //   b++
          //   MP.innerHTML = b;

          //   div.style.color = "aqua";
          // ???div2 + active
          // }