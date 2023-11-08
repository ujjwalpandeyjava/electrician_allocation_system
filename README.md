## What I think about the algorithm
1. To decide which electrician is good for the site work will need multiple scenarios, such as: 
	- electrician availability,
	- site work time,
	- amount of site work,
	- hours needed on site to complete the work,
	- 3rd collection to keep a proper record,
	- 3rd collection to decide where and when the electrician is busy, 
	- working zone, and
	-  many more

2. To make it a real product, It will need more technologies such as, react-redux, some library to properly setup the forms, actions 
3. The algorithm to set the electrician on a site will need better DB structure with each site, date and related details in it.
4. DB will have 3 different tables/collection for better mapping of the assigning and manipulations

## What I think about the UI
1. We will need proper db and db calls as per the electrician, site, and the working site.
2. Each list will come from the db on render
3. Ever-time the data will update on db we have to re-render the component

It remembers the site date changed