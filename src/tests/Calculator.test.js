import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });
  it("should be able to add", () => {
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const buttonAdd = container.getByTestId("operator-add");
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("5");
  });
  it("should be able to subtract", () => {
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonSubtract = container.getByTestId("operator-subtract");
    fireEvent.click(buttonSubtract);
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should be able to multiply", () => {
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const buttonMultiply = container.getByTestId("operator-multiply");
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("15");
  });
  it("should be able to divide", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonDivide = container.getByTestId("operator-divide");
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should concatenate numbers", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("21");
  });
  it("should chain operations", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonDivide = container.getByTestId("operator-divide");
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonMultiply = container.getByTestId("operator-multiply");
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("15");
  });
  it("should be able to clear running total without affecting calculation", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonDivide = container.getByTestId("operator-divide");
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonMultiply = container.getByTestId("operator-multiply");
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const buttonClear = container.getByTestId("clear");
    fireEvent.click(buttonClear);
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("9");
  });
});
