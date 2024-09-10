/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 */

// @lc code=start
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	var reverse int = 0
	var original int = x

	for original > 0 {
		reverse = reverse * 10 + (original % 10)

		original = original / 10
	}

	return reverse == x

    
}

// RESULTS 
// Accepted
// 11511/11511 cases passed (12 ms)
// Your runtime beats 57.15 % of golang submissions
// Your memory usage beats 94.08 % of golang submissions (4.2 MB)
// @lc code=end

