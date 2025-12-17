function gcdOfStrings(str1: string, str2: string): string {
  const shorterStr = (str1.length < str2.length) ? str1 : str2;
  const longerStr = (str1.length < str2.length) ? str2 : str1;

  function validateBase(currentLength: number): string {
    if (currentLength === 0) {
      return '';
    }

    if (
      shorterStr.length % currentLength !== 0 || 
      longerStr.length % currentLength !== 0
    ) {
      return validateBase(currentLength - 1);
    }

    const candidate = shorterStr.substring(0, currentLength);
    
    if (shorterStr.split(candidate).join('') !== '') {
      return validateBase(currentLength - 1);
    }

    if (longerStr.split(candidate).join('') !== '') {
      return validateBase(currentLength - 1);
    }
    
    return candidate;
  }

  return validateBase(shorterStr.length);
};
