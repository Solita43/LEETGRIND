/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let original = x.toString()
    let reversed = original.split("").reverse().join("")

    return original === reversed
    
};
// @lc code=end

