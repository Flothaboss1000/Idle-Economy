var master = {
  //Important stats
  imp: {
    bal: 0,
    gem: 0,
    balmulti: 1,
    adminpower: false,
    isDark: false,
    autoSave: false,
    elaptime: 0,
    lastSession: undefined,
  },
  //User specific stats
  user: {
    name: "Anonymous",
    rank: "(Coming Soon!)",
    cookieConsent: false,
    ver: "0.5.0",
  },
  //Work Items
  workitems: [
    {
      id: "work1",
      multi: 1,
      dur: 1000,
      cost: 0,
      speed: 100,
      name: "Beg",
      desc: "Beg from the streets",
      unlocked: false,
    },
    {
      id: "work2",
      multi: 5,
      dur: 3000,
      cost: 20,
      speed: 100,
      name: "Shoe Polish",
      desc: "Polish people's shoes for pennies",
      unlocked: false,
    },
    {
      id: "work3",
      multi: 150,
      dur: 15000,
      cost: 250,
      speed: 100,
      name: "Cook",
      desc: "Bake a cake for Jake and Drake",
      unlocked: false,
    },
    {
      id: "work4",
      multi: 2500,
      dur: 45000,
      cost: 8000,
      speed: 100,
      name: "Editor",
      desc: "Write and edit Wikipedia articles",
      unlocked: false,
    },
    {
      id: "work5",
      multi: 20000,
      dur: 120000,
      cost: 40000,
      speed: 100,
      name: "Teacher",
      desc: "Teach students to differentiate between Java and JavaScript",
      unlocked: false,
    },
  ],
  //Hire Items
  hireitems: [
    {
      id: "hire1",
      quan: 0,
      multi: 1,
      cost: 200,
      name: "Dog",
      desc: "Hire a canine to find coins from ground",
    },
    {
      id: "hire2",
      quan: 0,
      multi: 5,
      cost: 1500,
      name: "Lemonade Stand",
      desc: "Create a self-serving lemonade stand",
    },
    {
      id: "hire3",
      quan: 0,
      multi: 30,
      cost: 20000,
      name: "Hawker",
      desc: "Make a hawker sell your old items in your local market",
    },
    {
      id: "hire4",
      quan: 0,
      multi: 100,
      cost: 125000,
      name: "Tourist Guide",
      desc: "Hire a guide to show people the Seven Wonders of the World",
    },
  ],
  //Inventory items
  invitems: [
    {
      id: "peanut",
      quan: 0,
      multi: 0.005,
      cost: 5,
      name: "Peanut",
      desc: "An overrated nut",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/peanuts_1f95c.png",
    },
    {
      id: "candy",
      quan: 0,
      multi: 0.02,
      cost: 15,
      name: "Candy",
      desc: "An Alpenliebe candy",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/candy_1f36c.png",
    },
    {
      id: "popcorn",
      quan: 0,
      multi: 0.06,
      cost: 50,
      name: "Popcorn",
      desc: "Butter popped corn",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/popcorn_1f37f.png",
    },
    {
      id: "cupcake",
      quan: 0,
      multi: 0.15,
      cost: 100,
      name: "Cupcake",
      desc: "A budget cake",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/cupcake_1f9c1.png",
    },
    {
      id: "noodles",
      quan: 0,
      multi: 0.4,
      cost: 250,
      name: "Noodles",
      desc: "Instant Cup Noodles",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/takeout-box_1f961.png",
    },
    {
      id: "hotdog",
      quan: 0,
      multi: 1.8,
      cost: 1000,
      name: "Hot Dog",
      desc: "Heated Canines",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/hot-dog_1f32d.png",
    },
    {
      id: "burger",
      quan: 0,
      multi: 7.5,
      cost: 5000,
      name: "Burger",
      desc: "McRonald's favourite",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/hamburger_1f354.png",
    },
    {
      id: "icecream",
      quan: 0,
      multi: 32,
      cost: 20000,
      name: "Ice Cream",
      desc: "Ice with cream",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/ice-cream_1f368.png",
    },
    {
      id: "pizza",
      quan: 0,
      multi: 900,
      cost: 80000,
      name: "Pizza",
      desc: "Pizza Time.",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/slice-of-pizza_1f355.png",
    },
    {
      id: "beer",
      quan: 0,
      multi: 5000,
      cost: 400000,
      name: "Beer",
      desc: "I like it. ANOTHER!",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/beer-mug_1f37a.png",
    },
    {
      id: "steak",
      quan: 0,
      multi: 27500,
      cost: 2000000,
      name: "Steak",
      desc: "Rare",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/cut-of-meat_1f969.png",
    },
    {
      id: "egg",
      quan: 0,
      multi: 1000000,
      cost: 100000000,
      name: "Egg",
      desc: "The Supreme Egg",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/egg_1f95a.png",
    },
  ],
};
//Default Version of Site to compare with saved session
var currentVer = "0.5.0";
document.getElementById("siteVer").innerHTML = currentVer;
//List of Sections
var subsection = ["work", "hire", "lootbox", "inv", "stats", "config"];

