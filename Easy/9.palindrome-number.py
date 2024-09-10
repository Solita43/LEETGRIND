#
# @lc app=leetcode id=9 lang=python3
#
# [9] Palindrome Number
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        # if the number is negative it cannot be a palidrome so must return false
        if x < 0:
            return False
        

        original = x
        reverse = 0

        while original > 0:
            remainder = original % 10 
            original = original // 10

            reverse = reverse * 10 + remainder
        
        return reverse == x

# RESULTS

# Accepted
# 11511/11511 cases passed (47 ms)
# Your runtime beats 83.52 % of python3 submissions
# Your memory usage beats 40.71 % of python3 submissions (16.5 MB)
        
# @lc code=end

