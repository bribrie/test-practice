// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server";

//모든 테스트 전 서버 실행
beforeAll(() => server.listen());

//하나하나의 테스트가 끝난 후 리셋
afterEach(() => server.resetHandlers());

//테스트 끝나면 서버 종료
afterAll(() => server.close());
