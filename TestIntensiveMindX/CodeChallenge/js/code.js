let linkInput = document.getElementById("link-input");
let linkButton = document.getElementById("link-button");

let domainShrtco = document.getElementById("domainShrtco");
let domain9qr = document.getElementById("domain9qr");
let domainShiny = document.getElementById("domainShiny");

let buttons = document.getElementsByClassName("buttonDomain");


let generated = document.getElementById("generated");
let linkShortener = document.getElementById("link-shortener");




let choice;
for (let btn of buttons) {
  btn.onclick = () => {
    choice = btn.value;
  };
}

async function getAPI(link) {
  let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  
  let data = await request.json();
  return data.result;
}

linkButton.onclick = async () => {
  if (choice) {
    if (linkInput.value) {
        
      linkButton.innerHTML = `Đang Load`;
      let res = await getAPI(linkInput.value);
      linkButton.innerHTML = `Đã Load Xong`;

      generated.style.display = "block";

      if (choice === 1) {
        linkShortener.innerHTML = res.short_link;
      } else if (choice === 2) {
        linkShortener.innerHTML = res.short_link2;
      } else {
        linkShortener.innerHTML = res.short_link3;
      }
    } else {
      alert("Enter a link here: ");
    }
  } else {
    alert("Chọn 1 cái đi bạn ơi!");
  }
};
