# Portfolio Yo - Client

---

## 🤗 Getting Started

### Get the project

First, you need to download the project in your computer and install all the dependencies:

```bash
git clone https://github.com/GrandvauxClement/YoPortoflio-FrontEnd.git frontEnd
cd frontEnd
npm install
```

### Add environment variables

You have to create a .env file at the root of the project (directly under the server folder) :

```dotenv
####### COMMUNICATION WITH THE SERVER

# the URL of the server
# we need it to communicate with the server

REACT_APP_API_URL=http://localhost:9000

```

### Run the client

Then, you can run the development client:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the running client.

## 🤔 Understanding the architecture

```
public/
   assets/
       img/
       # static images used in the website
       
       logo/
       # logo used for the website
       
   index.html
   # the HTML template in which the React app will be compiled
   
   robots.html
   # help search engines to find pages in the website
   # see more : https://developers.google.com/search/docs/advanced/robots/intro

src/
   actions/
   # define redux actions
   # plain objects that have a type field
   # see more : https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
   
   components/
   # react components used by multiple scenes
   # see more : https://reactjs.org/docs/components-and-props.html
   
   config/
   # application configuration
   # for now, there is just route configuration
   # you can choose whether it is mandatory to be connected to access a route or not
   
   constants/
   # all kind of constants (including redux constants)
   
   containers/
   # higher level react components which connect a component to the redux state
   # used by multiple scenes
   
   reducers/
   # define the redux state and how each redux action can influence it
   # acts as a model and a controller at the same time
   # see more : https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
   
   routes/
   # define how routes are generated
   # for now, it gets the configuration for the config folder, then decide if each route is
   # accessible to the user or not
   
   scenes/
   # a page <=> a scene
   
      # for every scene
         components/
         # react components used by this scene only
         # see more : https://reactjs.org/docs/components-and-props.html
         
         containers/
         # higher level react components which connect a component to the redux state
         # used by this scene only
         
         services/
         # functions which call the server and return the result
         # used by this scene only
         
         index.js
         # main file of the scene
         # connect everything together
   
   selectors/
   # define redux selectors (used to access to the redux store)
   # see more : https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8#:~:text=A%20selector%20is%20a%20function,encapsulate%20your%20global%20state%20tree.
   
   services/
   # functions which call the server and return the result
   # used by multiple scenes
   
   utils/
   # custom functions
   
   App.js
   # main component
   # generates routes
   
   general.css
   # main style
   
   index.js
   # entry point of the application
   
   serviceWorker.js
   # can be used to create a PWA application
   # see more : https://developers.google.com/web/fundamentals/primers/service-workers/
   
   theme.js
   # main theme
   # used by MaterialUI components and custom styles
   
package.json
# define all the dependencies + scripts that you can use (command: npm run <script-name>)

server.js
# can be used for deployment to optimize performances if necessary
```


## 📚 Learn More

To learn more about the technologies, take a look at the following resources:

- [React.js Documentation](https://reactjs.org/) - learn about React.js.
- [Redux.js Documentation](https://redux.js.org/) - learn about Express.js.
- [Material UI Documentation](https://material-ui.com/) - learn about Material UI, used for styling.
- [Notistack Documentation](https://github.com/iamhosseindhv/notistack) - learn about Notistack.


## 📝 Contributors

Some people have contributed to the project.

* 🧑 Clement Grandvaux
  - [GitLab] - [GitHub](https://github.com/GrandvauxClement)
* 🧑 Vincent Brozzoni
  - [GitLab]
