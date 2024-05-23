const username = "Trần Thi Mỹ Loan"

const usernames = document.getElementsByClassName("username")

for (let i = 0; i < usernames.length; i++) {
  usernames.item(i).innerHTML = username
}