//GoTo Shortcut
var goto = [
  {
    name: "Work",
    id: "#work",
    color: "#ec008c, #fc6767",
  },
  {
    name: "Hire",
    id: "#hire",
    color: "#24FE41, #FDFC47",
  },
  {
    name: "Lootboxes",
    id: "#lootbox",
    color: "#333399, #ff00cc",
  },
  {
    name: "Inventory",
    id: "#inv",
    color: "#f12711, #f5af19",
  },
  {
    name: "Statistics",
    id: "#stats",
    color: "#3a7bd5, #00d2ff",
  },
  {
    name: "Config",
    id: "#config",
    color: "#283048, #859398",
  },
];

//Lootboxes
var lootboxlist = [
  {
    id: "amateur",
    name: "Amateur Chest",
    type: "cash",
    cost: 1000,
    reward: [
      { type: "cash", quan: 1500 },
      { type: "cash", quan: 1000 },
      { type: "cash", quan: 1000 },
      { type: "cash", quan: 500 },
    ],
  },
  {
    id: "common",
    name: "Common Chest",
    type: "cash",
    cost: 5000,
    reward: [
      { type: "gems", quan: 1 },
      { type: "cash", quan: 10000 },
      { type: "cash", quan: 5000 },
      { type: "cash", quan: 1000 },
      { type: "cash", quan: 1000 },
    ],
  },
  {
    id: "uncommon",
    name: "Uncommon Chest",
    type: "cash",
    cost: 15000,
    reward: [
      { type: "gems", quan: 5 },
      { type: "gems", quan: 5 },
      { type: "gems", quan: 1 },
      { type: "gems", quan: 1 },
      { type: "gems", quan: 1 },

      { type: "cash", quan: 45000 },
      { type: "cash", quan: 45000 },
      { type: "cash", quan: 45000 },

      { type: "cash", quan: 15000 },
      { type: "cash", quan: 15000 },
      { type: "cash", quan: 15000 },
      { type: "cash", quan: 15000 },
      { type: "cash", quan: 15000 },
      { type: "cash", quan: 15000 },

      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
    ],
  },
  {
    id: "rare",
    name: "Rare Chest",
    type: "cash",
    cost: 50000,
    reward: [
      { type: "gems", quan: 25 },
      { type: "gems", quan: 25 },
      { type: "gems", quan: 5 },
      { type: "gems", quan: 5 },
      { type: "gems", quan: 5 },

      { type: "cash", quan: 200000 },
      { type: "cash", quan: 200000 },
      { type: "cash", quan: 200000 },

      { type: "cash", quan: 50000 },
      { type: "cash", quan: 50000 },
      { type: "cash", quan: 50000 },
      { type: "cash", quan: 50000 },

      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
      { type: "none", quan: 0 },
    ],
  },
];

//Converts numeric value to currency system
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

//Collection of commands to modify balance values and update them in html
function setbal(num) {
  master.imp.bal = num;
  document.getElementById("balhtml").innerHTML = balformat(num);
}

