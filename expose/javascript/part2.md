1) Line 12 will just print 3, since i will be 3 when the for-loop breaks, and var isn't block-scoped (meaning console log can access it from outside the for loop).
2) Line 13 should print discounterPrice, and the result should be prices[2] * (1-discount), which should evaluate to 300*(1-0.5)=300*0.5=150.
3) Line 14 should print finalPrice, which should be the result of Math.round(discountedPrice * 100) / 100, which should be Math.round(150*100)/100 = 150. Line 14 should print 150.
4) This function should return an array of size three with the following values: [50,100,150].
5) This should give a ReferenceError, since i is only accessible within the for loop (since it was declared as let). Line 12 is outside the for loop and cannot access i.
6) This should give a ReferenceError for the same reason as Q5 - discounterPrice is declared as a let inside a block but then we try to access it from outside that block.
7) Line 14 should print out 150. Since finalPrice was declared in the same block as the console statement, it can access it with no problem. It was modified in the for loop to be 150.
8) This function will return the same as before, [50,100,150]. Discounted is declared in the function but outside the for loop so it will be correctly modified by the operations there. 
9) We get a ReferenceError error. Line 11 tries to access i outside of the block it is declared in so it cannot do so. 
10) Line 12 should work fine and print 3. Since line 7 redeclares discountedPrice there's no typeError issue, and const discounted only means it cannot be reassigned (but we can push to it).
11) The function should return [50,100,150]. There is no problem on lines 7 & 8 for the same reasons as Q10.