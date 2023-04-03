//Sidebar hover
var executed = false;
var ItemCount = 0;
//Intro image change on hover

const IntroBox = document.getElementById("Intro");
const IntroIcon = document.getElementById("IntroIcon");
IntroBox.addEventListener("mouseover", function handleMouseOver() {
  IntroIcon.src = "/BG/user_Hover.png";
});
IntroBox.addEventListener("mouseout", function handleMouseOver() {
  IntroIcon.src = "/BG/user.png";
});
//Skills image change on hover
const SkillsBox = document.getElementById("Skills");
const SkillsIcon = document.getElementById("SkillsIcon");
SkillsBox.addEventListener("mouseover", function handleMouseOver() {
  SkillsIcon.src = "/BG/files_hover.png";
});
SkillsBox.addEventListener("mouseout", function handleMouseOver() {
  SkillsIcon.src = "/BG/files.png";
});
//contact image change on hover
const ContactsBox = document.getElementById("Contact");
const ContactsIcon = document.getElementById("ContactIcon");
ContactsBox.addEventListener("mouseover", function handleMouseOver() {
  ContactsIcon.src = "/BG/phone-call_hover.png";
});
ContactsBox.addEventListener("mouseout", function handleMouseOver() {
  ContactsIcon.src = "/BG/phone-call.png";
});
//Education image change on hover
const EducationBox = document.getElementById("Education");
const EducationIcon = document.getElementById("EducationIcon");
EducationBox.addEventListener("mouseover", function handleMouseOver() {
  EducationIcon.src = "/BG/mortarboard_hover.png";
});
EducationBox.addEventListener("mouseout", function handleMouseOver() {
  EducationIcon.src = "/BG/mortarboard.png";
});
//Experience image change on hover
const ExperienceBox = document.getElementById("Experience");
const ExperienceIcon = document.getElementById("ExperienceIcon");
ExperienceBox.addEventListener("mouseover", function handleMouseOver() {
  ExperienceIcon.src = "/BG/suitcase_hover.png";
});
ExperienceBox.addEventListener("mouseout", function handleMouseOver() {
  ExperienceIcon.src = "/BG/suitcase.png";
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
    "C# .NET basics knowledge",
    "MySQL database basics",
    "Html, css and Javascript understanding",
    "3D model creating skills",
    "3DS Max and blender knowledge",
    "Adobe Photoshop basics",
  ];
  AddSkills(skills);
});
//Education
document.getElementById("Education").addEventListener("click", () => {
  ItemCount = 0;
  const Education = [
    [
      "Vilnius Business college",
      "2017 - 2021",
      "Bachelor of information technology",
      "Interactive media and technology",
    ],
    [
      "CodeAcademy",
      "2022",
      "Beginner and advanced level .NET course 480 hour",
    ],
  ];
  AddItem('Education',Education);
});
//Experience
document.getElementById("Experience").addEventListener("click", () => {
  ItemCount = 0;
  const Experience = [
    [
      "Inlook Vilnius ",
      "March 2017 - may 2020",
      "Information for cargo management, label preparation and directing cargo to designated locations.",
      "Planned and implemented solutions to reduce time and price for movement of goods.",
      "Loading, unloading and transfer of goods to ensure that they move to their desired places.",
    ],
    [
      "Vilnius business College Communication and international relations department",
      "December 2020 - february 2021",
      "Writing subtitles in Lithuanian and English",
      "Poster design creation",
      "Collecting and designing information",
    ],
    [
      "Idėja3D",
      "December 2021 - January 2023",
      "3D Model designing, creating and editing",
      "3D model printing",
      "Printed models cleaning",
    ],
  ];
  AddItem('Experience',Experience);
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
function AddItem(Title,ItemList) {
  var InfobarTransition = document.getElementById("InfobarTransition");
  InfobarTransition.classList.remove("fade-in");
  InfobarTransition.innerHTML = "";
  ChangeinfobarInformation(Title,ItemList);
}
function ChangeinfobarInformation(Title,ItemList) {
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
    for (var x = 1; x < ItemList.length+2; x++) {
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
      ChangeinfobarInformation(Title,ItemList);
    });

    nextItemButton.addEventListener(
      "mouseover",
      function handleMouseOver() {
        nextItemButton.src = "/BG/right-chevron_hover-.png";
      }
    );
    nextItemButton.addEventListener(
      "mouseout",
      function handleMouseOver() {
        nextItemButton.src = "/BG/right-chevron-.png";
      }
    );

    InfobarTransition.appendChild(ItemBox);
    InfobarTransition.appendChild(nextItemButton);
    InfobarTransition.classList.add("fade-in");
  });
}
