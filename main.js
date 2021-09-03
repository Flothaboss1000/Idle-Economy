let bal = 0;
let balmulti = 1;
let gem = 0;
let adminpower = false;

var subsection = ["work", "hire", "store", "lootbox", "inv", "stats", "config"];

//Work
var work1 = { name: "work1", multi: 1, dur: 1000 };
var work2 = { name: "work2", multi: 10, dur: 7500 };
var work3 = { name: "work3", multi: 150, dur: 25000 };
var work4 = { name: "work4", multi: 600, dur: 45000 };
var work5 = { name: "work5", multi: 2500, dur: 120000 };

var workitems = [work1, work2, work3, work4, work5];

//Hire
var hire1 = { name: "hire1", quan: 0, multi: 1, cost: 50 };
var hire2 = { name: "hire2", quan: 0, multi: 5, cost: 200 };
var hire3 = { name: "hire3", quan: 0, multi: 20, cost: 1000 };
var hire4 = { name: "hire4", quan: 0, multi: 100, cost: 7500 };

var hireitems = [hire1, hire2, hire3, hire4];

//Lootbox

var lootboxlist = ["amateur","common","uncommon"]

var amateurchest = {
  id: "amateur",
  name: "Amateur Chest",
  type: "cash",
  cost: 1000,
  reward: [
    { type: "cash", quan: 2000 },
    { type: "cash", quan: 1000 },
    { type: "cash", quan: 500 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
  ],
};
var commonchest = {
  id: "common",
  name: "Common Chest",
  type: "cash",
  cost: 10000,
  reward: [
    { type: "gems", quan: 1 },
    { type: "cash", quan: 5000 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
  ],
};
var uncommonchest = {
  id: "uncommon",
  name: "Uncommon Chest",
  type: "cash",
  cost: 75000,
  reward: [
    { type: "gems", quan: 5 },
    { type: "gems", quan: 1 },
    { type: "gems", quan: 1 },
    { type: "cash", quan: 75000 },
    { type: "cash", quan: 35000 },
    { type: "cash", quan: 35000 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
    { type: "none", quan: 0 },
  ],
};

//Inv
var peanut = { name: "peanut", quan: 0, multi: 0.005, cost: 50 };
var candy = { name: "candy", quan: 0, multi: 0.02, cost: 175 };
var cupcake = { name: "cupcake", quan: 0, multi: 0.06, cost: 500 };
var egg = { name: "egg", quan: 0, multi: 100, cost: 1000000 };

var invitems = [peanut, candy, egg];

const balformat = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 999999 && num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num > 999999999 && num < 1000000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num > 999999999 && num < 1000000000000000) {
    return (num / 1000000000000).toFixed(1) + "T";
  } else if (num > 999999999999999) {
    return (num / 1000000000000000).toFixed(1) + "Qa";
  } else if (num < 1000) {
    return num;
  }
  // num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function setbal(num) {
  bal = num;
  document.getElementById("balhtml").innerHTML = balformat(num);
}

function addbal(num) {
  bal = bal + num;
  document.getElementById("balhtml").innerHTML = balformat(bal);
}

function subbal(num) {
  bal = bal - num;
  document.getElementById("balhtml").innerHTML = balformat(bal);
}

function setgem(num) {
  gem = num;
  document.getElementById("gemhtml").innerHTML = balformat(num);
}

function addgem(num) {
  gem = gem + num;
  document.getElementById("gemhtml").innerHTML = balformat(gem);
}

function subgem(num) {
  gem = gem - num;
  document.getElementById("gemhtml").innerHTML = balformat(gem);
}

function workbuy(cost, item) {
  if (cost <= bal) {
    bal = bal - cost;
    document.getElementById("balhtml").innerHTML = balformat(bal);
    document.getElementById(item + "B").disabled = false;
    document.getElementById(item + "P").style.visibility = "hidden";
  } else {
    notify(
      "red",
      `You don't have enough cash! You need ${balformat(cost - bal)}💵 more.`
    );
  }
}

function workbal(item) {
  {
    var elem = document.getElementById(item.name + "F");
    var width = 1;
    workdur = item.dur / 100;
    var id = setInterval(frame, workdur);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        addbal(item.multi);
        elem.style.width = "0%";
        document.getElementById(item.name + "B").disabled = false;
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById(item.name + "B").disabled = true;
      }
    }
  }
}

