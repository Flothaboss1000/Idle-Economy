var master = {
  imp: {
    bal: 0,
    gem: 0,
    balmulti: 1,
    adminpower: false,
    isDark: false,
    autoSave: false,
    elaptime: 0,
  },
  user: {
    name: "Anonymous",
    rank: "(Coming Soon!)",
  },
  workitems: [
    {
      id: "work1",
      multi: 1,
      dur: 1000,
      cost: 0,
      name: "Beg",
      desc: "Beg from the streets",
      unlocked: false,
    },
    {
      id: "work2",
      multi: 10,
      dur: 7500,
      cost: 20,
      name: "Shoe Polish",
      desc: "Polish people's shoes for pennies",
      unlocked: false,
    },
    {
      id: "work3",
      multi: 150,
      dur: 25000,
      cost: 350,
      name: "Cook",
      desc: "Bake a cake for Jake and Drake",
      unlocked: false,
    },
    {
      id: "work4",
      multi: 600,
      dur: 45000,
      cost: 2000,
      name: "Editor",
      desc: "Write and edit Wikipedia articles",
      unlocked: false,
    },
    {
      id: "work5",
      multi: 2500,
      dur: 120000,
      cost: 15000,
      name: "Teacher",
      desc: "Teach students to differentiate between Java and JavaScript",
      unlocked: false,
    },
  ],
  hireitems: [
    {
      id: "hire1",
      quan: 0,
      multi: 1,
      cost: 50,
      name: "Dog",
      desc: "Hire a canine to find coins from ground",
    },
    {
      id: "hire2",
      quan: 0,
      multi: 5,
      cost: 200,
      name: "Lemonade Stand",
      desc: "Create a self-serving lemonade stand",
    },
    {
      id: "hire3",
      quan: 0,
      multi: 20,
      cost: 1000,
      name: "Hawker",
      desc: "Make a hawker sell your old items in your local market",
    },
    {
      id: "hire4",
      quan: 0,
      multi: 100,
      cost: 7500,
      name: "Tourist Guide",
      desc: "Hire a guide to show people the Seven Wonders of the World",
    },
  ],
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
      id: "cheeseburger",
      quan: 0,
      multi: 7.5,
      cost: 5000,
      name: "Cheeseburger",
      desc: "Donald McRonald's favourite",
      img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/hamburger_1f354.png",
    },
    {
      id: "icecream",
      quan: 0,
      multi: 32,
      cost: 20000,
      name: "Ice Cream",
      desc: "Decently expensive dessert",
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

var subsection = ["work", "hire", "lootbox", "inv", "stats", "config"];

//GoTo
var goto = [
  {
    name: "Work",
    id: "#work",
    color: "rgb(196, 0, 114), rgb(255, 0, 55)",
  },
  {
    name: "Hire",
    id: "#hire",
    color: "rgb(179, 255, 0), rgb(238, 255, 0)",
  },
  {
    name: "Lootboxes",
    id: "#lootbox",
    color: "rgb(99, 0, 212), rgb(214, 0, 196)",
  },
  {
    name: "Inventory",
    id: "#inv",
    color: "rgb(255, 81, 0), rgb(255, 174, 0)",
  },
  {
    name: "Statistics",
    id: "#stats",
    color: "rgb(0, 98, 245), rgb(121, 235, 255)",
  },
  {
    name: "Config",
    id: "#config",
    color: "rgb(85, 85, 85), rgb(150, 150, 150)",
  },
];

var lootboxlist = ["amateur", "common", "uncommon"];

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
  master.imp.bal = num;
  document.getElementById("balhtml").innerHTML = balformat(num);
}

function addbal(num) {
  master.imp.bal += num;
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
}

function subbal(num) {
  master.imp.bal + -num;
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
  master.imp.gem = -num;
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
}

