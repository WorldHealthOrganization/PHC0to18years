export const getSearchSplashScreen = (loading: boolean, searchText: string) => {
  let splashScreen = {
    title: "SearchModal.NoResults",
    icon: "note-off-outline",
  }

  if (loading) {
    splashScreen = {
      title: "SearchModal.Searching",
      icon: "file-search-outline",
    }
  }

  if (!loading && (!searchText || searchText && !searchText.length)) {
    splashScreen = {
      title: "SearchModal.TypeSomething",
      icon: "draw-pen",
    }
  }

  return splashScreen;
}