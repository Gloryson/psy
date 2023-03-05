



export const checkFormName = (name: string): boolean => {
  return /^[а-я ]{3,30}$/i.test(name);
}