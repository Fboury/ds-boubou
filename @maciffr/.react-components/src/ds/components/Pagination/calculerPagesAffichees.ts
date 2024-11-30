const arrayOfLength = (length: number, from: number = 1) => Array.from({ length }, (_, k) => from + k);

function calculMobile(pageActive: number, nombreBoutonsAffiches: number, nombrePages: number): number[] {
  const nbBoutonsSansExtremites = nombreBoutonsAffiches - 1;

  if (pageActive >= nombrePages - nombreBoutonsAffiches + 1) {
    return arrayOfLength(nombreBoutonsAffiches, nombrePages - nombreBoutonsAffiches + 1);
  }

  return arrayOfLength(nbBoutonsSansExtremites, pageActive);
}

function calculDesktop(pageActive: number, nombreBoutonsAffiches: number, nombrePages: number): number[] {
  const nbBoutonsSansExtremites = nombreBoutonsAffiches - 2;

  if (pageActive <= nbBoutonsSansExtremites) {
    return arrayOfLength(nombreBoutonsAffiches - 1);
  }

  if (pageActive >= nombrePages - nombreBoutonsAffiches + 3) {
    return arrayOfLength(nombreBoutonsAffiches - 1, nombrePages - nombreBoutonsAffiches + 2);
  }

  return arrayOfLength(nbBoutonsSansExtremites, pageActive - Math.round(nbBoutonsSansExtremites / 2 - 1));
}

function calculerPagesAffichees(
  pageActive: number,
  nombreBoutonsAffiches: number,
  nombrePages: number,
  afficherExtremites: boolean,
  isMobile: boolean
): number[] {
  if (!afficherExtremites) {
    return arrayOfLength(nombrePages);
  }

  if (nombreBoutonsAffiches >= nombrePages) {
    return arrayOfLength(nombrePages);
  }

  if (isMobile) {
    return calculMobile(pageActive, nombreBoutonsAffiches, nombrePages);
  }

  return calculDesktop(pageActive, nombreBoutonsAffiches, nombrePages);
}

export default calculerPagesAffichees;
