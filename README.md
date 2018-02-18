

P.O.P.O.S.
===================
> Building a Single Page Application in React that shows all of San Francisco's Privately Owned Public Open Spaces.
> I will be using the data from [DataSF](https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd).
>
>

Mockup
-------------
>  
**landing page**
>
![alt tag](images/App.png)
>
**all spaces**
>
![alt tag](images/AllSpaces.png)
>
**all spaces (*component breakdown*)**
>
![alt tag](images/AllSpacesBreakdown.png)
>
**individual space**
>
![alt tag](images/IndvSpace.png)
>

----------

User Stories
-------------
>
- User should be able to use the search-field to search by address/cross street and receive the nearest *Spaces* to the specified location.
- User should be able to navigate to the *All Spaces* page, where all *Spaces* will be displayed.
- User should be able to click on a single *Space* (from the *All Spaces* page) and the user will be redirected to an individual *Space's* show page that contains specific details about this *Space*.

>

----------

Technologies Used
-------------
>
 - [Reactjs](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [nodejs](https://nodejs.org/en/)
- [expressjs](https://expressjs.com/)
- [mongoDB](https://www.mongodb.com/)
- [Heroku](https://heroku.com/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/)
- [axios](https://github.com/axios/axios)
- [react-google-maps](https://github.com/tomchentw/react-google-maps)

----------

React Router DOM v4
-------------
>
**BrowserRouter**
>
> One of the high-level routers for client side React apps, that makes use of *HTML5 history API* to sync your UI with the current browser's url path (*i.e. window.location*).
>
> If you are using a dynamic server that can handle dynamic URLs then you need to use the **BrowserRouter** component.
>  
>  A good article that covers *BrowserRouter*: [React Router DOM v4 Tutorial](https://www.techiediaries.com/react-router-dom-v4/) by *Techiediaries*.
>  
> [official documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)
>
----------
>
**Switch**
>
> Renders the first ```<Route``` or ```<Redirect>``` that matches the location.
>  
> ```<Switch>``` is unique in that it renders a route *exclusively*. In contrast, every ```<Route>``` that matches the location renders *inclusively*.
>
> [official documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md)
>
----------
>
**Route**
>
> The *Route* component is perhaps the most important component in *React Router* to understand and learn the use well.
>  
> Its most basic responsibility is to render some UI when a location matches the route's ```path```.
>
> [official documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md)
>
----------
>
**Link**
> Provides declarative, accessible navigation around your application.
>  
>  **to:object**
>  The *to* property in the **Link** component can accept an object that can have the following properties:
>  - ```pathname```: A *string* representing the path to link to.
>   - ```search```: A *string* represenation of query parameters.
>    - ```hash```: A *hash* to put in the *URL*, e.g. ```#a-hash```.
>   - ```state```: *State* to persist to the ```location```.
>   ```
>   // example
>   <Link to={{
>     pathname: '/courses',
>     search: '?sort=name',
>     hash: '#the-hash',  
>     state: { fromDashboard: true }
>   }}/>
>   ```
> [official documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)
>
>
> Here is a stackoverflow article about [passing props with Link in React-Router](https://stackoverflow.com/questions/47287855/passing-props-with-link-in-react-router)
>
----------

CSS Flexbox
-------------
>  The Flexbox Layout Module, makes it easier to design flexible responsive layout structure without having to use floats or positioning.
>
> [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a good article that goes over flexbox's main concepts.
>   
> Here is an article that contains several example use-cases, [CSS Flexbox Cheatsheet](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
>

Blocks
-------------
>  
> The data from the [DataSF](https://data.sfgov.org) api doesn't have an available id, which makes dealing with the show page a little bit more complicated. The ``` name ``` property seems to be unique among all the data, but might contain duplicates so querying the data might not be reliable.
>
>See request response:
```
// https://data.sfgov.org/resource/3ub7-d4yy.json?name=100 1st St
[
    {
        "accessibil": "Indirect through lobby elevator?",
        "art": "Yes",
        "case_no": "1983.331",
        "descriptio": "The large Sun Terrace features extensive landscaping and seating. Several art sculptures are featured, along with an elevated view of the street below. There is a 'grand' staircase (snippet) up to the Sun Terrace. Ground level arcade in front of building",
        "food": "Y",
        "food_servi": "At ground level",
        "hours": "Ground level arcade space accessible at all times, Sun Terrace open during daylight hours.",
        "hours_type": "Open At All Times",
        "landscapin": "Trees and plants",
        "location": "Sun Terrace is on second floor above adjoining parking garage SE of main building. Ground level arcade is on Mission Street side.",
        "name": "100 1st St",
        "popos_addr": "100 1st St",
        "restrooms": "None observed",
        "seating": "Y",
        "seating_an": "Y",
        "seating_no": "30 seats at 10 tables plus numerous areas to sit along built-in benches and planters, grassy areas.",
        "source": "SPUR, DT Plan 2009, Motion",
        "the_geom": {
            "type": "Point",
            "coordinates": [
                -122.39797,
                37.7891
            ]
        },
        "type": "Sun Terrace, Indoor Park, Snippet",
        "year": "1985"
    }
]
```
>
>

----------


Helpful Links
-------------
>  
> [DataSF](https://data.sfgov.org) (api)
>
>

----------
