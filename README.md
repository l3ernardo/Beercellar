For this challange, I created beer cellar app

From the list of functionalities propose in this challenge.

I created an started list of beers bottles using external API;

* I had blocker where I could not access any of the API listed in the challange description, due to company policy, security FortiClient just blocked the api.
So I used another called: https://api.punkapi.com/v2/beers/

I completed Detail view for the bottle list,

I failed to complete the possibility to add new bottles due to time;

I put in place simple search, can search by bottle name or tag;

I used the remote api from punkapi to get all the data detail for bottle list.
 
For this challange, I used React and css with no framework

The CSS part was mostly copied from small apps I develop, I thought would be faster


About the app architecture, I build the app using React Context api, I thought would be much faster managing state then using Redux, since this was small app, 
components end up passing prop through every level of the tree.
