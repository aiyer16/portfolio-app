> This website is live at https://aiyer-portfolio-app.herokuapp.com/

# Deployment

Visit https://create-react-app.dev/docs/deployment/ for up-to-date information on deploying apps created using create-react-app.

## Static Server
`npm run build` creates a build directory with a production build of your app. 

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

```bash
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:

```bash
serve -s build -l 4000
```

Run this command to get a full list of the options available:

```bash
serve -h
```

## Deploying to Heroku using create-react-app-buildpack
Visit https://github.com/mars/create-react-app-buildpack for up-to-date info. This requires heroku CLI to be installed on your machine.

### Create the Heroku app
```bash
heroku create aiyer-portfolio-app --buildpack mars/create-react-app
```

### Deploy
```bash
git push heroku master
```

### Visit the app public url in your browser
```bash
heroku open
```
