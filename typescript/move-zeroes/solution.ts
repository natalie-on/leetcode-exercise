/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let nonZeroPos = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      [nums[nonZeroPos], nums[i]] = [nums[i], nums[nonZeroPos]];
      ++nonZeroPos;
    }
  }
};
