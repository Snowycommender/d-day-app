let date = document.getElementById("date"); //input(type:date) 태그 가져오기
let curDateElement = document.getElementById("curDate"); //h3태그 가져오기
let resultElement = document.getElementById("result"); //p태그 가져오기(결과 출력)
let calBtn = document.getElementById("calBtn"); //버튼태그 가져오기(날짜계산 버튼)

let curDate = new Date();
let curYear = curDate.getFullYear();
let curMonth = curDate.getMonth() + 1;
let curDay = curDate.getDate();
let dayOfWeek = curDate.getDay(); //0일~6토

//dayOfWeek은 0~6R까질 반환할 것이다.
let dd = null; //dd변수를 null로 초기화한다. //""빈문자열은 참거짓함수에서만 숫자0으로 인식하고, 개발자에겐 앞으론 여기에 문자열을 넣을 것이다, 무슨형의 값을 넣을지 모를 땐 null을 쓰지 undefined를 쓰면 안된다.
switch (dayOfWeek) {
  case 0:
    dd = "일";
    break;
  case 1:
    dd = "월";
    break;
  case 2:
    dd = "화";
    break;
  case 3:
    dd = "수";
    break;
  case 4:
    dd = "목";
    break;
  case 5:
    dd = "금";
    break;
  case 6:
    dd = "토";
    break;
  default:
    dd = "";
}
console.log(dd);
//현재날짜를 웹페이지에 출력하기
curDateElement.innerHTML = `${curYear}년 ${curMonth}월 ${curDay}일 ${dd}요일`;

function getDiffDay(selectedDate) {
  let diff = selectedDate - curDate;
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24)); //1일 차이가 난다. 소수점이 정말 길게 나와서 올림을 하는 것이다.
  return diffDay;
}

calBtn.addEventListener("click", () => {
  // 클릭을 받으면, input태그에서 선택된 날짜문자열을 날짜 객체로 변환한다.
  //2024-07-02란 데이터가 2024-07-02T00:00:00...으로 변환한다.
  let selectedDate = new Date(date.value);
  console.log(
    `selectedDate :: ${selectedDate}, typeof :: ${typeof selectedDate}` //date란 개체에서 value속성의 값만 가져온 게 어떤 타입형의 데이터인지 확인해보자!
  );
  let diff = selectedDate - curDate; //단위는 밀리초
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24)); //1일 차이가 난다. 소수점이 정말 길게 나와서 올림을 하는 것이다.
  resultElement.innerHTML = `D-day까지 ${diffDay}일 남았습니다.`;

  // !!!새로운 것!!! 스타일시트 적용하기
  resultElement.style = "color:green; font-size:20px";
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  //input text태그의 값 가져오기
  let title = document.getElementById("title").value;

  //날짜 값 가져오기
  let date = document.getElementById("date").value;
  //함수를 사용해서 날짜끼리의 차이값 반환
  let diffDay = getDiffDay(new Date(date));
  //ul태그 가져오기
  let ul = document.getElementById("ddayList");
  //li태그 생성
  let li = document.createElement("li");
  li.innerHTML = `<span style="color:red">${title}</span>까지 ${diffDay}일 남았습니다.`;
  ul.appendChild(li);
});
