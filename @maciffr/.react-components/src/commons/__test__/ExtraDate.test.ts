import ExtraDate from "../ExtraDate";

// WIP Refacto date prototype surcharge
describe("Calcul de dates", () => {
  it("Ajoute un jour sans changer de mois", () => {
    const date = new ExtraDate("2022-11-01");
    expect(date.addDays(1).getDate()).toBe(2);
  });

  it("Soustrais un jour sans changer de mois", () => {
    const date = new ExtraDate("2022-11-02");
    expect(date.subDays(1).getDate()).toBe(1);
  });

  it("Ajoute un jour et passe au mois suivant", () => {
    const date = new ExtraDate("2022-10-31");
    // Janvier is 0
    expect(date.addDays(1).getMonth()).toBe(10);
    expect(date.addDays(1).getDate()).toBe(1);
  });

  it("Soustrais un jour et passe au mois précédent", () => {
    const date = new ExtraDate("2022-11-01");
    // Janvier is 0
    expect(date.subDays(1).getMonth()).toBe(9);
    expect(date.subDays(1).getDate()).toBe(31);
  });

  it("Ajoute une semaine sans changer de mois", () => {
    const date = new ExtraDate("2022-10-01");
    // Janvier is 0
    expect(date.addDays(7).getDate()).toBe(8);
  });

  it("Soustrais une semaine sans changer de mois", () => {
    const date = new ExtraDate("2022-10-08");
    // Janvier is 0
    expect(date.subDays(7).getDate()).toBe(1);
  });

  it("Ajoute une semaine et change de mois", () => {
    const date = new ExtraDate("2022-10-28");
    // Janvier is 0
    expect(date.addDays(7).getMonth()).toBe(10);
    expect(date.addDays(7).getDate()).toBe(4);
  });

  it("Soustrais une semaine et change de mois", () => {
    const date = new ExtraDate("2022-11-05");
    // Janvier is 0
    expect(date.subDays(7).getMonth()).toBe(9);
    expect(date.subDays(7).getDate()).toBe(29);
  });

  it("Date entre min et max", () => {
    const date = new ExtraDate("2022-10-10");
    expect(date.isBetween(new Date("2022-10-01"), new Date("2022-10-30"))).toBe(true);
  });

  it("Date égale au min, OK", () => {
    const date = new ExtraDate("2022-10-10");
    expect(date.isBetween(new Date("2022-10-10"), new Date("2022-10-30"))).toBe(true);
  });

  it("Date égale au max, OK", () => {
    const date = new ExtraDate("2022-10-30");
    expect(date.isBetween(new Date("2022-10-10"), new Date("2022-10-30"))).toBe(true);
  });

  it("Date avant le min", () => {
    const date = new ExtraDate("2022-09-30");
    expect(date.isBetween(new Date("2022-10-10"), new Date("2022-10-30"))).toBe(false);
  });

  it("Date après le max", () => {
    const date = new ExtraDate("2022-11-30");
    expect(date.isBetween(new Date("2022-10-10"), new Date("2022-10-30"))).toBe(false);
  });

  it("Date après un min, sans max", () => {
    const date = new ExtraDate("2022-10-30");
    expect(date.isBetween(new Date("2022-10-10"))).toBe(true);
  });

  it("Date avant un max, sans min", () => {
    const date = new ExtraDate("2022-10-30");
    expect(date.isBetween(undefined, new Date("2022-11-10"))).toBe(true);
  });

  it("Dernier jour du mois (getLastDate)", () => {
    const date = new ExtraDate(2022, 1, 10);
    expect(date.getLastDate()).toBe(28);
  });
});
