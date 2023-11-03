describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });
  it("should display running total", () => {
    cy.get("#number2").click();
    cy.get("#number5").click();
    cy.get(".display").should("contain", "25");
  });
  it("should math correctly", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "10");
  });
  it("should chain opreation", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "20");
  });
  it("should take positive numbers", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "10");
  });
  it("should take negatives", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-3");
  });
  it("should take large numbers", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#number1").click();
    cy.get("#number4").click();
    cy.get("#number7").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "40591718750000000");
  });
  it("should make decimals", () => {
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.4");
  });
  it("should hande / 0", () => {
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Err.");
  });
});
