function whosPaying(names) {
    
	/******Don't change the code above*******/
			
			//Write your code here.
			var num_names = names.length;
			var rand_index = Math.floor(Math.random() * num_names)
			var payer = names[rand_index]
			var result = payer + " is going to buy lunch today!"
			return result
			
	/******Don't change the code below*******/    
	}