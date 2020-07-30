import console from ".";

global.console.log = jest.fn();

test("it should contain the file path", () => {
  console.log("Hello World");
  expect(global.console.log).toHaveBeenCalledWith(
    expect.stringContaining("src/console.test.ts 6:16")
  );
});
