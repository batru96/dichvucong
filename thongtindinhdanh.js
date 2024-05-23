const ho_va_ten = "User name"
const cmt = "CMT"
const cccd = "CCCD"
const sdt = "SDT"
const gioi_tinh = "GIOI TINH"
const noi_sinh = "NOI SINH"
const email = "EMAIL"
const que_quan = "QUE QUAN"
const dia_chi = "DIA CHI"

const values = [null, ho_va_ten, cmt, null, cccd, null, sdt, gioi_tinh, noi_sinh, email, que_quan, dia_chi]

const usernames = document.getElementsByClassName("username")

for (let i = 0; i < usernames.length; i++) {
  usernames.item(i).innerHTML = ho_va_ten
}

const rows = document.getElementsByClassName("row")
const iconElem = `<svg focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#28a745"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>`


for (let i = 0; i <= values.length; i++) {
  if (values[i]) {
    const rowElement = rows.item(i)
    rowElement.children[1].innerHTML = `<label class="font-weight-bold">${values[i]}</label>`
    if (i !== 10) {
      rowElement.children[2].innerHTML = `<div><p>${iconElem}</p></div>`
    }
  }
}