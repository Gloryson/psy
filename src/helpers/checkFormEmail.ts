



export const checkFormEmail = (email: string): boolean => {
  return /^[a-z0-9-+_.]{2,30}@[a-z0-9]{1,20}\.[a-z0-9]{1,9}$/.test(email);
}