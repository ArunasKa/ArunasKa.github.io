// fill profile
AddInfo("John Doe", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
AddProfile();

const ProfileBox = document.getElementById("Profile");
const ProfileIcon = document.getElementById("ProfileIcon");
const SkillsBox = document.getElementById("Skills");
const SkillsIcon = document.getElementById("SkillsIcon");
const EducationBox = document.getElementById("Education");
const EducationIcon = document.getElementById("EducationIcon");
const ExperienceBox = document.getElementById("Experience");
const ExperienceIcon = document.getElementById("ExperienceIcon");
const ContactsBox = document.getElementById("Contact");
const ContactsIcon = document.getElementById("ContactIcon");
//#region mouseover
//Profile image change on hover
ProfileBox.addEventListener("mouseover", function handleMouseOver() {
  ProfileIcon.src = "/BG/user_Hover.png";
});
ProfileBox.addEventListener("mouseout", function handleMouseOver() {
  ProfileIcon.src = "/BG/user.png";
});
//Skills image change on hover
SkillsBox.addEventListener("mouseover", function handleMouseOver() {
  SkillsIcon.src = "/BG/files_hover.png";
});
SkillsBox.addEventListener("mouseout", function handleMouseOver() {
  SkillsIcon.src = "/BG/files.png";
});

//Education image change on hover
EducationBox.addEventListener("mouseover", function handleMouseOver() {
  EducationIcon.src = "/BG/mortarboard_hover.png";
});
EducationBox.addEventListener("mouseout", function handleMouseOver() {
  EducationIcon.src = "/BG/mortarboard.png";
});
//Experience image change on hover
ExperienceBox.addEventListener("mouseover", function handleMouseOver() {
  ExperienceIcon.src = "/BG/suitcase_hover.png";
});
ExperienceBox.addEventListener("mouseout", function handleMouseOver() {
  ExperienceIcon.src = "/BG/suitcase.png";
});
//contact image change on hover
ContactsBox.addEventListener("mouseover", function handleMouseOver() {
  ContactsIcon.src = "/BG/phone-call_hover.png";
});
ContactsBox.addEventListener("mouseout", function handleMouseOver() {
  ContactsIcon.src = "/BG/phone-call.png";
});
//#endregion
//Profile
//#region Click sidebar elements
//Profile
document.getElementById("Profile").addEventListener("click", () => {
  AddInfo(
    "John Doe",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  AddProfile();
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
  AddInfo("Skills","");
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

function AddInfo(header, mainInfo) {
  var MainWindow = document.getElementById("Mainbar");
  MainWindow.innerHTML = "";
  //header
  var InfobarHeader = document.createElement("h1");
  InfobarHeader.innerHTML = header;
  InfobarHeader.classList.add("MainWindowTitle");
  MainWindow.appendChild(InfobarHeader);
  //Main text
  if(mainInfo!=""){
    var InfobarText = document.createElement("div");
    InfobarText.innerHTML = mainInfo;
    InfobarText.classList.add("MainWindowText");
    MainWindow.appendChild(InfobarText);

  }
}
function AddProfile() {
  var MainWindow = document.querySelector(".MainWindowText");
  var ProfilePic = document.createElement("div");
  ProfilePic.id = "ProfilePic";
  var ProfileImg = document.createElement("img");
  ProfileImg.src = "/BG/user.png";
  ProfileImg.alt = "Profile picture";
  ProfilePic.appendChild(ProfileImg);
  MainWindow.appendChild(ProfilePic);
}
function AddSkills(skills) {
    //Get element and clear it
    var MainWindow = document.getElementById("Mainbar");
    setTimeout(function () {
      //add Skills skills
      var skillList = document.createElement("div");
      skillList.classList.add("SkillsList");
      for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement("p");
        skill.innerHTML = '<span class="bullet ">&#9679  </span>' + skills[i];
        skill.classList.add("SkillListElement");
        skillList.appendChild(skill);
      }
  
      MainWindow.appendChild(skillList);
    });
  }
  function AddItem(Title, ItemList) {
    var MainWindow = document.getElementById("Mainbar");
    MainWindow.innerHTML = "";
    ChangeMainWindowInfo(Title, ItemList);
  }
  function ChangeMainWindowInfo(Title, ItemList) {
    setTimeout(function () {
        var MainWindow = document.getElementById("Mainbar");
        MainWindow.innerHTML = "";
      //add Item header
      AddInfo(Title,"");
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
      Infobarcount.classList.add("nextItemButton");
  
      MainWindow.appendChild(Infobarcount);
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
        ChangeMainWindowInfo(Title, ItemList);
      });
  
      nextItemButton.addEventListener("mouseover", function handleMouseOver() {
        nextItemButton.src = "/BG/right-chevron_hover-.png";
      });
      nextItemButton.addEventListener("mouseout", function handleMouseOver() {
        nextItemButton.src = "/BG/right-chevron-.png";
      });
  
      MainWindow.appendChild(ItemBox);
      MainWindow.appendChild(nextItemButton);
    });
  }
//#endregion
