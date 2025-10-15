  // YOUR CODE HERE >>

  let result = prompt("Question: Who created JavaScript?\n\n" +
  "A) Brendan Eich\n" +
  "B) Bill Gates\n" +
  "C) Mark Zuckerberg\n\n" +
  'Please select the correct option (A, B, or C).", "")\n')
  
  result = result.trim().toUpperCase();
  if(result === "A")
	alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
  else if(result === "B")
	alert("Nope. He lead the development of the Windows Operating System.");
  else if(result === "C")
	alert("Nope. He just came up with the idea for a social network idea.");