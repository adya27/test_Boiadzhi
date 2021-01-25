export const sortByIdAsc = (array) =>
  array.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
export const sortByAgeAsc = (array) =>
  array.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });

export const sortByNameAsc = (array) =>
  array.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

export const sortByNameDesc = (array) =>
  array.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });

export const sortByAgeDesc = (array) =>
  array.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    }
    if (a.age < b.age) {
      return 1;
    }
    return 0;
  });

export const sortByIdDsc = (array) =>
  array.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  });
