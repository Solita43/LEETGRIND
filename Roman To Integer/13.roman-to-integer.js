/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map of roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50, 
        'C': 100,
        'D': 500,
        'M': 1000
    };
    // Initialize sum to 0
    let sum = 0;
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Get the current and next roman numeral
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        // If the current numeral is less than the next numeral, subtract the current numeral from the next numeral
        if (current < next) {
        sum += next - current;
        i++;
        } else {
            // Otherwise, add the current numeral to the sum
        sum += current;
        }
    }
    // Return
    return sum;
    
};
// @lc code=end