function addbal(num) {
  master.imp.bal += num;
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
}

function subbal(num) {
  master.imp.bal -= num;
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
}

function setgem(num) {
  master.imp.gem = num;
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.num);
}

function addgem(num) {
  master.imp.gem += num;
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
}

function subgem(num) {
  master.imp.gem -= num;
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
}

//Buy a Work Item
function workbuy(item) {
  if (item.cost <= master.imp.bal) {
    subbal(item.cost);
    //Removes the unlock button and enables the work button for the given Work Item
    document.getElementById(item.id + "B").disabled = false;
    document.getElementById(item.id + "P").style.visibility = "hidden";
    item.unlocked = true;
  } else {
    notify(
      "red",
      `You don't have enough cash! You need ${balformat(
        item.cost - master.imp.bal
      )}💵 more.`
    );
  }
}

//Activate a Work Item
function workbal(item) {
  {
    var elem = document.getElementById(item.id + "F");
    var width = 1;
    workdur = item.dur / 100;
    var id = setInterval(frame, workdur);
    function frame() {
      //If bar is fully filled
      if (width >= 100) {
        //Add associated balance and enable the work button
        clearInterval(id);
        addbal(item.multi);
        elem.style.width = "0%";
        document.getElementById(item.id + "B").disabled = false;
      } else {
        //Increment the working bar and disable the work button
        width++;
        elem.style.width = width + "%";
        document.getElementById(item.id + "B").disabled = true;
      }
    }
    return;
  }
}

//Buy a Hire item
function hirebal(item) {
  document.getElementById(item.id + "C").innerHTML = balformat(item.cost);
  if (master.imp.bal >= item.cost) {
    item.quan = item.quan + 1;
    subbal(item.cost);
    document.getElementById(item.id + "Q").innerHTML = item.quan;
    //Increase the price of the current Hire item
    item.cost = Math.floor(item.cost * 1.1 + item.quan * 1.1);
    document.getElementById(item.id + "C").innerHTML = balformat(item.cost);
  } else {
    notify(
      "red",
      `You don't have enough cash! You need ${balformat(
        item.cost - master.imp.bal
      )}💵 more.`
    );
  }
}

