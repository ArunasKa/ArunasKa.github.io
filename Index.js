//Sidebar hover
var executed = false;
var ItemCount = 0;
var darkMode = false;
var setTheme = (theme) => (document.documentElement.className = theme);
const themeImage = document.getElementById("ThemeImage");
const IntroBox = document.getElementById("Intro");
const IntroIcon = document.getElementById("IntroIcon");
const SkillsBox = document.getElementById("Skills");
const SkillsIcon = document.getElementById("SkillsIcon");
const EducationBox = document.getElementById("Education");
const EducationIcon = document.getElementById("EducationIcon");
const ExperienceBox = document.getElementById("Experience");
const ExperienceIcon = document.getElementById("ExperienceIcon");
const ContactsBox = document.getElementById("Contact");
const ContactsIcon = document.getElementById("ContactIcon");
const Mainbar = document.getElementById("MainbarBg");
const MainBg = document.getElementById("MainBg");
//preloaded images(not worth loads to long)
 MainbarLightimg =(new Image()).src = "./BG/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";
 MainbarDarkImg =(new Image()).src = "./BG/filip-zrnzevic-QsWG0kjPQRY-unsplash_Night.jpg";
 MainBgLightImg =(new Image()).src = "./BG/andrew-coelho-aL7SA1ASVdQ-unsplash_op.jpg";
 MainBgDarkImg =(new Image()).src = "./BG/andrew-coelho-aL7SA1ASVdQ-unsplash_op_night.jpg";
themeImage.addEventListener("click", function () {
  if (darkMode == false) {
    themeImage.src = "/BG/ThemeImg_Light.png";
    darkMode = true;
    setTheme = document.documentElement.className = "dark  ";
    IntroIcon.src = ".//BG/user_light.png";
    SkillsIcon.src = ".//BG/files_light.png";
    EducationIcon.src = ".//BG/mortarboard_light.png";
    ExperienceIcon.src = ".//BG/suitcase_light.png";
    ContactsIcon.src = ".//BG/phone-call_light.png";
    Mainbar.src = MainbarDarkImg;
    MainBg.src = MainBgDarkImg
  } else {
    themeImage.src = "/BG/ThemeImg_dark.png";
    darkMode = false;
    setTheme = document.documentElement.className = "light";
    IntroIcon.src = ".//BG/user.png";
    SkillsIcon.src = ".//BG/files.png";
    EducationIcon.src = ".//BG/mortarboard.png";
    ExperienceIcon.src = ".//BG/suitcase.png";
    ContactsIcon.src = ".//BG/phone-call.png";
    Mainbar.src = MainbarLightimg;
    MainBg.src = MainBgLightImg
  }
});

//Intro image change on hover
IntroBox.addEventListener("mouseover", function handleMouseOver() {
  IntroIcon.src = "/BG/user_Hover.png";
});
IntroBox.addEventListener("mouseout", function handleMouseOver() {
  if (darkMode == true) {
    IntroIcon.src = ".//BG/user_light.png";
  } else {
    IntroIcon.src = "/BG/user.png";
  }
});
//Skills image change on hover
SkillsBox.addEventListener("mouseover", function handleMouseOver() {
  SkillsIcon.src = "/BG/files_hover.png";
});
SkillsBox.addEventListener("mouseout", function handleMouseOver() {
  
  if (darkMode == true) {
    SkillsIcon.src = ".//BG/files_light.png";
  }
  else{
    SkillsIcon.src = "/BG/files.png";
  }
});

