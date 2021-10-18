1. Line 12 will just print 3, since i will be 3 when the for-loop breaks, and var isn't block-scoped (meaning console log can access it from outside the for loop).
2. Line 13 should print discountedPrice, and the result should be prices[2] * (1-discount), which should evaluate to 300*(1-0.5)=300*0.5=150. Line 13 should print 150. There's no scope issue since discountedPrice is a var.
3. Line 14 should print finalPrice, which should be the result of Math.round(discountedPrice * 100) / 100, which should be Math.round(150*100)/100 = 150. Line 14 should print 150. Again, there's no issue with the scope of finalPrice since it is a var.
4. This function should return an array of size three with the following values: [50,100,150]. It was made by pushing the finalPrices made in the for loop, which means the values should be 0.5*the values of the prices array ([100,200,300]).
5. This should give a ReferenceError, since i is only accessible within the for loop (since it was declared as let). Line 12 is outside the for loop and cannot access i.
6. This should give a ReferenceError for the same reason as Q5 - discounterPrice is declared as a let inside a block but then we try to access it from outside that block.
7. Line 14 should print out 150. Since finalPrice was declared in the same block as the console statement, it can access it with no problem. It was modified in the for loop to be 150.
8. This function will return the same as before, [50,100,150]. Discounted is declared in the function but outside the for loop so it will be correctly modified by the operations inside the for loop and remain accessible to the console statement. 
9. We get a "ReferenceError: i is not defined" error. Line 11 tries to access i outside of the block it is declared in so it cannot do so. 
10. Line 12 should work fine and print 3. Since line 7 redeclares discountedPrice there's no typeError issue, and const discounted only means it cannot be reassigned (but we can push to it). console.log(length) is in the same scope as the declaration of length so there is no problem accessing it.
11. The function should return [50,100,150]. There is no problem on lines 7 & 8 for the same reasons as Q10. The discountedPrice values get pushed into discounted as they get calculated from the input prices, all in the for loop.
12.  .
    - A)   student.name
    - B)   student['Grad Year']
    - C)   student.greeting()
    - D)   student['Favorite Teacher'].name or student['Favorite Teacher']['name']
    - E)   student.courseLoad[0]
13. .
    - A)   '32', since 2 maps to '2' and the strings concatenated give '32'.
    - B)   1, since '3' maps to 3 and we get 3-2=1. Weird that - makes the string map and + makes the number map.
    - C)   3, since null maps to 0, 3+0=3
    - D)   '3null', since null maps to "null"
    - E)   4, since true maps to 1.
    - F)   0, since both false and null map to 0.
    - G)   '3undefined', since undefined maps to "undefined".
    - H)   NaN, since undefined maps to NaN.

14. .
    - A)   true, since '2' turns into 1 and 2>1
    - B)   false. Since we're comparing two strings we compare with lexographical order. Comparing '2' from '2' and '1' from '12', '2' is greater than '1', so '2' < '12' is false.
    - C)    true, since '2' gets mapped to 2 and 2==2 is true.
    - D)    false, since 2 and '2' aren't of the same type and we're using strict equality.
    - E)    false; true maps to 1, and 1 == 2 is false.
    - F)    true, Boolean(2) seems to evaluate to true, and true === true is true.
15. The == operator tries to convert mismatched types to then compare, but === does not. That is === immediately returns false when we compare variables of different types.
16. [in code]
17. The result will be [2,4,6]. In each iteration of the for loop newArr will get a new element: the result of callback(array[i]). The first time, that is the result of callback(1), i.e. 1\*2=2. The second time we get 2\*2=4. The third we get 6. Put it all together in newArr and we get [2,4,6].
18. [code]
19. I thought it would print 1,3,4,2. It actually prints 1,4,3,2. It seems to be that setTimeout pushes the function it uses to the back of the execution queue so that console.log(4) still executes before console.log(3) even though it has a 0 delay. 
source:https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
