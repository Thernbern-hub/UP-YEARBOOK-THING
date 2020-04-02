let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/91220441_222272502357111_6838717275407646720_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=tiQMy8EsJ1wAX8OQKwd&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=5c41b39378d3a4070de8541186ba9e57&oe=5EA09FEE",
    name: "Mahel Napo",
    quote: "You think you caught time, but time had you in its grasp",
    superlative: "Most Cool"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91285222_234311824627633_5395021455454896128_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=mXXFjoNP78EAX-MQX15&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=063cef27ec7bd0880933e16841cc4324&oe=5EA05E19",
    name: "Anthony Bello",
    quote: "I'm around here and there",
    superlative: "Best Hair"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/90776454_230055181574811_7411124038145146880_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=ZTMnSrOdFmgAX--xP9O&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=924328af9644751222480a953dd75b6c&oe=5EA2938D",
    name: "Ronel Franco",
    quote: "Smile because I am here",
    superlative: "Tik Tok Connoisseur"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91265433_513413819368640_6045421585882415104_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=enmYZ-CdQ5UAX_5eihk&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=cac52de6ea15e734bfde418408773bc3&oe=5EA27B04",
    name: "Farid Oumorou",
    quote: "Every disappointment is a blessing, MY FAULT",
    superlative: "Most Brolic"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91234389_268754377460176_7348579603394330624_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=-3H7D3miz7kAX_zdog2&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=d0288271ac3d477b1155ec9d88cf0006&oe=5EA3556E",
    name: "JacobTyler Bajar",
    quote: "Music is all I need",
    superlative: "Most Weird"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91126532_654909521750528_4546566505969483776_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=3kT_f_UirHYAX-KXCK-&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=e2cc3cb3d686673e89c7839a2bb6089e&oe=5EA1036F",
    name: "Nicholas Hylton",
    quote: "It is what it is",
    superlative: "Most Tall"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91281305_249742816188830_1376471541591572480_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=dt9fzSC37zIAX-Uqnkv&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=a78fa813b57c6aa615f606a595c2b81c&oe=5EA10FB9",
    name: "Jeordy Abreu",
    quote: "I'm just boolin",
    superlative: "Most Artistic"
  },
  {
    profileImage:
      "https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/91064503_855935104908428_8756735234692612096_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=-IQzhn2vbaEAX9rz5_9&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&_nc_tp=6&oh=6122cfcbebf378a2e62432d3430391f2&oe=5EA176F6",
    name: "Brandon Rivera",
    quote: "Top?",
    superlative: "Most Funny"
  }
];

let count = 0

document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;
let lastStudent = students.length -1

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
if(count > lastStudent){
  count=0
}

  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
if(count < 0){
  count=lastStudent
}
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

