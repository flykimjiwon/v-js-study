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


### 8.DOM조작하기 queryselector vs getelementbyId

[domcode.html](https://github.com/flykimjiwon/v-js-study/blob/master/dom%20code/dom.html "domcode.html")
[미리보기](https://rawcdn.githack.com/flykimjiwon/v-js-study/8f85dec6f6219baac1961a8ff4c2d90406ed6c8d/dom%20code/dom.html "미리보기")

document.을 사용해서

document.querySelector 태그,아이디 등 한번에 찾아 작동시킬 수 있음

document.createElement->html이 아니라 js이용해서 요소생성가능

그리고 만든 요소로 setAttribute등으로 클래스도 할당가능

만든 요소에다가 textContent이용 내용도 넣어줄 수 있다.

그외 appendChild나, insertBefore등 이용해서 순서 정해서 추가가능

옛날에는 getelementbyId 썻는데 지금은 쿼리셀렉터로 전부 가능하다.

이외 removeChild(요소) 도있다.

ps. innerHTML 사용해서 html에 있는걸 전부 자바스크립트에 끌고와서 작성도 가능

```javascript
section.innerHTMl   = `
<img src="img/avatar.jpg" alt="avatar" />
      <h1 id="brand">flykimjiwon</h1>
      <h3>test page</h3>
`
```

------------


### 9.DOM 실전, 쇼핑몰 목록앱, TO do list앱 만들기

shoplist/index.html
[완성본 미리보기](https://rawcdn.githack.com/flykimjiwon/v-js-study/084279452f7387dc5788337e0212b14ceb998906/shoplist/index.html "완성본 미리보기")

1.먼저 마크업, 스타일링기본으로 먼저하구

2.필요한, 유용한 사이트

1)https://fontawesome.com/ ->아이콘같은거 있는사이트

2)https://www.cssmatic.com/box-shadow ->그림자 만드는 사이트

3)https://cssgradient.io/ ->css 그라데이션 만들어줌

4)참고한 border-radius문법 https://developer.mozilla.org/ko/docs/Web/CSS/border-radius

##### 여기까지일단 html,css 기본 마크업,뼈대만작성, 이후 동적으로 만들어주기

js파일에서 한것

1)일단 목록,입력받을것,버튼 변수로 할당함

2)버튼클릭하거나 엔터누르면 함수 불러오게만듬
->addEventListener사용

3)텍스트받아오기 -> 아이템새로만들기 -> 컨테이너안에 새로 아이템추가 -> 추가되는곳으로 이동,스크롤링->입력,인풋값 초기화하고 포커싱하게 설계

4)이외 사용한것, appendChild,createElement,setAttribute등....
이전에는 배열로 Todolist만들었었는데 오늘 신기했다.

### 10. 당근고르기게임, 벌레피하기!

[carrot/index.html](https://rawcdn.githack.com/flykimjiwon/v-js-study/5ac771eb82facace322a90197aa1e07a18f9bd83/carrot/index.html "carrot/index.html") [미리보기](https://rawcdn.githack.com/flykimjiwon/v-js-study/5ac771eb82facace322a90197aa1e07a18f9bd83/carrot/index.html "미리보기")

전체적인 자바스크립트 동적인 사용법을 알게되었음

class list 사용법 특히 신기했고 use strict라는걸 알게됨 [참고](https://blog.naver.com/on21life/221654555798 "참고")

setInterval,clearInterval  같은 API사용법도 신기했고 무엇보다 구글에서

timer between 2 이런식으로 검색해서 최대 최소값넣어서 검색해서 바로 만들어진거

사용하는것도 신기했음, 게임하나 만들어보니까 동기부여도되고 뿌듯하기도하면서 공부하고

싶은마음이 더커짐
