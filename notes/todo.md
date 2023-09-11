# 09/11 4주차

!!! note Assertion

    ==expect A to be B==

    expect(A).toBe(B);
    expect(A).==not==.toBe(B);

    expect(A).toEqual(B);
    expect(A).==not==.toEqual(B);

    expect(A).toMatch(B);
    expect(A).==not==.toMatch(B);

    expect(A).toContain(B);
    expect(A).==not==.toContain(B);

    expect(A).toHaveClass(B);
    expect(A).==not==.toHaveClass(B);

---

## DOM 요소 가져오기

```js
page.locator("h1");
page.getByPlaceholder("Search");
page.getByText("Search");
page.getByRole("button", { name: "Search" });
page.getByTestId("search-button");

// Another way to get the same button
page.getByLabelText("Search");
page.getByDisplayValue("Search");
page.getByAltText("Search");
```

---

## 엘리먼트 조작하기

```js
const myTextField = page.locator("#text-field");
myTextField.fill("Hello, World!");
myTextField.press("Enter");

const myButton = page.locator("#button");
myButton.click();
myButton.dblclick();
```

---

## 페이지 조작하기

```js
// GoTo
page.goto("https://playwright.dev");

// Reload
page.reload();

// Navigation
page.goBack();
page.goForward();
page.waitForNavigation();
page.waitForURL("https://playwright.dev/docs/intro");
```