//Buy a Lootbox and get associated random reward
function lootboxbuy(chest) {
  var costmode, costemoji;
  //Decides which balance to add the rewarded amount to
  if (chest.type == "cash") {
    costmode = master.imp.bal;
    costemoji = "💵";
  } else if (chest.type == "gems") {
    costmode = master.imp.gem;
    costemoji = "💎";
  }
  if (chest.cost <= costmode) {
    //Decides which balance to deduce the cost from
    if (chest.type == "cash") {
      subbal(chest.cost);
    } else if (chest.type == "gems") {
      subgem(chest.cost);
    }
    //Bring up the Lootbox notification
    document.getElementById("lootboxnotif").style.left = "50%";
    document.getElementById(
      "lootnotifmain"
    ).innerHTML = `Opening ${chest.name}! Wait for it...`;
    lootboxlist.forEach( (e) => {
      document.getElementById(`${e.id}B`).disabled = true
    });
    // for (let i = 0; i < lootboxlist.length; i++) {
    //   document.getElementById(lootboxlist[i] + "B").disabled = true;
    // }
    //Declare the prize after 3 seconds
    setTimeout(() => {
      var chosen =
        chest.reward[Math.floor(Math.random() * chest.reward.length)];
      //If the selected reward is nothing
      if (chosen.type == "none") {
        document.getElementById("lootnotifmain").innerHTML =
          "Aw, you earned nothing...";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(216, 108, 108)";
        //If the selected reward is cash
      } else if (chosen.type == "cash") {
        document.getElementById("lootnotifmain").innerHTML =
          "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(
          chosen.quan
        )}💵!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(139, 216, 108)";
        addbal(chosen.quan);
        //If the selected reward is gems
      } else if (chosen.type == "gems") {
        document.getElementById("lootnotifmain").innerHTML =
          "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(
          chosen.quan
        )}💎!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(139, 216, 108)";
        addgem(chosen.quan);
      }
      // document.addEventListener("click", function () {
      //   document.getElementById("lootboxnotif").style.left = "150%";
      //   for (let i = 0; i < lootboxlist.length; i++) {
      //     document.getElementById(lootboxlist[i] + "B").disabled = false;
      //   }
      // })
    }, 3000);
    //Hide the lootbox notification 3 seconds later
    setTimeout(() => {
      lootboxlist.forEach( (e) => {
        document.getElementById(`${e.id}B`).disabled = false
      });
      document.getElementById("lootboxnotif").style.left = "200%";
      document.getElementById("lootboxnotif").style.backgroundColor =
        "rgb(175, 175, 175)";
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

//Buy an Inventory item
function invbuy(item) {
  if (master.imp.gem >= item.cost) {
    item.quan += 1;
    subgem(item.cost);
    document.getElementById(item.id + "Q").innerHTML = item.quan;
    master.imp.balmulti += item.multi;
    //Update the Cash Multiplier statistics
    document.getElementById("multihtml").innerHTML =
      master.imp.balmulti.toPrecision(3);
    var costpart = (10 + item.quan) / 10;
    item.cost = (item.cost / (1 + (item.quan - 1) / 10)).toFixed(0);
    item.cost = (item.cost * costpart).toFixed(0);
    document.getElementById(item.id + "C").innerHTML = balformat(item.cost);
  } else {
    notify(
      "red",
      `You don't have enough gems! You need ${balformat(
        item.cost - master.imp.gem
      )}💎 more.`
    );
  }
}

//Display quantity and cost of Hire elements
function loadnum(item) {
  item.forEach((element) => {
    document.getElementById(element.id + "Q").innerHTML = balformat(
      element.quan
    );
    document.getElementById(element.id + "C").innerHTML = balformat(
      element.cost
    );
  });
}
//Calculate total cash multiplier from all purchased Inventory items
function calcbalgensec(item) {
  let total = 0;
  item.forEach((elem) => {
    let m = elem.multi * elem.quan;
    total = total + m;
  });

  return total;
}

//Add balance corresponding to quanity of associated Hire item
function hireaddbal() {
  sum = 0;
  master.hireitems.forEach(function (item) {
    sum += Math.floor(item.multi * item.quan * master.imp.balmulti);
  });
  addbal(sum);
}

//Theme Switch Detection
document.querySelector("#switchTheme input").addEventListener("change", () => {
  if (!master.imp.isDark) {
    document.body.className = "dark";
    master.imp.isDark = true;
  } else {
    document.body.className = "light";
    master.imp.isDark = false;
  }
});

//Autosave Switch Detection
document
  .querySelector("#switchAutosave input")
  .addEventListener("change", () => {
    if (!master.imp.autoSave) {
      master.imp.autoSave = true;
      notify("green", "Auto-save enabled");
    } else {
      master.imp.autoSave = false;
      notify("green", "Auto-save disabled");
    }
    localStorage.setItem("session", JSON.stringify(master));
  });

//Autosave game every 5 minutes
window.setInterval(async function () {
  if (master.imp.autoSave) {
    localStorage.setItem("session", JSON.stringify(master));
    notify("green", "Progress autosaved");
  }
}, 300000);

//Mobile Shortcuts Activator
var isExpanded = false;
var shortcuts = ["gt", "sv"];
function expandmobile() {
  //If shortcuts were previously not expanded (default)
  if (!isExpanded) {
    //Bring shortcuts to right edge of screen
    shortcuts.forEach((e) => {
      document.getElementById(e).style.right = "10px";
    });
    //Rotate the Expand shortcut
    document.getElementById("expand").style.transform = "rotate(180deg)";
    document.getElementById("expand").style.boxShadow =
      " 0px -5px 15px rgba(0, 0, 0, 0.247)";
    isExpanded = true;
    //If shortcuts were previously expanded
  } else {
    //Push shortcuts beyond right boundary
    shortcuts.forEach((e) => {
      document.getElementById(e).style.right = "-60px";
    });
    //Rotate the Expand shortcut
    document.getElementById("expand").style.transform = "rotate(0deg)";
    document.getElementById("expand").style.boxShadow =
      " 0px 5px 15px rgba(0, 0, 0, 0.247)";
    isExpanded = false;
  }
  return;
}

//Notification
function notify(type, text) {
  var notifchecker = document.getElementsByClassName("notif");
  var notif = notifchecker[0];
  //Take input for type of notification and color it accordingly
  if (type == "white") notif.id = "notif-white";
  if (type == "red") notif.id = "notif-red";
  if (type == "yellow") notif.id = "notif-yellow";
  if (type == "green") notif.id = "notif-green";
  if (type == "blue") notif.id = "notif-blue";
  notif.innerHTML = text;
  notif.style.bottom = "10px";
  //Set the notification to be dismissed after 4 seconds (approx) automatically
  notiftime = 4;
  //Dismiss the notification if user clicks on it
  notif.addEventListener("click", function () {
    notif.style.bottom = "-100px";
  });
  return;
}

//Show incompatibility for Firefox/Safari
window.addEventListener("load", function () {
  if (navigator.userAgent.indexOf("Firefox") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Firefox. Some things may lag or break."
    );
  } else if (navigator.userAgent.indexOf("SamsungBrowser") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Samsung Browser. Some things may lag or break."
    );
  } else if (navigator.userAgent.indexOf("Opera") > -1 || navigator.userAgent.indexOf("OPR") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Opera. Some things may lag or break."
    );
  } else if (navigator.userAgent.indexOf("Trident") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Trident. Some things may lag or break."
    );
  } else if (navigator.userAgent.indexOf("Edge") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Internet Explorer. Some things may lag or break."
    );
  } else if (navigator.userAgent.indexOf("Edg") > -1) {
    return
  } else if (navigator.userAgent.indexOf("Chrome") > -1) {
   return
  } else if (navigator.userAgent.indexOf("Safari") > -1) {
    notify(
      "yellow",
      "The site isn't optimized with Safari. Some things may lag or break."
    );
  } else {
return
  }
});

