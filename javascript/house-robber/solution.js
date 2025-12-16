/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const n = nums.length;
  if (n <= 2) {
    nums.sort(function(a, b) { return b - a; });
    return nums[0];
  }

  let sumArr = [];

  sumArr[0] = nums[0];
  sumArr[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; ++i) {
    const skipOpt = sumArr[i - 1];
    const takeOpt = nums[i] + sumArr[i - 2];

    sumArr[i] = Math.max(skipOpt, takeOpt);
  }

  return sumArr[n - 1];
};
