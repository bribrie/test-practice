import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

//* describe: 여러 관련 테스트를 그룹화하는 블록을 만듦
//* "it"(same as "test"): 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명함

test("the counter starts at 0", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할 때 id로 접근)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

//* FireEvent API: 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용함
test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  // click plus button
  fireEvent.click(plusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(minusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});

/**
 * 1. getByTestId는 testing-library에서 추천하는 쿼리 사용 우선 순위에서 낮기 때문에 후에는 getByRole 사용 예정
 * 2. fireEvent 또한 userEvent API를 사용하는 것이 더 좋은 방법
 * userEvent는 fireEvent를 사용해 만들어져서 엘리먼트의 타입에 따라서 더 적절한 반응을 보여줄 수 있음
 * ex) fireEvent.click(button)시 버튼이 focus 되지 않음! 하지만 userEvent.click(button)시에는 버튼이 focus됨!
 * -> 실제 유저가 사용되는 것처럼 더 잘 표현되기에 userEvent를 사용하는 게 더 추천됨
 */
