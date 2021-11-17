# Family Command Center
As in many households, it seems like there are so many things to manage through-out the week.  The Family Command Center Application is one stop show for managing your household.  The application will locate so many different resources into one central location.  An ongoing menu that you can update. A list of assigned chores/tasks to family members with statuses.  A quote of the day to inspire the family and a joke for laughter. A list of important links like school calendar or an ordering link to your favorite pizza joint. Of course, we should also have a shopping list that everyone can add to. A component to show today's forecast. Ultimately, this application will be displayed on a monitor as we leave or come into our home. 

## Heroku Deployment
https://family-command-center.surge.sh/ (FRONTEND)
https://family-command-center.herokuapp.com/ (BACKEND)

## Family Command Center Repos (PRIVATE)
https://github.com/eldydeines/fcc-frontend
https://github.com/eldydeines/fcc-backend

## Full Stack Application
### TECH STACK: REACT JS, NODE JS, EXPRESS JS, POSTGRESQL
This project will utilize both front and back end evenly. The React front-end will encapsulate all the information from the different APIs and backend database into one page. There will be several light weight components that can be reutilized by other parts of the application. The Node/Express and PostgreSQL backend will help to respond to requests for Family Accounts.  The backend will provide the specific details on tasks, meal preferences, and menus for the family. 

## Audience
This application is directed to any household. Anyone that lives with another human being can definitely utilize so they can share household tasks and updates   

## Data to utilize

### Internal Data Sources
- User Accounts
- Household (HH) Preferences
- Family Tasks
- Shopping Items
- Recipes, Menus, Favorites
- Family Links & References
- Web Scraped Jokes
- Web Scraped Quotes

### External Data Sources
- TWILIO SMS API - A trigger point to allow 
- EDAMAM RECIPE SEARCH - A set of recommended recipes that can be used to determine the family's request for next week's menu.
- Weather.Gov - The daily forecast based on location preference. 

## Approach
The following list is the approach taken to develop this full stack application. 

### Design
Designing will help to ensure the application is most optimized. 
- [1] Develop Database Design with internal data sources and external data sources.
- [2] Develop Architecture Design i.e. the interfaces and touch points from front end to backend APIs.
- [3] Develop overall Application Design with front-end components and back-end components.

### Build & Test
Build will be in small packages for each feature/data set.
- [1] Build database and tables 
- [2] Build each feature with backend and frontend response
- [3] Build routing and navigation with each feature 

### Deploy
- [1] Build back-end package and deploy
- [2] Build front-end packange and deploy

## User Stories
EndUsers
- As a user, I want to us my Gmail account or be able to create my own account so that I can login. 

Menu & Recipes
- As a family member, I want to be able to see our weekly menu so that I know what we are eating. 
- As a family member, I can vote on the meal so that the cook knows this needs to be made again. 
- As a the menu planner, I want to search recipes to add to the family menu.
- As a the menu planner, I want to get the recipes that my family has voted on so that I can actually make the meal!
 
Task List 
- As a family member, I can see the list of assigned tasks so that I can do them!
- As a family member, I can change the status of the assigned task so that it has the latest status. 
- As a family member, I can add tasks and delete tasks with due dates so the task list reflects the latest. 

Shopping List
- As a family member, I would like to be able to add an item to the shopping list so anyone knows what to get from the store. 
- As a family member, I would like to see the shopping list for quick reference.

For fun!
- As a family member, I would like to see a quote of the day so that we can inspire the family.
- As a family member, I would like to have a laugh so that we have a little humor in the day. 

Quick Links and References
- As a family member, I would like to have quick phone numbers on standby so that everyone has access (like granny's number). 
- As a family member, I would like a list of "often visited" links available so we can get a food order in quickly. 

Notifications
- As a family member, I would like to text myself the shopping list so that I know what I need to buy. 

Weather
- As a family member, I would like to see weather alerts so that I can dress appropriately.

## Stretch Goals
- Possibly build on AWS 

## Updates
- I may remove google login as it makes the app a bit buggy. 
- I may add just reminder list of important events like a birthday reminder.
- I may even rebuild to be completely built on Node Js without React Front-End so that passport may be used more efficiently.
