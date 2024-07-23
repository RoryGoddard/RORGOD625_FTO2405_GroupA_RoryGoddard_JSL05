# [JSL05] Submission: Galaxy Playlist Generator

### Galaxy Playlist Generator

In this challenge, we used the map function, combined with other array methods such as foreach, to dynamically create playlists on a website for each guardian, containing the music from their particular preferred genre.

![alt text](JSL05_solution.png)

## Challenges Faced
The biggest challenge was refactoring my function. I had initially taken my time to create a function using array methods such as filter and foreach, and only after completing my project did I see I needed to be using map specifically, not filter. I suppose this was good as I struggled to understand why I should be using map and in addition, how to use it effectively. This challenged me and I spent the day researching map in more detail and I found that it did provide a layer of abstraction over my previous function, as I could pass in an array with two parameters into map. These two parameters would be the respective guardians name, and their preferred genre, this would be taken from the guardians object. I could then define within my arrow function that I would like to map the parameters to be the elements within a new object. This new object would have the guardians name as the key, followed by a variable playlist as the value, the value of which would be equal to the songs array where we filter the array such that we only add songs to the playlist if the songs genre matches that respective guardians preferred genre. As complicated as this sounds in plain english, the implementation resulted in my code being more concise and DRY.

## Final Thoughts
I learnt a lot with this challenge and despite being confident with arrays going into this I feel I have learnt an indispensible amount about array methods. For this, I have a sense of pride in what I have accomplished with this project.







