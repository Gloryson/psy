



export const checkFormText = (text: string): boolean => {
  return /^.{10,1000}$/i.test(text);
}