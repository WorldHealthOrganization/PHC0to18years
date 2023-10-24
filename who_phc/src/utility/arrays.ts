export const addSelectedSymptom = (previousArray: string[], newElement: string) => {
    previousArray.push(newElement);
    return previousArray;
  };
  
 export const removeSelectedSymptom = (
    previousArray: string[],
    elementToDelete: string,
  ) => {
    const isEqual = (element: string | number) => element == elementToDelete;
    const index = previousArray.findIndex(isEqual);
    previousArray.splice(index, 1);
    return previousArray;
  };
  