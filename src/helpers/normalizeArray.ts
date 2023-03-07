import { ContentData } from "../App";



export const normalizeArray = (initArray: any[]): ContentData[] => {
  return Object.entries(initArray).map(note => {
    return {
      id: note[0],
      url: note[1].url,
      title: note[1].title,
      text: note[1].text
    };
  })
}