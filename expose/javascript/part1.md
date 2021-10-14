1) Line 9 prints "values added:  20"
2) Line 13 prints "final result:  20"
3) Line 9 prints "values added:  20"
4) Line 13 gives an error: "ReferenceError: result is not defined". Since result was declaed with let, it cannot be accessed outside of the if block. The final result console log is outside of that if block and therefore cannot access result.
5) Line 9 gives a TypeError: Assignment to constant variable. Since result is constant, we can't give it a new value so we'll obviously error out.
6) It seems that we don't even get to line 13.