//Window Startup
let notiftime = null;
window.onload = function () {
  //Hide the loading screen
  var loadingScreen = document.getElementById("se-pre-con");
  loadingScreen.style.animationName = "loadingfade";
  loadingScreen.style.animationDuration = "0.5s";
  loadingScreen.style.animationFillMode = "forwards";
  setTimeout(() => {
    document.getElementById("se-pre-con").style.visibility = "hidden";
  }, 500);

  //Load previous session, if any
  if (JSON.parse(localStorage.getItem("session"))) {
    master = JSON.parse(localStorage.getItem("session"));
    notify("green", `Welcome back! Progress loaded.`);
  }
  //Enter code related to saved session below

  //Load and display important stats
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
  document.getElementById("multihtml").innerHTML =
    master.imp.balmulti.toPrecision(3);

  //If user did not accept cookies
  if (!master.user.cookieConsent) {
    document.getElementsByClassName("cookienotif")[0].style.display = "block";
  } else {
    //Load elements requiring cookies
    var saveoption = document.getElementsByClassName("saveoption");
    for (let i = 0; i < saveoption.length; i++) {
      saveoption[i].style.display = "list-item";
    }
    document.getElementsByClassName("save")[0].style.display = "block";
  }

  //If user enabled cheats
  if (master.imp.adminpower) {
    document.getElementById("devmode").innerHTML = " (Experimental Mode)";
  }

  //If user enabled dark mode
  if (master.imp.isDark) {
    document.body.className = "dark";
    document.getElementById("inputTheme").setAttribute("checked", "true");
  } else {
    document.body.className = "light";
  }

  //Display the AutoSave switch as activated
  if (master.imp.autoSave) {
    document.getElementById("inputAutosave").setAttribute("checked", "true");
  }

  //Work
  master.workitems.forEach((a, i) => {
    var item = document.createElement("li");
    var target = document.querySelector("#work ul");
    var isDisabled1 = "disabled";
    var isDisabled2 = "visible";
    if (a.unlocked) {
      isDisabled1 = "";
      isDisabled2 = "hidden";
    }
    item.innerHTML = `<h3>${a.name} <span id="pro">(+${balformat(
      a.multi
    )}💵)</span></h3>
      <p>${a.desc}<br /></p>
      <button
      class="button"
      id="${a.id}B"
      onclick="workbal(master.workitems[${i}])"
      ${isDisabled1}
      >
      Work (${a.dur / 1000}s)
      </button>
      <button class="button" id="${
        a.id
      }P" onclick="workbuy(master.workitems[${i}])"
      style="visibility: ${isDisabled2}"
      >
      Unlock (${balformat(a.cost)}💵)
      </button>
      <div
      id="${a.id}E"
      style="
      width: 100%;
      background-color: rgb(131, 131, 131);
      border-radius: 10px;
      "
      >
      <div
      id="${a.id}F"
      style="
      width: 0%;
      height: 20px;
      background-image: linear-gradient(
        to right,
       #ec008c,
       #fc6767);
      box-shadow: 0px 5px 10px rgba(255, 107, 107, 0.363);
      border-radius: 10px;
      "
      ></div>
      </div>`;
    target.appendChild(item);
  });

  //Hire
  master.hireitems.forEach((a, i) => {
    var item = document.createElement("li");
    var target = document.querySelector("#hire ul");
    item.innerHTML = `
    <p class="owned">Owned: <span id="${a.id}Q"></span></p>
      <h3>${a.name} <span id="pro">(+${a.multi}💵/s)</span></h3>
      <p>${a.desc}<br /></p>
      <button class="button" onclick="hirebal(master.hireitems[${i}]) ">
      Hire (<span id="${a.id}C"></span>💵)
      </button>
      </li>`;
    target.appendChild(item);
  });

  //Inv
  master.invitems.forEach((a, i) => {
    var item = document.createElement("a");
    var target = document.querySelector(".invA");
    item.innerHTML = `<img
      src=${a.img}
      alt="${a.name}"
      />
      <h2>${a.name}</h2>
      <p>${a.desc}</p>
      <p>Multiplier: ${a.multi}</p>
      <button class="button" onclick="invbuy(master.invitems[${i}])">
      Buy (<span id="${a.id}C">${balformat(a.cost)}</span>💎)
      </button>
      <p class="owned">Owned: <span id="${a.id}Q">0</span></p>
      `;
    target.appendChild(item);
  });

  //GoTo
  goto.forEach((a) => {
    var item = document.createElement("a");
    item.href = a.id;
    item.style = `background-image: linear-gradient(to right, ${a.color});`;
    var target = document.querySelector(".goto");
    item.innerHTML = a.name;
    target.appendChild(item);
  });

  loadnum(master.hireitems);
};