function boostbal(num, item, dur, cost) {
  if (cost <= gem) {
    var elem = document.getElementById(item + "F");
    balmulti = balmulti + num;
    document.getElementById(item + "B").disabled = true;
    gem = gem - cost;
    document.getElementById("gemhtml").innerHTML = gem;
    var width = 100;
    dur = dur / 100;
    var id = setInterval(frame, dur);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        balmulti = balmulti - num;
        elem.style.width = "0%";
        document.getElementById(item + "B").disabled = false;
      } else {
        width--;
        elem.style.width = width + "%";
        document.getElementById(item + "B").disabled = true;
      }
    }
  } else {
    notify("red", `You don't have enough gems! You need ${cost - gem}💎 more.`);
  }
}

function hirebal(item) {
  document.getElementById(item.name + "C").innerHTML = balformat(item.cost);
  if (bal >= item.cost) {
    item.quan = item.quan + 1;
    bal = bal - item.cost;
    document.getElementById(item.name + "Q").innerHTML = item.quan;
    document.getElementById("balhtml").innerHTML = balformat(bal);
    item.cost = Math.floor(item.cost * 1.1 + item.quan * 1.1);
    document.getElementById(item.name + "C").innerHTML = balformat(item.cost);
  } else {
    notify(
      "red",
      `You don't have enough cash! You need ${balformat(
        item.cost - bal
      )}💵 more.`
    );
  }
}

// function lootboxbuy(chest) {
//   var costmode, costemoji;
//   if (chest.type == "cash") {
//     costmode = bal;
//     costemoji = "💵";
//   } else if (chest.type == "gems") {
//     costmode = gem;
//     costemoji = "💎";
//   }
//   if (chest.cost < costmode) {
//     if (chest.type == "cash") {
//       subbal(chest.cost);
//     } else if (chest.type == "gems") {
//       subgem(chest.cost);
//     }
//     notify("blue", `Opening ${chest.name}! Wait for it...`);
//     for (let i = 0; i < lootboxlist.length; i++) {
//       document.getElementById(lootboxlist[i] + "B").disabled = true;
//     }
//     setTimeout(() => {
//       var chosen =
//         chest.reward[Math.floor(Math.random() * chest.reward.length)];
//       if (chosen.type == "none") {
//         notify("red", `Aw, you earned nothing...`);
//       } else if (chosen.type == "cash") {
//         notify("green", `Congrats, you earned ${balformat(chosen.quan)}💵!`);
//         bal = bal + chosen.quan;
//         document.getElementById("balhtml").innerHTML = balformat(bal);
//       } else if (chosen.type == "gems") {
//         notify("green", `Congrats, you earned ${balformat(chosen.quan)}💎!`);
//         gem = gem + chosen.quan;
//         document.getElementById("gemhtml").innerHTML = balformat(gem);
//       }
//     }, 3000);
//     setTimeout(() => {
//       for (let i = 0; i < lootboxlist.length; i++) {
//         document.getElementById(lootboxlist[i] + "B").disabled = false;
//       }
//     }, 4000);
//   } else {
//     notify(
//       "red",
//       `You don't have enough ${chest.type}! You need ${balformat(
//         chest.cost - costmode
//       )}${costemoji} more.`
//     );
//   }
//   costmode, costemoji, (costloc = undefined);
// }

