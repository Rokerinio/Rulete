var account = 10000;
var cost1 = 100;
var cost2 = 1000;
var cost3 = 5000;
var fate = 0;

function losuj() {
  var sum = document.getElementById("wyplata").value;

  if (sum > account) {
    alert("Nie posiadasz tylu pieniędzy");
  } else if (sum == "") {
    alert("Wybierz kwotę");
  } else if (sum != "" && sum <= account) {
    fate = fate + 1;
  }

  if (fate != 1 && sum != "" && sum <= account) {
    alert("Najpierw wybierz skrzynie");
    fate = fate - 1;
  } else if (sum <= account) {
    min = Math.ceil(1);
    max = Math.floor(9);
    resault = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("skrz1").src = "chest.jpg";
    document.getElementById("skrz2").src = "chest.jpg";
    document.getElementById("skrz3").src = "chest.jpg";
    document.getElementById("skrz4").src = "chest.jpg";
    document.getElementById("skrz5").src = "chest.jpg";
    document.getElementById("skrz6").src = "chest.jpg";
    document.getElementById("skrz7").src = "chest.jpg";
    document.getElementById("skrz8").src = "chest.jpg";
    document.getElementById("skrz9").src = "chest.jpg";

    account = account - sum;
    document.getElementById("stank").innerHTML = "Twój stan konta to " + account;
  }
}

function clean() {
  sum = document.getElementById("Kwota");
  wyplata.value = "";

  document.getElementById("skrz1").src = "chest.jpg";
  document.getElementById("skrz2").src = "chest.jpg";
  document.getElementById("skrz3").src = "chest.jpg";
  document.getElementById("skrz4").src = "chest.jpg";
  document.getElementById("skrz5").src = "chest.jpg";
  document.getElementById("skrz6").src = "chest.jpg";
  document.getElementById("skrz7").src = "chest.jpg";
  document.getElementById("skrz8").src = "chest.jpg";
  document.getElementById("skrz9").src = "chest.jpg";
}

function box1() {
  if (account >= 100 && fate == 0) {
    wyplata.value = cost1;
  }
}

function box2() {
  if (account >= 1000 && fate == 0) {
    wyplata.value = cost2;
  } else if (fate != 0) {
    alert("Najpierw wybierz skrzynie");
  } else {
    alert("Nie masz tylu pieniędzy !");
  }
}

function box3() {
  if (account >= 5000 && fate == 0) {
    wyplata.value = cost3;
  } else if (fate != 0) {
    alert("Najpierw wybierz skrzynie");
  } else {
    alert("Nie masz tylu pieniędzy !");
  }
}

function wyg1() {
  if (fate == 1 && resault == 1) {
    document.getElementById("skrz1").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz1").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz1").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg2() {
  if (fate == 1 && resault == 2) {
    document.getElementById("skrz2").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz2").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz2").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg3() {
  if (fate == 1 && resault == 3) {
    document.getElementById("skrz3").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz3").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz3").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg4() {
  if (fate == 1 && resault == 4) {
    document.getElementById("skrz4").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz4").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz4").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg5() {
  if (fate == 1 && resault == 5) {
    document.getElementById("skrz5").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz5").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz5").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg6() {
  if (fate == 1 && resault == 6) {
    document.getElementById("skrz6").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz6").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz5").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg7() {
  if (fate == 1 && resault == 7) {
    document.getElementById("skrz7").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz7").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz7").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg8() {
  if (fate == 1 && resault == 8) {
    document.getElementById("skrz8").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz8").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz8").src = "pudlo.jpg";
  }
  fate = 0;
}

function wyg9() {
  if (fate == 1 && resault == 9) {
    document.getElementById("skrz9").src = "wygrana.jpg";
    var summ = document.getElementById("wyplata").value;
    account = account + summ * 2;
    document.getElementById("stank").innerHTML =
      "Twój stan konta to " + account;
    document.getElementById("skrz9").src = "wygrana.jpg";
  } else if (fate != 1) {
    //nic
  } else {
    document.getElementById("skrz9").src = "pudlo.jpg";
  }
  fate = 0;
}