//Window Shutdown
window.onunload = function () {
  if (master.imp.autoSave) {
    savesession();
  }
};

// Clock
window.setInterval(async function () {
  hireaddbal();
  // Increment seconds and disaply in Time Elapsed statistics
  master.imp.elaptime++;
  var currenttime = `${String(
    Math.floor(master.imp.elaptime / 3600) % 24
  ).padStart(2, "0")}:${String(
    Math.floor(master.imp.elaptime / 60) % 60
  ).padStart(2, "0")}:${String(master.imp.elaptime % 60).padStart(2, "0")}`;
  document.getElementById("timeelapsehtml").innerHTML = currenttime;

  //Update other stat values
  document.getElementById("multihtml").innerHTML = balformat(
    master.imp.balmulti.toPrecision(3)
  );
  document.getElementById("autocashhtml").innerHTML = calcbalgensec(
    master.hireitems
  );

  //Detect if a notification is displayed, decrement it to 0 then hide it
  if (typeof notiftime == "number") {
    if (notiftime > 0) {
      notiftime--;
    } else if (notiftime == 0) {
      var notif = document.getElementsByClassName("notif")[0];
      notif.style.bottom = "-100px";
      notiftime = null;
    }
  } else return;
}, 1000);

//Admin Console
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key === "q") adminconsole();
});
function adminconsole() {
  if (master.imp.adminpower == false) {
    if (confirm("Do you want to enable Experimental Mode for this session?")) {
      document.getElementById("devmode").innerHTML = " (Experimental Mode)";
      master.imp.adminpower = true;
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
        master.imp.bal = parseInt(adminvalue);
        document.getElementById("balhtml").innerHTML = balformat(
          master.imp.bal
        );
      }
    }
    if (adminvalue == "addbal") {
      adminvalue = prompt(
        "Please provide the value to be added to the cash balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        master.imp.bal += parseInt(adminvalue);
        document.getElementById("balhtml").innerHTML = balformat(
          master.imp.bal
        );
      }
    }
    if (adminvalue == "subbal") {
      adminvalue = prompt(
        "Please provide the value to be subtracted from the cash balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        if (parseInt(adminvalue) > master.imp.bal) {
          window.alert(
            "You cannot subtract more than the cash balance itself!"
          );
        } else {
          master.imp.bal -= parseInt(adminvalue);
          document.getElementById("balhtml").innerHTML = balformat(
            master.imp.bal
          );
        }
      }
    }
    if (adminvalue == "setgem") {
      adminvalue = prompt(
        "Please provide the value to be set for the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        master.imp.gem = parseInt(adminvalue);
        document.getElementById("gemhtml").innerHTML = balformat(
          master.imp.gem
        );
      }
    }
    if (adminvalue == "addgem") {
      adminvalue = prompt(
        "Please provide the value to be added to the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        master.imp.gem += parseInt(adminvalue);
        document.getElementById("gemhtml").innerHTML = balformat(
          master.imp.gem
        );
      }
    }
    if (adminvalue == "subgem") {
      adminvalue = prompt(
        "Please provide the value to be subtracted from the gem balance.",
        ""
      );
      if (!isNaN(parseInt(adminvalue))) {
        if (parseInt(adminvalue) > master.imp.bal) {
          window.alert("You cannot subtract more than the gem balance itself!");
        } else {
          master.imp.gem -= parseInt(adminvalue);
          document.getElementById("gemhtml").innerHTML = balformat(
            master.imp.gem
          );
        }
      }
    }
    if (adminvalue == "reset") {
      if (confirm("Are you sure you want to reset the game?")) {
        localStorage.removeItem("session");
        window.location.reload();
      }
    }
  }
}

