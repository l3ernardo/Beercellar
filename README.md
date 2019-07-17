This is my Beer cellar app

I created an started list of beers bottles using external API;

For this challange, I used React and CSS with no framework
The CSS part was mostly copied from small apps I develop, I thought would be faster

* I had blocker where I could not access any of the API listed in the document description, due to company policy, security FortiClient just blocked the api web sites.

So I used another api called: https://api.punkapi.com/v2/beers/

The features to this point were, list of beer bottles with simple search option to search bottle name or tag;

*Still working on the possibility to add new bottles, I had some blocker when I started, still need to look into that.

I used the remote api from punkapi to get all the data detail for bottle list.
 

About the app architecture, I build the app using React Context api as point entry data, I thought would be much faster managing state then using Redux, since this was small app, components end up passing prop through every level of the tree.
