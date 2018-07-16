# search-result-page

It is a simple react app for a search results lisitng card view!
the project has the back-end and the front-end in the same folder.

the front-end folder where react lives (react-ui)
the back-end folder where i create the server (the main folder) in case we want to serve the app from the server side.
each has a separate package.json as they are combined apps

To run the project:


Make sure you have these installed: "node, yarn"
now go to the app folder and just run yarn install on the (back end folder main folder) and  or navigate to
the front-end folder(react-ui) and also run yarn install and then yarn build
	

you have two choices to use the app served from the back-end or the front-end 

if you on the front-end folder do "yarn serve" and it will run on : http://localhost:3000/
or if you wanna serve it from the back-end folder : "yarn start" and it will run on : http://localhost:7000/

Note : it is very imp to run yarn build on the front-end folder (react-ui) to build the project.


On the react-ui folder there are differnet components: 
CardPreview: for the listing card. it has it own styles file in side a style folder.

SearchResults: this component hold the list and it has a loop on the each list and pushing data to the CardPreview as a child.
On this component also i am using the axois util function (service ) function to fetch data from search results (fetchSearchResultsList)

Shared: This folder has some shard components across the website for example the header and also not found page incase the routing is not correct



on main folder :
yarn install
TO RUN : yarn start

on front-end folder  (react-ui):
yarn install
yarn build
TO RUN : yarn serve 


thank you,

Hesham


