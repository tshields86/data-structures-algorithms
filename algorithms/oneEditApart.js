const oneEditApart = (s1, s2) => {
  if (s1.length > s2.length) {
    const temp = s1;
    s1 = s2;
    s2 = temp;
  };
  if (s2.length - s1.length > 1) return false;

  let sawDiff = false;
  for (let i = 0, j = 0; i < s1.length; i++, j++) {
    if (s1[i] !== s2[j]) {
      if (sawDiff) return false;
      sawDiff = true;
      if (s2.length > s1.length) i--;
    }
  }
  return sawDiff || s2.length !== s1.length;
};
