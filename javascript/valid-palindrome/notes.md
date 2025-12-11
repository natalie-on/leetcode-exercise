## Submit result on Leetcode

![alt text](image.png)

## Method:
- Replace all non-regular characters of the input string to empty ``''``, with the format to detect those non-regular characters is ``/[^a-zA-Z0-9]/``.
- Turn the replaced string to lowercase.
- Iterate through the replaced string from the final to the first character, append it to new string called ``palindromeStr``.
- Compare ``palindromeStr`` and ``replacedStr`` to see if it is equal, then the input string is a valid palindrome.