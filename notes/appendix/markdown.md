# Markdown 문법

!!! tip
마크다운을 이용해서 배운 것을 정리해봅시다.

## Heading

```markdown
# 나는 Heading 1 입니다.

## 나는 Heading 2 입니다.

### 나는 Heading 3 입니다.

#### 나는 Heading 4 입니다.

##### 나는 Heading 5 입니다.

###### 나는 Heading 6 입니다.
```

## Formatting

```markdown
**나는 Bold 입니다.**

_나는 Italic 입니다._

~~나는 Strike Through 입니다.~~
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

**나는 Bold 입니다.**

_나는 Italic 입니다._

~~나는 Strike Through 입니다.~~

## List

```markdown
-   나는 unordered list 입니다.
-   나는 unordered list 입니다.
-   나는 unordered list 입니다.

1. 나는 ordered list 입니다.
2. 나는 ordered list 입니다.
3. 나는 ordered list 입니다.
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

-   나는 unordered list 입니다.
-   나는 unordered list 입니다.
-   나는 unordered list 입니다.

1. 나는 ordered list 입니다.
2. 나는 ordered list 입니다.
3. 나는 ordered list 입니다.

## Code

```markdown
나는 `코드입니다.`
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

나는 `코드입니다.`

## Code Block

````markdown
```javascript
const foo = "Hello World!";
console.log(foo);
```
````

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

```javascript
const foo = "Hello World!";
console.log(foo);
```

## Blockquote

```markdown
> 나는 Blockquote 입니다.
> html 태그 중 <blockquote> 태그와 비슷합니다.
```

> 나는 Blockquote 입니다.

## Link

```markdown
[나는 링크입니다.](https://www.google.com)
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

[나는 링크입니다.](https://www.google.com)

## Image

```markdown
![나는 이미지입니다.](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

![나는 이미지입니다.](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

## Table

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Emoji

```markdown
:smile:
:joy:
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

:smile:
:joy:

## Horizontal Rule

```markdown
---
```

> 위의 마크다운 코드는 아래와 같이 렌더링 됩니다.

---

## Reference

-   [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
-   [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
