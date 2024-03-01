// const ul = document.getElementById('list-item');
// console.log(ul.innerText)


// const ul = document.querySelector('ul');
// ul.innerHTML = "<p>hellow</p>";

//remove attribute
// document.querySelector("h1").removeAttribute("id");
  // document.querySelector("h2").removeAttribute("class");
 
  // how to do append child 
//   const ul = document.querySelector("ul");
//   const h1  = document.createElement("h1");
//   // console.log(li);
//   h1.innerText = "ton ton";
//   console.log(h1);
 
// ul.appendChild(h1);

// how to add class in an Element 
// const h2 = document.querySelector("h2");
// h2.classList.add("first", "second", "third");
// h2.classList.remove("first");
// console.log(h2);



// how to insert Element before ,,, ekhane firstly parent k dorte hobe then jar moddhe hobe take dorte hobe
// step-1:parent notir polake dore pelbo
const ul = document.querySelector("ul");
// step-2: jar moddhe hobe se notir polake id dia dorte hobe 
const second = document.getElementById("second");
// step-3: je element ta banabo ta likhte hobe 
const li = document.createElement("li");
// step-4:jeta likhbo, ta innertext dia ekhane likhte hobe 
li.innerText = "Hellow guru";
// step-5: ebar jeta insert korbo seta korar pala 
ul.insertBefore(li, second);


// remove() , remove child()
// ul.remove();

// manupulate means - sundor vabe system gula use kora 