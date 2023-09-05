const url = "https://jsonplaceholder.typicode.com/users";

const name = document.querySelector(".name");
const mail = document.querySelector(".mail");
const goTo1 = document.querySelector(".button-log1");
const login = document.querySelector(".login");
const message = document.querySelector(".message");

goTo1.addEventListener("click", () => {
  const nameValue = name.value;
  const mailValue = mail.value;
  fetch(url + `?username=${nameValue}&email=${mailValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.length === 0 ? (message.innerText = "Invalid data") : render();
    });
});

function render() {
  login.innerHTML = `<div class ="login2"><input type="text" class="company" placeholder="Your company is: "><button class="button-log2">Go To</button><p class="message"></p></div>`;
  const goTo2 = document.querySelector(".button-log2");
  const company = document.querySelector(".company");

  goTo2.addEventListener("click", () => {
    const message = document.querySelector(".message");
    const companyValue = company.value;
    fetch(url + `?name=${companyValue}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.length === 0
          ? (message.innerText = "Invalid data")
          : login.innerHTML = `<p class="message">Success!!</p><button class="back">Go back</button>`;

        const backBtn = document.querySelector(".back");
        backBtn.addEventListener("click", () => location.reload());
      });
  });
}

//   username: "Bret"
//   email: "Sincere@april.biz"
//   name: "Leanne Graham"
