# Homework3
Random Password Generator

Started off by thinking of and writing down all the possible variables and prompts I needed for the generator.

Using https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/ as a reference, I created a function that randomly generates a 8 character
password. I then got rid of the 8 and created a variable/prompt that lets the user speicfy the amount of characters.

After this, I got stuck for a little bit trying to figure out a way to incroporate the user's prompts to create the random password. I decided to use a collection
of if staements that added characters to a empty string I defined as userChoices when the user chooses ok/yes. I then followed those with a if that statement that
alerts with a error if the user does not choose at least one character type.

Everything seemed to be working good and then I realized that the user could still type in a number below 8 characters or above 128. I created a couple more if 
statements that follow the passLength prompt and if the user types less than 8 or more than 128 characters it alerts with an error and refreshes the page. At first, 
this didn't work but then I moved the prompt so it was the last one to pop up after the other prompts and it worked.

I wanted to practice my css, so I created a new color scheme for the generator and page.
