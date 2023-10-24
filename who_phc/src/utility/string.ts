import he from 'he';

export const compareWithDecoding = (text: string, searchText: string) =>
  he.decode(text).includes(he.decode(searchText));
