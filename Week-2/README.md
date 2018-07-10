## Week2 - Have fun with Javascript



This week, I add some interaction to the responsive page made last week. Users can load more content on home page now.

<br>


## Tasks


### 1. Write a function to sum all args

```
const sum = (...nums) => {
    return nums.reduce((sum, val) => sum + val, 0);
}
```

💻 [code here](./sum.js)



<br>
### 2. Create object matches 

Given a function like below, try at least two different ways to create objects as it args.

```
function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
```

I tried four different ways to create an object.

💻 [code here](./createObject.js)



<br>
### 3. HTML DOM and Event Handling

([View Demo](https://skyying.github.io/remote-assignments/Week-1/dist/index.html))

1. click a DOM element to change text
2. Toggle menu effect  
3. Show more contents after click more button


<br>

![screenshot](./screen.gif)



<br>
### 4. TwoSum 

Given an array, and a target number, return indexs of any two elements that their sum is the given target number. 


##### if an array is not sorted

If a given array is sorted, then for every element, we can use hash to query if a complement exsit or not. Every element, can either already have a complement, if a complement exists, return index of current index and complement's index, else add current element and their index to hash table. Hash only take O(1) to query, there are n elements, so the worse case of time compleixity will be O(n).

💻 [Code Here](./twoSum.js)

##### if an array is sorted

there are many ways to do this, one is using sliding window method, or binary search, which only take o(log N) time;

💻 [Code Here](./twoSum.js)


