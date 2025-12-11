## Submit result on Leetcode

![alt text](image.png)

## Method:
- Replace all non-regular characters of the input string to empty ``''``, with the format to detect those non-regular characters is ``/[^a-zA-Z0-9]/``.
- Turn the replaced string to lowercase.
- Iterate through the half replaced string length, using index ``i``  and ``j`` to compare the ``ith`` character with the ``jth`` character. If not equals, the input string is not palindrome.