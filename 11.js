// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

 



// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let length = height.length;
    let l = 0;
    let r = length - 1;
    let max  = 0;
    while( l < r ) {
       max = Math.max(max, Math.min(height[l], height[r])* (r-l) );
       if (height[l] < height[r])
                l++;
        else r--;
                
    }
    return max;
};
var maxArea1 = function(height) {
    let length = height.length;
    let i = 0;
    let max  = 0;
    while( i < length ) {
        let j = i + 1;
        while( j < length) {
            let res  = Math.min(height[i] , height[j]) * (j-i)
            if(res > max) max =res;
            j++;
        }
        i++;
    }
    return max;
};


const height =  [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height))