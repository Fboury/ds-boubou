import * as Stories from "../DatePicker.stories";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { VALIDATION_MESSAGES } from "../constantes";

const { Basic, AvecMinMax, Disabled, AvecMax } = composeStories(Stories);

const TODAY = new Date();
const PAST = new Date(TODAY.getFullYear() - 1, TODAY.getMonth() - 1, TODAY.getDate() - 1);
const FUTUR = new Date(TODAY.getFullYear() + 1, TODAY.getMonth() + 1, TODAY.getDate() + 1);

describe("Form - Date Picker", function () {
  test("Par défaut le Calendar est masqué", () => {
    const { container } = render(<Basic />);
    const calendar = container.querySelector(".calendar");
    expect(calendar).toBeNull();
  });

  test("Quand on clique sur le bouton du calendar, il s'ouvre", async () => {
    const { container } = render(<Basic />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;

    await userEvent.click(calendarBtn);

    const calendar = container.querySelector(".calendar");
    expect(calendar).toBeTruthy();
  });

  test("Quand on clique sur le bouton du calendar alors qu'il est ouvert, il se ferme", async () => {
    const { container } = render(<Basic />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;

    await userEvent.click(calendarBtn);
    await userEvent.click(calendarBtn);

    const calendar = container.querySelector(".calendar");

    expect(calendar).toBeNull();
  });

  test("Quand on choisie une date sur le calendar, la date est renvoyée", async () => {
    let selectedDate: Date | null;
    const { container } = render(
      <Basic
        value={new Date(2022, 9, 12)}
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    // Avoid click on a single number date to make comparision easier

    const calendarCell = container.querySelectorAll(".calendar-cell")[12];
    await userEvent.click(calendarCell);

    expect(selectedDate!.getTime()).toBe(new Date(2022, 9, 8).getTime());
  });

  test("Quand on choisie une date sur le calendar, le champs Date est rempli", async () => {
    let selectedDate: Date | null;
    const { container } = render(
      <Basic
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const calendarCell = container.querySelectorAll(".calendar-cell")[12];
    await userEvent.click(calendarCell);

    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]') as HTMLInputElement;
    const expectedString = `${selectedDate!.getDate().toString().padStart(2, "0")}/${(selectedDate!.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${selectedDate!.getFullYear()}`;
    expect(dayInput.value).toBe(expectedString);
  });

  test("Quand la valeur de l'input de date est changée, le Calendar est mis à jour", async () => {
    let selectedDate: Date | null;
    const { container } = render(
      <Basic
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );

    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]');
    await userEvent.type(dayInput!, "12091995");

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const yearSelect = container.querySelector<HTMLInputElement>("#year-selector");
    const monthSelect = container.querySelector<HTMLInputElement>("#month-selector");
    const selectedDateCell = container.querySelector(".calendar-cell.mcf-bg--bleu-fonce");
    const dateFromCalendar = new Date(+yearSelect!.value, +monthSelect!.value, +selectedDateCell!.textContent!);

    expect(dateFromCalendar.getTime()).toBe(new Date(1995, 8, 12).getTime());
  });

  test("Quand l'input de date est remplie, la date est renvoyée", async () => {
    let selectedDate: Date | null;
    const { container } = render(
      <Basic
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );

    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]');
    await userEvent.type(dayInput!, "12091995");

    expect(selectedDate!.getTime()).toBe(new Date(1995, 8, 12).getTime());
  });

  test("Quand input vide, pas de message d'erreur", () => {
    const { container } = render(<Basic />);
    const error = container.querySelector(".mcf-text--danger");
    expect(error).toBeNull();
  });

  test("Si prérempli avec valeur invalide, message d'erreur", async () => {
    render(<Basic min={new Date(2022, 10, 10)} value={new Date(2021, 10, 10)} />);
    expect(await screen.findByText(VALIDATION_MESSAGES.invalid)).toBeTruthy();
  });

  test("Si prérempli avec valeur valide, pas de message d'erreur", () => {
    const { container } = render(<AvecMinMax value={new Date(2023, 9, 20)} />);
    const error = container.querySelector(".mcf-text--danger");
    expect(error).toBeNull();
  });

  test("Si valeur valide devient invalide, message d'erreur", async () => {
    const { container } = render(<Basic value={new Date(2023, 10, 10)} />);
    const dateInput = container.querySelector('input[name="date"]');
    await userEvent.clear(dateInput!);

    const error = container.querySelector(".mcf-text--danger");
    expect(error).not.toBeNull();
  });

  test("Si valeur invalide devient valide, pas de message d'erreur", async () => {
    const { container } = render(<AvecMinMax value={new Date(2021, 10, 10)} />);
    const dateInput = container.querySelector<HTMLInputElement>('input[name="date"]');

    await userEvent.clear(dateInput!);
    await userEvent.type(dateInput!, "02022023");
    const nonExistentError = container.querySelector(".mcf-text--danger");
    expect(nonExistentError).toBeNull();
  });

  test("Quand min max même année, select année du calendar préselectionnée", async () => {
    const { container } = render(<AvecMinMax min={new Date(2022, 10, 10)} max={new Date(2022, 11, 10)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const yearSelect = container.querySelector<HTMLInputElement>('select[name="year"]');
    expect(yearSelect!.value).toBe("2022");
  });

  test("Quand min max même année, select année du calendar disabled", async () => {
    const { container } = render(<AvecMinMax min={new Date(2022, 10, 10)} max={new Date(2022, 11, 10)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const yearSelect = container.querySelector<HTMLInputElement>('select[name="year"]');
    expect(yearSelect!.disabled).toBeTruthy();
  });

  test("Quand min max même mois, select mois du calendar préselectionné", async () => {
    const { container } = render(<AvecMinMax min={new Date(2022, 10, 10)} max={new Date(2022, 10, 30)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const monthSelect = container.querySelector<HTMLInputElement>('select[name="month"]');
    expect(monthSelect!.value).toBe("10");
  });

  test("Quand min max même mois, select mois du calendar disabled", async () => {
    const { container } = render(<AvecMinMax min={new Date(2022, 10, 10)} max={new Date(2022, 10, 30)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const monthSelect = container.querySelector<HTMLInputElement>('select[name="month"]');
    expect(monthSelect!.disabled).toBeTruthy();
  });

  test("Quand min est supérieur à la date actuelle, le Calendar s'ouvre sur le mois du min", async () => {
    const { container } = render(<AvecMinMax min={FUTUR} max={new Date(FUTUR.getFullYear(), FUTUR.getMonth() + 1)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const monthSelect = container.querySelector<HTMLInputElement>('select[name="month"]');
    expect(monthSelect!.value).toBe(FUTUR.getMonth().toString());
  });

  test("Quand min est supérieur à la date actuelle, le Calendar s'ouvre sur l'année du min", async () => {
    const { container } = render(<AvecMinMax min={FUTUR} max={new Date(FUTUR.getFullYear(), FUTUR.getMonth() + 1)} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const yearSelect = container.querySelector<HTMLInputElement>('select[name="year"]');
    expect(yearSelect!.value).toBe(FUTUR.getFullYear().toString());
  });

  test("Quand max est inférieur à la date actuelle, le Calendar s'ouvre sur le mois du max", async () => {
    const { container } = render(<AvecMax max={PAST} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;

    await userEvent.click(calendarBtn);

    waitFor(() => {
      const monthSelect = document.querySelector<HTMLInputElement>('select[name="month"]');
      expect(monthSelect?.value).toBe(PAST.getMonth().toString());
    });
  });

  test("Quand max est inférieur à la date actuelle, le Calendar s'ouvre sur l'année du max", async () => {
    const { container } = render(<AvecMax max={PAST} />);
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);
    const yearSelect = container.querySelector<HTMLInputElement>('select[name="year"]');
    expect(yearSelect!.value).toBe(PAST.getFullYear().toString());
  });

  test("Quand sur le mois du min, chevron gauche absent", async () => {
    const { container } = render(<AvecMinMax value={new Date(2023, 0, 31)} />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const leftChevron = container.querySelector("#calendar-chevron-gauche");
    expect(leftChevron).toBeNull();
  });

  test("Quand mois > min, chevron gauche présent", async () => {
    const { container } = render(<AvecMinMax value={new Date(2023, 2, 20)} />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const leftChevron = container.querySelector("#calendar-chevron-gauche");
    expect(leftChevron).not.toBeNull();
  });

  test("Quand mois < max, chevron droit présent", async () => {
    const { container } = render(<AvecMinMax value={new Date(2023, 2, 20)} />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const rightChevron = container.querySelector("#calendar-chevron-droite");
    expect(rightChevron).not.toBeNull();
  });

  test("Quand sur le mois du min mais année > année min, chevron gauche présent", async () => {
    const { container } = render(<AvecMinMax value={new Date(2024, 0, 20)} />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const leftChevron = container.querySelector("#calendar-chevron-gauche");
    expect(leftChevron).not.toBeNull();
  });

  test("Quand sur le mois du max, mais année < année max, chevron droit présent", async () => {
    const { container } = render(<AvecMinMax value={new Date(2023, 1, 20)} />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const rightChevron = container.querySelector("#calendar-chevron-droite");
    expect(rightChevron).not.toBeNull();
  });

  test("Quand dépassement du mois max en changeant d'année, le Calendar se met sur le mois du max", async () => {
    let selectedDate: Date | null;
    const { container } = render(
      <AvecMinMax value={new Date(2023, 4, 20)} onChange={(d: Date | null) => (selectedDate = d)} />
    );

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const yearSelect = container.querySelector<HTMLInputElement>("#year-selector");
    await userEvent.selectOptions(yearSelect!, "2024");
    const calendarCell = container.querySelector(".calendar-cell");
    await userEvent.click(calendarCell!);
    // Cell must not be disabled, so click must change the date;
    expect(selectedDate!.getMonth()).toBe(0);
  });

  test("Si pas de min / max, chevron gauche affiché", async () => {
    const { container } = render(<Basic />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const leftChevron = container.querySelector("#calendar-chevron-gauche");
    expect(leftChevron).not.toBeNull();
  });

  test("Si pas de min / max, chevron droit affiché", async () => {
    const { container } = render(<Basic />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const leftChevron = container.querySelector("#calendar-chevron-droite");
    expect(leftChevron).not.toBeNull();
  });
});

describe("DatePicker - Accessibilité", () => {
  xtest("Quand je donne la prop dayInputLabelledBy au DatePicker, je la retrouve dans l'attribut aria-labbeledby de l'input jour", () => {
    const { container } = render(<Basic dayInputLabelledBy="test-jj" />);

    const dayInput = container.querySelector<HTMLInputElement>('input[name="day"]') as HTMLInputElement;
    expect(dayInput.getAttribute("aria-labelledBy")).toBe("test-jj");
  });

  xtest("Quand je donne la prop monthInputLabelledBy au DatePicker, je la retrouve dans l'attribut aria-labbeledby de l'input mois", () => {
    const { container } = render(<Basic monthInputLabelledBy="test-mm" />);

    const monthInput = container.querySelector<HTMLInputElement>('input[name="month"]') as HTMLInputElement;
    expect(monthInput.getAttribute("aria-labelledBy")).toBe("test-mm");
  });

  xtest("Quand je donne la prop yearInputLabelledBy au DatePicker, je la retrouve dans l'attribut aria-labbeledby de l'input année", () => {
    const { container } = render(<Basic yearInputLabelledBy="test-yyyy" />);

    const yearInput = container.querySelector<HTMLInputElement>('input[name="year"]') as HTMLInputElement;
    expect(yearInput.getAttribute("aria-labelledBy")).toBe("test-yyyy");
  });

  test("Props disabled rend l'input day disabled", () => {
    const { container } = render(<Disabled />);

    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]') as HTMLInputElement;
    expect(dayInput.disabled).toBeTruthy();
  });

  test("Quand disabled, ne peux pas ouvrir le calendrier.", async () => {
    const { container } = render(<Disabled />);

    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const calendar = container.querySelector(".calendar");
    expect(calendar).toBeNull();
  });
});

describe("Fixes", () => {
  test("Quand date invalide dans le champs et ouvre le Calendar, Calendar s'ouvre normalement", async () => {
    let selectedDate: Date | null;

    const { container } = render(
      <Basic
        value={new Date()}
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );
    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]') as HTMLInputElement;
    await userEvent.type(dayInput, "40");
    const calendarBtn = container.querySelector(".picker-btn") as Element;
    await userEvent.click(calendarBtn);

    const calendar = container.querySelector(".calendar");
    expect(calendar).not.toBeNull();
  });

  test("Quand date invalide dans le champ, le DatePicker renvoit null", async () => {
    let selectedDate: Date | null = new Date();

    const { container } = render(
      <Basic
        onChange={(date: Date | null) => {
          selectedDate = date;
        }}
      />
    );
    const dayInput = container.querySelector<HTMLInputElement>('input[name="date"]') as HTMLInputElement;
    await userEvent.type(dayInput, "40");

    expect(selectedDate).toBeNull();
  });
});
