TravelAgency
---

Technologies used:
- Angular
- Typescript
- HTML
- CSS
- Firebase

![MainPage](readmeFiles/mainPage.png)

##### What is Travel Agency?
Travel Agency is website to book your dream holiday. 

On main page you can choose interesting you filters like location,
rating, price range which works simultaneously (Angular Custom Pipes)

![Filters](readmeFiles/filters.png)
![Using Filters](readmeFiles/filters.png)

But let's start from the beginning to use my website firstly you must sign up.

![Signing-up](readmeFiles/signingUp.png)

Then you can log in.
The app uses Angular Routing and AuthGuards so you can't access other components without logging in.


![Logging-in](readmeFiles/signingIn.png)

You can browse the tours on the main page but when something interest you, you can go to the detailed view.

![Holidays](readmeFiles/holidays.png)
![Detailed View](readmeFiles/detailedView.png)

If you book something, it immediately appears in the trolley.

![Trolley](readmeFiles/trolley.png)

Application differentiate 4 types of users:
- Reader
- VIP (can rate tours)
- Employee (like VIP + can add new tour)
- Admin (like Employee + have admin panel so he can update roles, change persistance mode)

Navigation panel differs according user role!
Admin views:

![Admin Panel](readmeFiles/adminPanel.png)
![Admin Nav](readmeFiles/adminNav.png)
![Admin Form](readmeFiles/AdminForm.png)