function workbuy(item) {
  if (item.cost <= master.imp.bal) {
    master.imp.bal -= item.cost;
    document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
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

function workbal(item) {
  {
    var elem = document.getElementById(item.id + "F");
    var width = 1;
    workdur = item.dur / 100;
    var id = setInterval(frame, workdur);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        addbal(item.multi);
        elem.style.width = "0%";
        document.getElementById(item.id + "B").disabled = false;
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById(item.id + "B").disabled = true;
      }
    }; return;
  }
}

function hirebal(item) {
  document.getElementById(item.id + "C").innerHTML = balformat(item.cost);
  if (master.imp.bal >= item.cost) {
    item.quan = item.quan + 1;
    master.imp.bal = master.imp.bal - item.cost;
    document.getElementById(item.id + "Q").innerHTML = item.quan;
    document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
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

function lootboxbuy(chest) {
  var costmode, costemoji;
  if (chest.type == "cash") {
    costmode = master.imp.bal;
    costemoji = "💵";
  } else if (chest.type == "gems") {
    costmode = master.imp.gem;
    costemoji = "💎";
  }
  if (chest.cost <= costmode) {
    if (chest.type == "cash") {
      subbal(chest.cost);
    } else if (chest.type == "gems") {
      subgem(chest.cost);
    }
    document.getElementById("lootboxnotif").style.left = "50%";
    document.getElementById(
      "lootnotifmain"
    ).innerHTML = `Opening ${chest.name}! Wait for it...`;
    for (let i = 0; i < lootboxlist.length; i++) {
      document.getElementById(lootboxlist[i] + "B").disabled = true;
    }
    setTimeout(() => {
      var chosen =
        chest.reward[Math.floor(Math.random() * chest.reward.length)];
      if (chosen.type == "none") {
        document.getElementById("lootnotifmain").innerHTML =
          "Aw, you earned nothing...";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(216, 108, 108)";
      } else if (chosen.type == "cash") {
        document.getElementById("lootnotifmain").innerHTML =
          "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(
          chosen.quan
        )}💵!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(139, 216, 108)";
        master.imp.bal += chosen.quan;
        document.getElementById("balhtml").innerHTML = balformat(
          master.imp.bal
        );
      } else if (chosen.type == "gems") {
        document.getElementById("lootnotifmain").innerHTML =
          "Congrats, you earned";
        document.getElementById("lootnotifprize").innerHTML = `${balformat(
          chosen.quan
        )}💎!`;
        document.getElementById("lootnotifprize").style.fontSize = "60px";
        document.getElementById("lootboxnotif").style.backgroundColor =
          "rgb(139, 216, 108)";
        master.imp.gem += chosen.quan;
        document.getElementById("gemhtml").innerHTML = balformat(
          master.imp.gem
        );
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

function invbuy(item) {
  if (master.imp.gem >= item.cost) {
    item.quan += 1;
    master.imp.gem -= item.cost;
    document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
    document.getElementById(item.id + "Q").innerHTML = item.quan;
    master.imp.balmulti += item.multi;
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
  master.hireitems.forEach(function (item) {
    sum += Math.floor(item.multi * item.quan * master.imp.balmulti);
  });
  master.imp.bal += sum;
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
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

window.setInterval(async function () {
  localStorage.setItem("session", JSON.stringify(master));
  notify("green", "Progress autosaved");
}, 300000);


//Mobile Shortcuts Activator
var isExpanded = false;
var shortcuts = ["gt","sv"]
function expandmobile(){
  if (!isExpanded){
    shortcuts.forEach((e) => {
      document.getElementById(e).style.right = "10px"
    })
    document.getElementById("expand").style.transform = "rotate(180deg)"
    document.getElementById("expand").style.boxShadow = " 0px -5px 15px rgba(0, 0, 0, 0.247)"
    isExpanded = true
  } else {
    shortcuts.forEach((e) => {
      document.getElementById(e).style.right = "-60px"
    })
    document.getElementById("expand").style.transform = "rotate(0deg)"
    document.getElementById("expand").style.boxShadow = " 0px 5px 15px rgba(0, 0, 0, 0.247)"
    isExpanded = false
  }
  return
}

//Notification
function notify(type, text) {
  var notifchecker = document.getElementsByClassName("notif");
  var notif = notifchecker[0];
  if (type == "white") notif.id = "notif-white";
  if (type == "red") notif.id = "notif-red";
  if (type == "yellow") notif.id = "notif-yellow";
  if (type == "green") notif.id = "notif-green";
  if (type == "blue") notif.id = "notif-blue";
  notif.innerHTML = text;
  notif.style.bottom = "10px";
  notiftime = 4;
  notif.addEventListener("click", function () {
    notif.style.bottom = "-100px";
  });
  return;
}

//Window Startup
let notiftime = null;

window.addEventListener("load", function () {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    notify(
      "yellow",
      "The site isn't optimized with Firefox. Some things may lag or break."
    );
  }
});

window.onload = function () {
  var loadingScreen = document.getElementById("se-pre-con")
  loadingScreen.style.animationName = "loadingfade"
  loadingScreen.style.animationDuration = "0.5s"
  loadingScreen.style.animationFillMode = "forwards"
  setTimeout(() => {
    document.getElementById("se-pre-con").style.visibility = "hidden";
  }, 500);
  document.getElementById("balhtml").innerHTML = balformat(master.imp.bal);
  document.getElementById("gemhtml").innerHTML = balformat(master.imp.gem);
  document.getElementById("multihtml").innerHTML =
  master.imp.balmulti.toPrecision(3);
  
  if (JSON.parse(localStorage.getItem("session"))) {
    master = JSON.parse(localStorage.getItem("session"));
    notify("green", `Welcome back! Progress loaded.`);
  }
  //Enter code related to saved session below
  
  if (master.imp.adminpower) {
    document.getElementById("devmode").innerHTML = " (Experimental Mode)";
  }
  
  if (master.imp.isDark) {
    document.body.className = "dark";
    document.getElementById("inputTheme").setAttribute("checked","true")
  } else {
    document.body.className = "light";
  }
  
  if (master.imp.autoSave) {
    document.getElementById("inputAutosave").setAttribute("checked","true")
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
      background-color: rgb(255, 107, 107);
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
      item.innerHTML = ` <h3>${a.name} <span id="pro">(+${a.multi}💵/s)</span></h3>
      <p>${a.desc}<br /></p>
      <button class="button" onclick="hirebal(master.hireitems[${i}]) ">
      Hire (<span id="${a.id}C"></span>💵)
      </button>
      <p>
      <i>Owned: <span id="${a.id}Q"></span></i>
      </p>
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
      <p>
      <i>Owned: <span id="${a.id}Q">0</span></i>
      </p>`;
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
  if (master.imp.autoSave){
    savesession();
  }
}


// Clock
window.setInterval(async function () {
  hireaddbal();
  master.imp.elaptime++;
  var currenttime = `${String(Math.floor(master.imp.elaptime / 3600) % 24)
    .padStart(2, "0")}:${String(Math.floor(master.imp.elaptime / 60) % 60)
      .padStart(2, "0")}:${String(master.imp.elaptime % 60).padStart(2, "0")}`;
      document.getElementById("timeelapsehtml").innerHTML = currenttime;
      
      document.getElementById("multihtml").innerHTML = balformat(
        master.imp.balmulti.toPrecision(3)
        );
        document.getElementById("autocashhtml").innerHTML = calcbalgensec(
  master.hireitems
  );
  
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
}}

function savesession() {
  localStorage.setItem("session", JSON.stringify(master));
  notify("green", "Progress saved");
}

function loadsession() {
  if (JSON.parse(localStorage.getItem("session"))) {
    master = JSON.parse(localStorage.getItem("session"));
    notify("green", "Progress loaded");
  } else {
    notify("red", "No previous session was detected.");
  }
}

function deletesession() {
  if (
    confirm(
      "All progress will be lost! Are you sure you want to reset everything?"
    )
  ) {
    localStorage.removeItem("session");
    window.location.reload();
  }
}
