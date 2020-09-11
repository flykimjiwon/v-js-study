# v-js-study:바닐라 자바스크립트 공부용


HTML,CSS,JS 기본문법 공부후, 찾아가면서

할 수 있을정도 공부한후 바닐라 JS공부를 한후 기록하기위해 만든 레포지토리

참고할만한 사이트

1.MDN 2.https://ko.javascript.info/

https://raw.githack.com/
미리보기(좀더정확함)

------------

### 1. 쿼리셀렉터이용, 브라우저 사이즈 변경할때마다 사이즈 출력하기

[window-size.html](https://github.com/flykimjiwon/v-js-study/blob/master/window-size.html "window-size.html")

[미리보기](https://htmlpreview.github.io/?https://github.com/flykimjiwon/v-js-study/blob/master/window-size.html "미리보기")

------------
### 2.쿼리셀레터 이벤트리스너 특정한 박스클릭, 해당위치 좌표출력

[xy-lect.html](https://github.com/flykimjiwon/v-js-study/blob/master/xy-lect.html "xy-lect.html")

[미리보기](https://htmlpreview.github.io/?https://github.com/flykimjiwon/v-js-study/blob/master/xy-lect.html "미리보기")

함수안에 이벤트 리스너는 항상 event를 반환한다. 그래서 event.~~

식으로 x,y좌표를 가져올 수 있음, getBoundingClientRect 요소의 절대좌표 구하기

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

![](https://mdn.mozillademos.org/files/17155/element-box-diagram.png)



------------



### 3. WIN 스크롤 API 3개가있음

[winscroll.html](https://github.com/flykimjiwon/v-js-study/blob/master/winscroll.html "winscroll.html")
[미리보기](https://htmlpreview.github.io/?https://github.com/flykimjiwon/v-js-study/blob/master/winscroll.html "미리보기")

1)원하는만큼 스크롤하기

https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy

2)해당 위치로 스크롤하기

https://developer.mozilla.org/ko/docs/Web/API/Window/scrollTo

3)해당 요소로 스크롤하기

https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

구글에 javascript scroll 로 검색하거나, scroll into 이런식으로 검색하면됨

끝지점으로, 부드럽게 스크롤 등등 옵션지정도 전부 가능

해당 기능구현도 역시 Queryselector 및 addEventlistener 사용은 기본

------------

### 4. 이미지랑,태그요소 마우스커서 이동하면 같이 움직이게만들기

[mousemove.html](https://github.com/flykimjiwon/v-js-study/blob/master/mousemove.html "mousemove.html")
[미리보기](https://rawcdn.githack.com/flykimjiwon/v-js-study/ec1b75c93066199e54830606c7b088548daeca15/mousemove.html "미리보기")


1.div 태그 적절히수정해서 css로 라인만들기

2.이미지요소 까지 결합하기

3.좌표이동하면 라인,이미지 이동하면서 좌표출력

4.당연한거지만 쿼리셀렉터이용, 이벤트리스너이용 마우스 무브 사용

https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

5.다만 감탄한 아이디어는 event.clientX,Y 좌표를 토대로 각 변수안의 

style.내부 요소의 위치를 바꿀 수 있다는것 마지막에 innerHTML내용 바꾸기까지


------------



### 5.특정 이미지로(요소) 화면 이동하게 만들기

[findelement.html](https://github.com/flykimjiwon/v-js-study/blob/master/findelement.html "findelement.html")
[미리보기](https://htmlpreview.github.io/?https://github.com/flykimjiwon/v-js-study/blob/master/findelement.html "미리보기")

1.바디태그 전체 중앙 정렬하기

https://developer.mozilla.org/ko/docs/Web/CSS/align-content

align-text:center 사용

2.이미지태그 블록형태로바꾸기, 마진 auto해줘야 내려가며 적용

3.마우스커서 포인터 바꾸기적용,그리고 버튼은 그냥 소스코드따옴

https://www.w3schools.com/css/css3_buttons.asp

4.하나인 녀석은 클래스보다 ID값을 주는게좋다.

5.scrollItoView 다시사용

https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView


------------

### 6.DOM 및 BOM,javascript

쉽게말하면 dom은 document object model 인데 html이 노드형태로 돔트리로 구성되있는

모델이라고 생각하면된다. 일단 상위에 윈도우가있고 (WINDOW) -> 그아래로

dom,bom,javascript가 존재한다.

![](https://media.vlpt.us/images/denmark-choco/post/20350c06-ee47-451a-a4ed-3ec3a0b963e2/dom.png)

https://ko.javascript.info/browser-environment


------------

### 7.성능개선해서 mousemoveUpgarde 만들기

css나 자바스크립트 애니메이션이나 등등... Layout,Paint,Composite이해해서

좀더 성능개선하기, 기존의 top,left등을 옮기는것보다 transform을 사용하는것이

성능이좀더 개선됨

[mousemoveUpgrade.html](https://github.com/flykimjiwon/v-js-study/blob/master/mousemoveUpgrade.html "mousemoveUpgrade.html")
[미리보기](https://rawcdn.githack.com/flykimjiwon/v-js-study/ec1b75c93066199e54830606c7b088548daeca15/mousemoveUpgrade.html "미리보기")

------------
