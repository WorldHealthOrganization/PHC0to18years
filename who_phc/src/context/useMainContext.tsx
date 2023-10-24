import React, {
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import SortBy from '../domains/enums/SortBy';

interface ContextProps {
  children: ReactNode;
}

interface IContextType {
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  imageModalOpen: boolean;
  setImageModalOpen: Dispatch<SetStateAction<boolean>>;
  imageSrc: string;
  setImageSrc: Dispatch<SetStateAction<string>>;
}

const contextDefaultValues: IContextType = {
  sortBy: SortBy.Default,
  setSortBy: () => null,
  fontSize: 20,
  setFontSize: () => null,
  language: 'en',
  setLanguage: () => null,
  imageModalOpen: false,
  setImageModalOpen: () => null,
  imageSrc: '',
  setImageSrc: () => null,
};

export const MainContext =
  React.createContext<IContextType>(contextDefaultValues);

export const MainContextProvider = ({
  children,
}: ContextProps): JSX.Element => {
  const [sortBy, setSortBy] = useState(contextDefaultValues.sortBy);
  const [fontSize, setFontSize] = useState(contextDefaultValues.fontSize);

  const [language, setLanguage] = useState(contextDefaultValues.language);

  const [imageModalOpen, setImageModalOpen] = useState(contextDefaultValues.imageModalOpen);
  const [imageSrc, setImageSrc] = useState(contextDefaultValues.imageSrc);

  useEffect(() => {
    if (imageSrc) {
      setImageModalOpen(true);
    }
  }, [imageSrc])

  useEffect(() => {
    if (!imageModalOpen && imageSrc) {
      setImageSrc(contextDefaultValues.imageSrc);
    }
  }, [imageModalOpen])

  return (
    <MainContext.Provider
      value={{
        sortBy,
        setSortBy,
        fontSize,
        setFontSize,
        language,
        setLanguage,
        imageModalOpen,
        setImageModalOpen,
        imageSrc,
        setImageSrc,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default () => useContext(MainContext);
