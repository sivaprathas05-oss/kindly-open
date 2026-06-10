let dialogue = [
  "Oii gym body 😏",
  "Aprom yenna inthe pakkam?",
  "Valkai epdi poguthu?",
  "Ennaye miss pannure thane hehehe 😂",
  "Seri I have something special for you…",
  "Do you like to see it?"
];

let dIndex = 0;

function show(id){
  document.querySelectorAll(".scene").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* SCENE 1 */
function startScene2(){
  show("scene2");
  document.getElementById("bgm1").play();
  dIndex = 0;
  document.getElementById("dialogue").innerText = dialogue[dIndex];
}

/* SCENE 2 TAP */
document.getElementById("scene2").addEventListener("click", () => {
  if(dIndex < dialogue.length - 1){
    dIndex++;
    document.getElementById("dialogue").innerText = dialogue[dIndex];
  } else {
    document.getElementById("yesBtn").style.display = "block";
  }
});

/* PHOTOS */
let photoIndex = 1;

function startPhotos(){
  show("scene3");
  photoIndex = 1;
  document.getElementById("photo").src = "image1.jpg";
}

function nextPhoto(){
  photoIndex++;
  if(photoIndex <= 8){
    document.getElementById("photo").src = `image${photoIndex}.jpg`;
  } else {
    show("afterPhotos");
  }
}

/* CASSETTE */
function sceneCassette(){
  show("scene4");
}

function sceneMood(){
  show("scene5");
  setTimeout(() => show("cassetteScene"), 1500);
}

function playSong(){
  document.getElementById("bgm2").play();
  document.getElementById("continueBtn").style.display = "block";
}

/* LETTER TYPEWRITER */
let text = `Hey Lesh…

I don’t really know how to start this, so I’ll just keep it simple.

I made this for you.

You don’t really notice it, but you’ve been part of a lot of my small happy moments.

Just talking to you… somehow makes things feel lighter.

The random conversations, the jokes, the chaos… I think I’ll always remember them in my own way.

They might seem small, but they stayed with me.

You matter more than you think.

Life moves fast. People come and go. But some people leave little footprints in your days without even trying.

You’re one of them.

Happy Birthday, Mithilesh ❤️

I hope today is filled with all the things that make you smile.

— Sree 🤍`;

let i = 0;

function sceneLetter(){
  show("letterScene");
  document.getElementById("bgm3").play();
  typeWriter();
}

function typeWriter(){
  if(i < text.length){
    document.getElementById("letterText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  }
}

/* END */
function sceneEnd(){
  show("endScene");
}

function restart(){
  location.reload();
}