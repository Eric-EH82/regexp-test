// const str = ` //const는 재할당 불가능
// 010-1234-5678
// thesecon@gmali.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

let str = `
010-1234-5678
thesecon@gmali.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost1234.com
`//문자데이터는 여러줄로 작성해도 하나의 줄로 인식 
//끝부분은 `기호의 앞에서 끝나는 부분 그래서 d가 끝이다.
//let 재할당 가능

//const regexp = new RegExp('the', 'gi'); //RegExp 생성자 함수를 호출하여 사용
// new RegExp(표현식) 또는 new RegExp(표현식, 플래그)
// const regexp = /the/gi; // 정규표현식은 /로 감싸진 패턴을 리터럴로 사용
// /표현식/ 또는 /표현식/플래그

//const regexp = /fox/gi; true 
// const regexp = /heropy/gi //felse 
// console.log(regexp.test(str)); // test를 사용하여 일치 여부를 반환

// const regexp = /fox/gi; // /fox를 찾아라/g(모든 문자일치) i(영어 대소문자 구분하지 않고 일치)
// // console.log(str.replace(regexp, 'AAA')); // 일치하는 fox를 찾아 AAA로 대체하라
// //출력에서만 fox가 일치할경우 AAA로 대체됨
// str = str.replace(regexp, 'AAA'); //fox가 AAA로 대체되어 재할당됨.
// console.log(str);
// //const로 str 선언한 경우 재할당이 불가능하여 원본인 상태, 하지만 let으로 str선언하면 
// //재할당이 가능해짐(fox => AAA 대체됨)

// const regexp = /the/ //첫 발견된 the만 찾아서 보여줌
// const regexp = /the/g //모든 문자일치 the만 찾아서 보여줌
// const regexp = /the/gi // the의 모든 문자일치 & 대소문자 구분안함
// const 로 변수를 선언언 하여 출력해도되지만 리터럴로 바로 사용하여 출력할 수 있다.

// console.log(str.match(regexp));// 변수를 선언하여  출력방법
// console.log(str.match(/the/gi)); // 리터럴로 사용하여 출력
// console.log(str.match(/\.$/gim)); 
//멀티라인옵션으로 마침표를 일치시켜서 끝나는 부분($끝나는 부분 기호)에 찾아 배열데이터로 저장
//\(이스케이프 문자 백슬래시)기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자

// console.log(str.match(/d$/g));
//하나의 줄 끝부분에 d와 일치하는 내용을 찾아라 결과로는 끝나는 `기호 앞에 있는 d가 출력 
// console.log(str.match(/d$/gm)); 
//하나의 줄이아닌 여러 줄바꿈된 위치에서 일치하는 d를 찾아라 // 결과 2개의 d가 나온다.

// console.log(str.match(/^t/gm)); 
//여러 줄 시작부분에 t와 일치하는 내용을 찾아라 // 결과로는 1개 (대문자 T는 포함안됨)
// console.log(str.match(/^t/gim)); 
// 여러 줄 시작부분에서 대소문자 상관없이 T와 일치하는 내용을 찾아라 // 결과로는 2개 대문자 T까지 포함

// console.log(str.match(/h..p/g)); // h..p(h로 시작 p로 끝나는) 임의의 문자와 일치하는 것을 찾아라
//결과 http hxyp
// console.log(str.match(/fox|dog/)); //fox 또는  dog 와 일치하는 문자를 찾아라
//결과 fox가 먼저 찾아져서 fox를 표기함 이유 먼저 찾아서 반환되는 값을 표시함 dog가 먼저 나오면 dog가 반환

// console.log(str.match(/https/g)); //https와 일치하는 것을 찾아라 https만 반환됨
// console.log(str.match(/https?/g)); // http또는 https가 없가나 일치하는 것을 찾아라 
// s?(s가 있거나 없거나를 의미)가 있어 마지막 s부분이 일치하거나 없는 것을 찾아라 
// 결고로는 http 와 https 둘다 검색이 된다.

// console.log(str.match(/d{2}/)); //{숫자} d{2}안에 들어 있는 수만큼 연속 일치한 배열을 찾아라 //결과 dd
// console.log(str.match(/\b\w{2,3}\b/g)); // 별도의 패턴을 사용해 연속일치를 사용함.
// console.log(str.match(/[0-9]{1,}/g)); //숫자 하나이상의 일치하는 배열을 찾아라