//Saving/Loading/Deleting Cookies
function savesession() {
  localStorage.setItem("session", JSON.stringify(master));
  notify("green", "Progress saved");
}

function loadsession() {
  if (confirm("Are you sure you want to load the previous session?")) {
    if (JSON.parse(localStorage.getItem("session"))) {
      master = JSON.parse(localStorage.getItem("session"));
      notify("green", "Progress loaded");
    } else {
      notify("red", "No previous session was detected.");
    }
  }
}

function deletesession() {
  if (
    confirm(
      "All progress will be lost! Are you sure you want to reset everything?"
    )
  ) {
    localStorage.removeItem("session");
    master.imp.autoSave = false;
    localStorage.removeItem("session");
    window.location.reload();
  }
}

//Accepting/declining cookies
function acceptcookies() {
  var saveoption = document.getElementsByClassName("saveoption");
  for (let i = 0; i < saveoption.length; i++) {
    saveoption[i].style.display = "list-item";
  }
  document.getElementsByClassName("save")[0].style.display = "block";
  master.user.cookieConsent = true;
  declinecookies();
}

function declinecookies() {
  document.getElementsByClassName("cookienotif")[0].style.top = "-300px";
  modal.style.display = "none";
}

//  Cookie consent modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Temporary text to chnage commit name
