const textarea = document.getElementById('textArea')
const theme1 = document.getElementById("theme1")
const theme2 = document.getElementById("theme2")
const theme3 = document.getElementById("theme3")

let a = ""
let b = ""
let op = ""

theme1.onclick = function () {
  theme2.setAttribute("style","background-color:inherit")
  theme3.setAttribute("style","background-color:inherit")
  theme1.setAttribute("style","background-color:hsl(25, 98%, 40%)")
  document.documentElement.style.cssText = "--main-background:hsl(222, 26%, 31%);--keypad-background:  hsl(223, 31%, 20%);--toggle-background:  hsl(223, 31%, 20%);--screen-background: hsl(224, 36%, 15%);--key-color: hsl(30, 25%, 89%);--key-shadow:  hsl(28, 16%, 65%);--key-font-color:hsl(221, 14%, 31%);--key-hover: hsl(0, 0%, 93%);--key-rd:   hsl(225, 21%, 49%);--key-red-shadow:  hsl(224, 28%, 35%);--key-red-font-color: hsl(0, 0%, 100%);--key-equal: hsl(6, 63%, 50%);--key-equal-shadow:  hsl(6, 70%, 34%);--white:  hsl(0, 0%, 100%);--cal-color:hsl(0, 0%, 100%);--li-color:hsl(25, 98%, 40%);"
}

theme2.onclick = function () {
  theme2.setAttribute("style","background-color:hsl(25, 98%, 40%)")
  theme1.setAttribute("style","background-color:inherit")
  theme3.setAttribute("style","background-color:inherit")
  document.documentElement.style.cssText = "--main-background: hsl(0, 0%, 90%);--keypad-background: hsl(0, 5%, 81%);--toggle-background: hsl(0, 5%, 81%);--screen-background: hsl(0, 0%, 93%);--key-color: hsl(30, 25%, 89%);--key-shadow:  hsl(28, 16%, 65%);--key-font-color:hsl(60, 10%, 19%);--key-hover: hsl(0, 0%, 93%);--key-rd:   hsl(185, 42%, 37%);--key-red-shadow: hsl(185, 58%, 25%);--key-red-font-color: hsl(45, 7%, 89%);--key-equal:hsl(25, 98%, 40%);--key-equal-shadow: hsl(25, 99%, 27%);--white:  hsl(0, 0%, 100%);--cal-color:hsl(60, 10%, 19%);--li-color:hsl(25, 98%, 40%);"
}

theme3.onclick = function () {
  theme3.setAttribute("style","background-color:hsl(177, 92%, 70%)")
  theme2.setAttribute("style","background-color:inherit")
  theme1.setAttribute("style","background-color:inherit")
    document.documentElement.style.cssText = "--main-background: hsl(268, 75%, 9%);--keypad-background:  hsl(268, 71%, 12%);--toggle-background: hsl(268, 71%, 12%);--screen-background: hsl(268, 71%, 12%);--key-color:hsl(268, 47%, 21%);--key-shadow:hsl(290, 70%, 36%);--key-font-color: hsl(52, 100%, 62%);--key-hover:hsl(281, 92%, 19%);--key-rd: hsl(281, 89%, 26%);--key-red-shadow:hsl(285, 91%, 52%);--key-red-font-color: hsl(45, 7%, 89%);--key-equal: hsl(176, 100%, 44%);--key-equal-shadow: hsl(177, 92%, 70%);--white:  hsl(0, 0%, 100%);--cal-color:hsl(52, 100%, 62%);--li-color:hsl(177, 92%, 70%);"
  }




function operation() {
  switch (op) {
    case '+':
      a = String(Number(a) + Number(b))
      textarea.innerHTML = a
      op = ""
      b = ""
      break

    case '-':
      a = String(Number(a) - Number(b))
      textarea.innerHTML = a
      op = ""
      b = ""
      break

    case '*':
      a = String(Number(a) * Number(b))
      textarea.innerHTML = a
      op = ""
      b = ""
      break

    case '/':
      if (b == "0") {
        alert("cannot divide by zero")
        a = ""; b = ""; op = "";
      } else {
        a = String(Number(a) + Number(b))
        textarea.innerHTML = a
        op = ""
        b = ""
        break
      }
  }
}

function perform(num) {

  if (num == "=") {
    if (a != "" & b != "") {
      operation();
    }
  }
  else if ((num == "+") || (num == "-") || (num == "/") || (num == "*")) {
    if ((a != "") && (b == "")) {
      op = num
      textarea.innerHTML = a + op
    }
    else if ((a != "") && (b != "")) {
      operation()
      op = num
      textarea.innerHTML = a + op
    }
  }
  else {
    if (op == "") {
      a = a + num
      textarea.innerHTML = a
    } else {
      b = b + num
      textarea.innerHTML = a + op + b
    }
  }
}

function spclbtn(m) {

  switch (m) {
    case 'reset':
      location.reload();
      break;
    case 'bs':
      if ((a != "") && (op != "")) {
        if (b == "") {
          op = "";
          textarea.innerHTML = a;
        }
        else//b has some value
        {
          var bx = new Array();
          bx = b.split("");
          bx.pop();
          b = bx.join("");
          textarea.innerHTML = a + op + b;
        }
      }
      else if ((a != "") && (op == "")) {
        var ax = new Array();
        ax = a.split("");
        ax.pop();
        a = ax.join("");
        textarea.innerHTML = a;
      }
      break;
  }
}
