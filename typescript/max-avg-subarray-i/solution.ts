function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  let maxAvg = sum / k;
  
  const diff = nums.length - k;
  
  for (let i = 1; i <= diff; ++i) {
    sum -= nums[i - 1] - nums[i + k - 1];
    
    const currentAvg = sum / k;
    maxAvg = (currentAvg > maxAvg) ? currentAvg : maxAvg;
  }

  return maxAvg;
};
