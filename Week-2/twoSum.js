// for unsorted array, time complexity is O(n)
function twoSum(nums, target) {
    let hash = {},
        diff;

    let i = 0,
        len = nums.length;
    for (; i < len; i++) {
        diff = target - nums[i];
        if (hash[diff]) {
            return [i, hash[diff]];
        }
        hash[nums[i]] = i;
    }
}

// if sorted, can use binary search, time complexity is O(log n)
function sortedTwoSum(numbers, target) {
    let i = 0,
        len = numbers.length;
    for (; i < len; i++) {

        let start = i,
            end = len - 1,
            mid,
            sum;

        while (start <= end) {
            mid = start + Math.floor((end - start) / 2);
            sum = numbers[mid] + numbers[i];

            if (sum == target && mid !== i) {
                return [i + 1, mid + 1];
            } else if (sum > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
}
