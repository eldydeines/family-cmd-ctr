# Family Command Center
As in many households, it seems like there are so many things to manage through-out the week.  The Family Command Center Application is one stop show for managing your household.  The application will locate so many different resources into one central location.  One consolidated calender list of upcoming appointments, birthdays, soccer practices, etc. Suggested recipes for the week based on your family's preferences (with voting buttons for the family) and scheduling to a menu. A list of assigned chores/tasks to family members with statuses.  A quote of the day to inspire the family and a joke for laughter. Latest photos taken and shared with the family. A list of important links like school calendar or an ordering link to your favorite pizza joint. Of course, we should also have a shopping list that everyone can add to. A component to show today's forecast. Lastly, a text notification for important reminders. Ultimately, this application will be displayed on a monitor as we leave or come into our home. Families will be able to update preferences on a mobile friendly website. 

## Full Stack Application
### TECH STACK: REACT JS, NODE JS, EXPRESS JS, POSTGRESQL
This project will utilize both front and back end evenly. The React front-end will encapsulate all the information from the different APIs and backend database into one page. There will be several light weight components that can be reutilized by other parts of the application. The Node/Express and PostgreSQL backend will help to respond to requests for Family Accounts.  The backend will provide the specific details on tasks, meal preferences, and menus for the family. 

## Audience
This application is directed to any household. Anyone that lives with another human being can definitely utilize so they can share schedules and see it daily. There may be some work on the users side to ensure a seamless integration of calendars.   

## Data to utilize

### Internal Data Sources
- User Accounts
- User Preferences
- Family Tasks
- Saved and Voted Recipes
- Family Links

### External Data Sources
- GOOGLE DRIVE - A pull of latest photos from the last week. 
- GOOGLE CALENDAR - A pull of latest events and appointments on our calendar.
- TWILIO SMS API - A trigger point to allow 
- EDAMAM RECIPE SEARCH - A set of recommended recipes that can be used to determine the family's request for next week's menu.
- Weather.Gov - The daily forecast based on location preference. 
- Jokes.One - A daily joke to be added to the application.
- Inspiration GoProgram - A daily inspiration to be added to the applicaiton.


## Approach
The following list is the approach taken to develop this full stack application. 

### Design
Designing will help to ensure the application is most optimized. 
- [1] Develop Database Design with internal data sources and external data sources.
- [2] Develop Architecture Design i.e. the interfaces and touch points from front end to backend APIs.
- [3] Develop overall Application Design with front-end components and back-end components.
- [4] Develop test cases for test-driven development.

### Build & Test
Build will be in small packages for each feature/data set.
- [1] Build database and tables 
- [2] Build each feature with backend and frontend response
- [3] Build routing and navigation with each feature 

### Deploy
- [1] Build back-end package and deploy
- [2] Build frone-end packange and deploy

## User Stories
EndUsers
- As a user, I want to us my Gmail/Facebook account or be able to create my own account so that I can login. 
- As a user, I would like to add my preferences for the application so that it remembers my time zone and location.

Calendar Items
- As a family member, I want to see what's upcoming for the family so that I can plan accordingly.
- As a family member, I want to be able to add an event on the fly so that it will be posted in my google calendar and family calendar. 

Photos
- As a family member, I want to see recent photos that my family has taken so that I can enjoy last week's moments. 
- As a family member, I want to be able to share my photos to the google photo drive folder so they can display on our family screen. 

Menu & Recipes
- As a family member, I want to be able to vote on next weeks meals. 
- As a family member, I want to be able to see our weekly menu so that I know what we are eating. 
- As a family member, I can vote on the meal so that the cook knows this needs to be made again. 
- As a the menu planner, I want to see random recipes to add to the family menu voting list so that my family can vote on them. 
- As a the menu planner, I want to get the recipes that my family has voted on so that I can actually make the meal!
- As a the menu planner, I can view past menu items and hearted items so that I can add them to next week's menu. 
 
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

Resources
- As a family member, I would like to have quick phone numbers on standby so that everyone has access (like granny's number). 
- As a family member, I would like a list of "often visited" links available so we can get a food order in quickly. 

Notifications
- As a family member, I would like to receive a notification if I have an important appointment or event that day so that I make it!
- As a family member, I would like to text myself the shopping list so that I know what I need to buy. 

Weather
- As a family member, I would like to see weather alerts so that I can dress appropriately.

Mobile Response
- As a family member, I would like to access a mobile friendly website so that I can access this on my phone. 

## Stretch Goals
- Possibly build on AWS 
- Possibly build in Kotlin to deploy on Google Play
