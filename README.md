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
   components/
   # react components used by multiple scenes
   # see more : https://reactjs.org/docs/components-and-props.html
   
   config/
   # application configuration
   # for now, there is just route configuration
   # you can choose whether it is mandatory to be connected to access a route or not
   
   constants/
   # all kind of constants (including redux constants)
   
   routes/
   # define how routes are generated
   # for now, it gets the configuration for the config folder, then decide if each route is
   # accessible to the user or not
  
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
- [Material UI Documentation](https://material-ui.com/) - learn about Material UI, used for styling.
- [Notistack Documentation](https://github.com/iamhosseindhv/notistack) - learn about Notistack.


## 📝 Contributors

Some people have contributed to the project.

* 🧑 Clement Grandvaux
  - [GitLab] - [GitHub](https://github.com/GrandvauxClement)