function lootboxbuy(chest) {
  var costmode, costemoji;
  if (chest.type == "cash") {
    costmode = bal;
    costemoji = "💵";
  } else if (chest.type == "gems") {
    costmode = gem;
    costemoji = "💎";
  }
  if (chest.cost <= costmode) {
    if (chest.type == "cash") {
      subbal(chest.cost);
    } else if (chest.type == "gems") {
      subgem(chest.cost);
    }
    document.getElementById("lootboxnotif").style.left = "50%";
    document.getElementById("lootnotifmain").innerHTML = `Opening ${chest.name}! Wait for it...`;
    for (let i = 0; i < lootboxlist.length; i++) {
      document.getElementById(lootboxlist[i] + "B").disabled = true;
    }
    setTimeout(() => {
      var chosen =
        chest.reward[Math.floor(Math.random() * chest.reward.length)];
      if (chosen.type == "none") {
        document.getElementById("lootnotifmain").innerHTML = "Aw, you earned nothing...";
        document.getElementById("lootboxnotif").style.backgroundColor = "rgb(216, 108, 108)";
      } else if (chosen.type == "cash") {
        document.getElementById("lootnotifmain").innerHTML = "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(chosen.quan)}💵!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor = "rgb(139, 216, 108)";
        bal = bal + chosen.quan;
        document.getElementById("balhtml").innerHTML = balformat(bal);
      } else if (chosen.type == "gems") {
        document.getElementById("lootnotifmain").innerHTML = "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(chosen.quan)}💎!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor = "rgb(139, 216, 108)";
        gem = gem + chosen.quan;
        document.getElementById("gemhtml").innerHTML = balformat(gem);
      }
      // document.addEventListener("click", function () {
      //   document.getElementById("lootboxnotif").style.left = "150%";
      //   for (let i = 0; i < lootboxlist.length; i++) {
      //     document.getElementById(lootboxlist[i] + "B").disabled = false;
      //   }
      // })
    }, 3000);
    setTimeout(() => {
      for (let i = 0; i < lootboxlist.length; i++) {
        document.getElementById(lootboxlist[i] + "B").disabled = false;
      }
      document.getElementById("lootboxnotif").style.left = "200%";
      document.getElementById("lootboxnotif").style.backgroundColor = "rgb(175, 175, 175)";
      document.getElementById("lootnotifprize").style.fontSize = "0px";
    }, 6000);
  } else {
    notify(
      "red",
      `You don't have enough ${chest.type}! You need ${balformat(
        chest.cost - costmode
      )}${costemoji} more.`
    );
  }
  costmode, costemoji, (costloc = undefined);
}

function invbuy(item) {
  if (gem >= item.cost) {
    item.quan = item.quan + 1;
    gem = gem - item.cost;
    document.getElementById("gemhtml").innerHTML = balformat(gem);
    document.getElementById(item.name + "Q").innerHTML = item.quan;
    balmulti = balmulti + item.multi;
    document.getElementById("multihtml").innerHTML = balmulti;
    var costpart = (10 + item.quan) / 10;
    item.cost = (item.cost / (1 + (item.quan - 1) / 10)).toFixed(0);
    item.cost = (item.cost * costpart).toFixed(0);
    document.getElementById(item.name + "C").innerHTML = balformat(item.cost);
  } else {
    notify(
      "red",
      `You don't have enough gems! You need ${balformat(
        item.cost - gem
      )}💎 more.`
    );
  }
}

function loadnum(item) {
  item.forEach((element) => {
    document.getElementById(element.name + "Q").innerHTML = balformat(
      element.quan
    );
    document.getElementById(element.name + "C").innerHTML = balformat(
      element.cost
    );
  });
}

function calcbalgensec(item) {
  let total = 0;
  item.forEach((elem) => {
    let m = elem.multi * elem.quan;
    total = total + m;
  });

  return total;
}

function hireaddbal() {
  sum = 0;
  hireitems.forEach(function (item) {
    sum = sum + Math.floor(item.multi * item.quan * balmulti);
  });
  bal = bal + sum;
  document.getElementById("balhtml").innerHTML = balformat(bal);
}

function toggledarklight(mode) {
  if (mode == "dark") {
    document.body.style.backgroundColor = "rgb(66, 66, 66)";
    document.body.style.color = "white";
    document.getElementById("balcounter").style.backgroundColor =
      "rgb(66, 66, 66)";
    for (let i = 0; i < subsection.length; i++) {
      document.getElementById(subsection[i]).className = "sectiondm";
    }

    document.getElementById("dlon").style.visibility = "hidden";
    document.getElementById("dloff").style.visibility = "visible";
  } else if (mode == "light") {
    document.body.style.backgroundColor = "rgb(241, 241, 241)";
    document.body.style.color = "black";
    document.getElementById("balcounter").style.backgroundColor =
      "rgb(241, 241, 241)";
    for (let i = 0; i < subsection.length; i++) {
      document.getElementById(subsection[i]).className = "section";
    }

    document.getElementById("dlon").style.visibility = "visible";
    document.getElementById("dloff").style.visibility = "hidden";
  }
}

