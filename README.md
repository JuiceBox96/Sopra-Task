# Sopra-Task

## Interval List Intersections
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and
secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.
A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a
closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
Exercise

Write a function, GetIntersection which returns the intersection of these two interval lists.
Write a test method which passes the supplied examples.

Example 1:
Input:
firstList = [[0,2],[5,10],[13,23],[24,25]]
secondList = [[1,5],[8,12],[15,24],[25,26]]
Output:
[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Example 2:
Input:
firstList = [[1,3],[5,9]]
Interval List Intersections.md 12/21/2021
2 / 2
secondList = []
Output:
[]

Example 3:
Input:
firstList = [[1,7]]
secondList = [[3,10]]
Output:
[[3,7]]


Constraints:
0 <= firstList.length, secondList.length <= 1000 (this is to make sure the list list is small)
firstList.length + secondList.length >= 1 (the lists are not empty)
0 <= starti < endi <= 109 (numbers are not negative and values are less than 109)
endi > starti+1 (end of list is larger than start)
0 <= startj < endj <= 109 (as above but for second list)
endj > startj+

### How I Planned The Challenge

https://flame-philosophy-db3.notion.site/Project-Interval-List-Intersections-b58770dee43b4257b1edafec2b5d6824
