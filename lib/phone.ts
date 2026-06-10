export const PHONE_WITH_COUNTRY_CODE_MESSAGE =
  "Le numero de telephone doit inclure l'indicatif pays, ex: +2250700000000.";

export function normalizeInternationalPhone(phone: string): string {
  return phone.replace(/[\s().-]/g, "");
}

export function isValidInternationalPhone(phone: string): boolean {
  return /^\+[1-9]\d{7,14}$/.test(normalizeInternationalPhone(phone));
}