//Notification
function notify(type, text) {
  var notif = document.getElementById("notif");
  if (type == "white") {
    notif.style.backgroundColor = "white";
    notif.style.color = "black";
    notif.style.border = "3px solid lightgrey";
  }
  if (type == "red") {
    notif.style.backgroundColor = "rgb(245, 160, 160)";
    notif.style.color = "brown";
    notif.style.border = "3px solid rgb(214, 68, 68)";
  }
  if (type == "red") {
    notif.style.backgroundColor = "rgb(245, 160, 160)";
    notif.style.color = "brown";
    notif.style.border = "3px solid rgb(214, 68, 68)";
  }
  if (type == "yellow") {
    notif.style.backgroundColor = "rgb(245, 244, 160)";
    notif.style.color = "rgb(163, 165, 42)";
    notif.style.border = "3px solid rgb(214, 212, 68)";
  }
  if (type == "green") {
    notif.style.backgroundColor = "rgb(187, 245, 160)";
    notif.style.color = "rgb(91, 165, 42)";
    notif.style.border = "3px solid rgb(134, 214, 68)";
  }
  if (type == "blue") {
    notif.style.backgroundColor = "rgb(160, 235, 245)";
    notif.style.color = "rgb(42, 157, 165)";
    notif.style.border = "3px solid rgb(68, 185, 214)";
  }
  notif.innerHTML = text;
  notif.style.bottom = "0px";
  notif.addEventListener("click", function () {
    notif.style.bottom = "-100px";
  });
  return;
}

//Window Startup
window.onload = function () {
  document.getElementById("se-pre-con").style.animation = "loadingfade 0.5s";
  setTimeout(() => {
    document.getElementById("se-pre-con").style.visibility = "hidden";
  }, 500);
  document.getElementById("balhtml").innerHTML = balformat(bal);
  document.getElementById("gemhtml").innerHTML = balformat(gem);
  loadnum(hireitems);
  document.getElementById("multihtml").innerHTML = balmulti;
  var elaptime = new Date();
};


// Clock
window.setInterval(async function () {
  hireaddbal();
  document.getElementById("multihtml").innerHTML = balformat(balmulti);
  document.getElementById("autocashhtml").innerHTML = calcbalgensec(hireitems);
}, 1000);

//Admin Console
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key === "q") {
    adminconsole();
  }
});

function adminconsole() {
  if (adminpower == false) {
    if (confirm("Do you want to enable Experimental Mode for this session?")) {
      adminpower = true;
      document.getElementById("devmode").innerHTML = " (Experimental Mode)"
      return;
    }
  } else {
    let adminvalue = prompt(
      "Welcome to the Admin Console!\n\nEnter your command below.",
      ""
    );
    if (adminvalue == "setbal") {
      adminvalue = prompt(
        "Please provide the value to be set for the cash balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        bal = parseInt(adminvalue);
        document.getElementById("balhtml").innerHTML = balformat(bal);
      }
    }
    if (adminvalue == "addbal") {
      adminvalue = prompt(
        "Please provide the value to be added to the cash balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        bal = bal + parseInt(adminvalue);
        document.getElementById("balhtml").innerHTML = balformat(bal);
      }
    }
    if (adminvalue == "subbal") {
      adminvalue = prompt(
        "Please provide the value to be subtracted from the cash balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        if (parseInt(adminvalue) > bal) {
          window.alert(
            "You cannot subtract more than the cash balance itself!"
          );
        } else {
          bal = bal - parseInt(adminvalue);
          document.getElementById("balhtml").innerHTML = balformat(bal);
        }
      }
    }
    if (adminvalue == "setgem") {
      adminvalue = prompt(
        "Please provide the value to be set for the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        gem = parseInt(adminvalue);
        document.getElementById("gemhtml").innerHTML = balformat(gem);
      }
    }
    if (adminvalue == "addgem") {
      adminvalue = prompt(
        "Please provide the value to be added to the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        gem = gem + parseInt(adminvalue);
        document.getElementById("gemhtml").innerHTML = balformat(gem);
      }
    }
    if (adminvalue == "subgem") {
      adminvalue = prompt(
        "Please provide the value to be subtracted from the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        if (parseInt(adminvalue) > bal) {
          window.alert("You cannot subtract more than the gem balance itself!");
        } else {
          gem = gem - parseInt(adminvalue);
          document.getElementById("gemhtml").innerHTML = balformat(gem);
        }
      }
    }
    if (adminvalue == "reset") {
      if (confirm("Are you sure you want to reset the game?")) {
        bal = 0;
        gem = 0;
        document.getElementById("balhtml").innerHTML = balformat(bal);
        document.getElementById("gemhtml").innerHTML = balformat(gem);
      }
    }
  }
}
