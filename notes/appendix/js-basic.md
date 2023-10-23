## Markup

```html
<div id="section" class="section" style="border: 1px solid red; padding: 10px;">
    <h1 id="login-title">로그인 테스트</h1>
    <input id="id" type="text" name="id" placeholder="아이디" />
    <input id="password" type="password" name="pw" placeholder="비밀번호" />
    <button id="button">Login</button>
</div>
```

## Script

```js
const button = document.getElementById("button");
// 버튼을 잘 가져왔는지 확인해보자
console.log(button);

// id로 dom 요소를 가져오기
const id = document.getElementById("id");
const pw = document.getElementById("password");

// class로 dom 요소를 가져오기 (복수)
const section = document.getElementsByClassName("section")[0];

// tag로 dom 요소를 가져오기 (복수)
const inputs = document.getElementsByTagName("input");

// querySelector로 dom 요소를 가져오기
const title = document.querySelector("#login-title");

// querySelectorAll로 dom 요소를 가져오기 (복수)
const inputs2 = document.querySelectorAll("input");
```
