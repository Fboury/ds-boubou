"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayOfLength = (length, from = 1) => Array.from({ length }, (_, k) => from + k);
function calculMobile(pageActive, nombreBoutonsAffiches, nombrePages) {
    const nbBoutonsSansExtremites = nombreBoutonsAffiches - 1;
    if (pageActive >= nombrePages - nombreBoutonsAffiches + 1) {
        return arrayOfLength(nombreBoutonsAffiches, nombrePages - nombreBoutonsAffiches + 1);
    }
    return arrayOfLength(nbBoutonsSansExtremites, pageActive);
}
function calculDesktop(pageActive, nombreBoutonsAffiches, nombrePages) {
    const nbBoutonsSansExtremites = nombreBoutonsAffiches - 2;
    if (pageActive <= nbBoutonsSansExtremites) {
        return arrayOfLength(nombreBoutonsAffiches - 1);
    }
    if (pageActive >= nombrePages - nombreBoutonsAffiches + 3) {
        return arrayOfLength(nombreBoutonsAffiches - 1, nombrePages - nombreBoutonsAffiches + 2);
    }
    return arrayOfLength(nbBoutonsSansExtremites, pageActive - Math.round(nbBoutonsSansExtremites / 2 - 1));
}
function calculerPagesAffichees(pageActive, nombreBoutonsAffiches, nombrePages, afficherExtremites, isMobile) {
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
exports.default = calculerPagesAffichees;
//# sourceMappingURL=calculerPagesAffichees.js.map