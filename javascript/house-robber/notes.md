## Submit result on Leetcode
![alt text](image.png)

## Method:
- Edge Case: If there are 2 or fewer houses, sort and return the highest value immediately.

- Tracking: Create an array (`sumArr`) to store the maximum possible loot up to each house.

- Base Cases: Set the first element as the first house's value, and the second element as the max of the first two.

- Loop: Iterate through the list starting from the third house.

- Decision: At each step, choose the maximum between skipping (taking the value from `i-1`) or robbing (adding current money to the value from `i-2`).

- Result: Return the last value in the tracking array as the final maximum sum.