//Education image change on hover
EducationBox.addEventListener("mouseover", function handleMouseOver() {
  EducationIcon.src = "/BG/mortarboard_hover.png";
});
EducationBox.addEventListener("mouseout", function handleMouseOver() {
 
  if (darkMode == true) {
    EducationIcon.src = ".//BG/mortarboard_light.png";
  }
  else{
    EducationIcon.src = "/BG/mortarboard.png";
  }
});
//Experience image change on hover
ExperienceBox.addEventListener("mouseover", function handleMouseOver() {
  ExperienceIcon.src = "/BG/suitcase_hover.png";
});
ExperienceBox.addEventListener("mouseout", function handleMouseOver() {
  
  if (darkMode == true) {
    ExperienceIcon.src = ".//BG/suitcase_light.png";
  }
  else{
    ExperienceIcon.src = "/BG/suitcase.png";
  }
}); 
//contact image change on hover
ContactsBox.addEventListener("mouseover", function handleMouseOver() {
  ContactsIcon.src = "/BG/phone-call_hover.png";
});
ContactsBox.addEventListener("mouseout", function handleMouseOver() {
  
  if (darkMode == true) {
    ContactsIcon.src = ".//BG/phone-call_light.png";
  }
  else{
    ContactsIcon.src = "/BG/phone-call.png";
  }
});
//Open sidebar
document.getElementById("ProfilePic").addEventListener("click", () => {
  var SideTransition = document.getElementById("Sidebar");
  setTimeout(() => {
    SideTransition.classList.add("TransitionLeft");

    if (!executed) {
      executed = true;
      AddInfo(
        "Intro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla tristique velit, vitae congue libero luctus vel. Sed vitae eros a ex tincidunt tristique. Sed aliquet nibh tellus, dictum tempor orci semper quis. Nulla facilisi. Curabitur a erat venenatis, cursus ligula sed, ullamcorper orci. Morbi dapibus laoreet velit, non faucibus odio viverra nec. Proin nec nulla eu purus suscipit bibendum porta in erat"
      );
    }
  }, 10);
});
//Open infobar
document.getElementById("Sidebar").addEventListener("click", () => {
  var InfobarTransition = document.getElementById("Infobar");
  setTimeout(() => {
    InfobarTransition.classList.add("TransitionRight");
  }, 10);
});
//Intro
document.getElementById("Intro").addEventListener("click", () => {
  AddInfo(
    "Intro",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla tristique velit, vitae congue libero luctus vel. Sed vitae eros a ex tincidunt tristique. Sed aliquet nibh tellus, dictum tempor orci semper quis. Nulla facilisi. Curabitur a erat venenatis, cursus ligula sed, ullamcorper orci. Morbi dapibus laoreet velit, non faucibus odio viverra nec. Proin nec nulla eu purus suscipit bibendum porta in erat"
  );
});
//Skills
document.getElementById("Skills").addEventListener("click", () => {
  const skills = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "consectetur adipiscing elit.Ut fringilla",
    "vitae congue libero luctus",
    "adipiscing elit. Ut fringilla tristique velit",
    "vitae congue libero luctus",
  ];
  AddSkills(skills);
});
//Education
document.getElementById("Education").addEventListener("click", () => {
  ItemCount = 0;
  const Education = [
    [
      "Lorem ipsum dolor sit amet",
      "2017 - 2021",
      "adipiscing elit. Ut fringilla tristique velit",
      "elit. Ut fringilla tristique veli",
    ],
    ["Lorem ipsum ", "2022", "adipiscing elit. Ut fringilla tristique velit"],
  ];
  AddItem("Education", Education);
});
//Experience
document.getElementById("Experience").addEventListener("click", () => {
  ItemCount = 0;
  const Experience = [
    [
      "adipiscing elit",
      "March 2017 - may 2020",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla tristique velit, vitae congue libero luctus vel..",
      "dolor sit amet,  adipiscing elit. Ut fringilla  velit, vitae   luctus .",
      "ipsum dolor sit , consectetur adipiscing . Ut fringilla tristique , vitae  libero  vel.",
    ],
    [
      "dolor sit amet,   elit. Ut fringilla tristique velit,  congue libero luctus vel.",
      "December 2020 - february 2021",
      "Lorem ipsum dolor sit amet,   elit. Ut fringilla tristique velit,  congue libero luctus vel..",
      "dolor sit amet,   elit. Ut fringilla  velit, vitae   luctus .",
      "ipsum dolor sit ,  adipiscing . Ut fringilla  , vitae  libero  vel.",
    ],
    [
      "dolor",
      "December 2021 - January 2023",
      "Lorem ipsum dolor sit amet, consectetur ",
      "dolor sit amet,  ",
      "ipsum dolor sit , consectetur ",
    ],
  ];
  AddItem("Experience", Experience);
});
//Contact
document.getElementById("Contact").addEventListener("click", () => {
  AddInfo(
    "Contact",
    "Cras fermentum rhoncus eros, ut porta erat maximus ac. Vivamus eget ipsum quis ex blandit bibendum. Pellentesque semper rutrum aliquet. Praesent sapien mauris, tincidunt in viverra in, ornare sit amet sapien. Phasellus efficitur dignissim facilisis. Pellentesque felis erat, finibus luctus sodales volutpat, pulvinar ac metus. Aliquam erat volutpat."
  );
});
//fill in information to information bar on right
function AddInfo(header, mainInfo) {
  var InfobarTransition = document.getElementById("InfobarTransition");

  InfobarTransition.classList.remove("fade-in");
  InfobarTransition.innerHTML = "";
  setTimeout(function () {
    //header
    var InfobarHeader = document.createElement("h1");
    InfobarHeader.innerHTML = header;
    InfobarTransition.appendChild(InfobarHeader);
    //Main text
    var InfobarText = document.createElement("p");
    InfobarText.innerHTML = mainInfo;
    InfobarTransition.appendChild(InfobarText);

    //fade in
    InfobarTransition.classList.add("fade-in");
  });
}
function AddSkills(skills) {
  //Get element and clear it
  var InfobarTransition = document.getElementById("InfobarTransition");
  InfobarTransition.classList.remove("fade-in");
  InfobarTransition.innerHTML = "";
  setTimeout(function () {
    //add Skills header
    var InfobarHeader = document.createElement("h1");
    InfobarHeader.innerHTML = "Skills";
    InfobarTransition.appendChild(InfobarHeader);
    //add Skills skills
    var skillList = document.createElement("div");
    skillList.classList.add("SkillsList");
    for (var i = 0; i < skills.length; i++) {
      var skill = document.createElement("p");
      skill.innerHTML = '<span class="bullet ">&#9679  </span>' + skills[i];
      skill.classList.add("SkillListElement");
      skillList.appendChild(skill);
    }

    InfobarTransition.appendChild(skillList);
    InfobarTransition.classList.add("fade-in");
  });
}
function AddItem(Title, ItemList) {
  var InfobarTransition = document.getElementById("InfobarTransition");
  InfobarTransition.classList.remove("fade-in");
  InfobarTransition.innerHTML = "";
  ChangeinfobarInformation(Title, ItemList);
}
function ChangeinfobarInformation(Title, ItemList) {
  setTimeout(function () {
    InfobarTransition.innerHTML = "";
    //add Item header
    var InfobarHeader = document.createElement("h1");
    InfobarHeader.innerHTML = Title;
    InfobarTransition.appendChild(InfobarHeader);
    //add Item skills
    var ItemBox = document.createElement("div");
    ItemBox.classList.add("ItemBox");

    var ItemExtra = document.createElement("p");
    var Item = document.createElement("p");
    Item.innerHTML = ItemList[ItemCount][0];
    for (var x = 1; x < ItemList.length + 2; x++) {
      ItemExtra.innerHTML +=
        '<span class="bullet ">&#9679  </span>' +
        ItemList[ItemCount][x] +
        "<br>";
    }
    Item.classList.add("ItemBoxElement");

    Item.appendChild(ItemExtra);
    ItemBox.appendChild(Item);
    // add page count dot
    var Infobarcount = document.createElement("p");
    Infobarcount.innerHTML += "";
    for (var a = 1; a < ItemList.length + 1; a++) {
      if (a - 1 == ItemCount) {
        Infobarcount.innerHTML +=
          '<span class="PageCountGreen ">&#9679  </span>';
      } else {
        Infobarcount.innerHTML +=
          '<span class="PageCountGray ">&#9679  </span>';
      }
    }
    Infobarcount.classList.add("PageCount");

    InfobarTransition.appendChild(Infobarcount);
    //Create image to cycle Item
    var nextItemButton = document.createElement("img");
    nextItemButton.classList.add("nextItemButton");
    nextItemButton.src = "/BG/right-chevron-.png";

    nextItemButton.addEventListener("click", () => {
      if (ItemCount + 1 >= ItemList.length) {
        ItemCount = 0;
      } else {
        ItemCount++;
      }
      ChangeinfobarInformation(Title, ItemList);
    });

    nextItemButton.addEventListener("mouseover", function handleMouseOver() {
      nextItemButton.src = "/BG/right-chevron_hover-.png";
    });
    nextItemButton.addEventListener("mouseout", function handleMouseOver() {
      nextItemButton.src = "/BG/right-chevron-.png";
    });

    InfobarTransition.appendChild(ItemBox);
    InfobarTransition.appendChild(nextItemButton);
    InfobarTransition.classList.add("fade-in");
  });
}
