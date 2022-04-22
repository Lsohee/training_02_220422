
const week = {
  monday : ["청국장","잠","씻기","큐브 공홈 분석","놀기"],
  thusday : ["김치찌개","잠","씻기","큐브 공홈 개선점","놀기"],
  wensday : ["삼겹살","잠","씻기","큐브 공홈 개선안","놀기"],
  thursday : ["콩나물 국","잠","씻기","대조군 비교","놀기"],
  friday : ["불고","잠","씻기","보고서 작성","놀기"],
};

let mon = "월요일";

if (week.friday[0]="불고기"){
  let mon = "monday";
} else{
  let mon = "thursday";
};
// week.friday[0]이 불고기가 맞을 때에는 mon을 monday로 하고 아닐때에는 tharsday로 하려고 했는데
// 불고기가 아니여도 thursday로 바뀌지 않음

let result = `${mon}에는 ${week.monday[0]}을 해야 한다`;
console.log(result);