export const loadSession = key => {
  try {
    const value = sessionStorage.getItem(key);

    if (value === null) {
      return undefined;
    }

    return value;
  } catch (e) {
    return undefined;
  }
};

export const saveSession = (key, value) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
