## Submit result on Leetcode
![alt text](image.png)

## Method:

- **Input Check:** Return `false` if $n \le 0$. Powers of three must be positive.
-  **Exponent Calculation:** Calculate the potential exponent $x = \frac{\log(n)}{\log(3)}$ and round it to account for floating-point inaccuracies.
- **Power Validation:** Return `true` if $3$ raised to the rounded power $x$ is equal to $n$ ($3^x = n$).