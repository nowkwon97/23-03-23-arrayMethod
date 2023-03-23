import studentList from './studentList.js'

// * .filter() 메서드 예제
const kimStudents = studentList.filter(function(student) {
  return student.startsWith("김");
});
console.log(kimStudents); 
// [ '김동주', '김은아', '김종윤', '김지섭', '김형진' ]

// * .filter() 메서드 + 나머지 값을 가져오는 % 연산
// * studentList에서 index가 짝수인 배열
const oddStudents = studentList.filter(function(student, index) {
  return index % 2 === 0;
});
console.log(oddStudents);
// [
//   '강지민', '권예준',
//   '김은아', '김지섭',
//   '노수민', '박달재',
//   '박준형', '이경택',
//   '이재권', '장루빈',
//   '정지은', '최대건',
//   '허진'
// ]

// * .filter() 메서드 + 문자열 길이 비교
const threeLetterStudents = studentList.filter(function(student) {
  return student.length === 3;
});
console.log(threeLetterStudents);
// [
//   '강지민', '곽윤호', '권예준',      
//   '김동주', '김은아', '김종윤',      
//   '김지섭', '김형진', '노수민',      
//   '류은이', '박달재', '박수연',      
//   '박준형', '성해경', '이경택',      
//   '이세민', '이재권', '임지성',      
//   '장루빈', '정성철', '정지은',      
//   '정희은', '최대건', '한유진'       
// ]

// * .map() 메서드 예제 : 매핑한다고하여 상당히 자주 사용하는 메서드
const studentsWithSuffix = studentList.map(function(student) {
  return student + "님";
});
console.log(studentsWithSuffix);
// [
//   '강지민님', '곽윤호님', '권예준님',
//   '김동주님', '김은아님', '김종윤님',
//   '김지섭님', '김형진님', '노수민님',
//   '류은이님', '박달재님', '박수연님',
//   '박준형님', '성해경님', '이경택님',
//   '이세민님', '이재권님', '임지성님',
//   '장루빈님', '정성철님', '정지은님',
//   '정희은님', '최대건님', '한유진님',
//   '허진님'
// ]

// * .map() 메서드 예제 : 대문자로 변환
const upperCaseStudents = studentList.map(function(student) {
  return student.toUpperCase();
});
console.log(upperCaseStudents);
// [
//   '강지민', '곽윤호', '권예준',
//   '김동주', '김은아', '김종윤',
//   '김지섭', '김형진', '노수민',
//   '류은이', '박달재', '박수연',
//   '박준형', '성해경', '이경택',
//   '이세민', '이재권', '임지성',
//   '장루빈', '정성철', '정지은',
//   '정희은', '최대건', '한유진',
//   '허진'
// ]