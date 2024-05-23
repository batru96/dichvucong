const username = "Trần Thi Mỹ Loan"
const address = "Địa chỉ ở đây"

const usernames = document.getElementsByClassName("username")

for (let i = 0; i < usernames.length; i++) {
  usernames.item(i).innerHTML = username
}

const addressElem = document.getElementById("keyDiaChi")
addressElem.getElementsByClassName("value")[0].innerHTML = address