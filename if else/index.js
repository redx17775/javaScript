const MySubscribe = document.getElementById("MySubscribe");
const MyVisa = document.getElementById("MyVisa");
const MyMasterCard = document.getElementById("MyMasterCard");
const Paypal = document.getElementById("MyPaypal");
const btn = document.getElementById("btn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
btn.onclick = function () {
  if (MySubscribe.checked) {
    subResult.innerText = "yay :D";
  } else {
    subResult.innerText = "boooo >:3";
  }

  if (MyVisa.checked) {
    paymentResult.innerText = "U used Visa :)";
  } else if (MyMasterCard.checked) {
    paymentResult.innerText = "U used MasterCard :)";
  } else if (Paypal.checked) {
    paymentResult.innerText = "U used Paypal :)";
  } else {
    paymentResult.innerText = "";
  }
};
