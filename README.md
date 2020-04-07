## Dark Phoenix Census

This project is a public utility for the Dark Phoenix alliance on Ogame. It gives instant visibility in to the locations of our users throughout all 6 galaxies, as well as their moons.

All code here will be publicly displayed on the Github Pages URL: [https://ogameshane.github.io/DarkPhoenix/](https://ogameshane.github.io/DarkPhoenix/)

#### Contributing

Please fork this repository and create pull requests targeting the master branch of this repository.

##### Architecture

This application is built using an inlined version of VueJS and utilises the VueJS template compiler. This is to keep the application as simple to modify and deploy as possible.

##### Code style

The application needs to process 48,000 elements and 196,000 data points live, as such every effort has been taken to be time efficient and performant. Sometimes this means high cyclomatic complexity via code-inlining, rather than using functions. Sometimes it means including less functionality, rather than more.

When making changes, please test how the application performs on mobile devices, older PCs, etc.

##### Deployments

When deploying, Github Actions will load the universe.xml and players.xml files from the OGame server 166 API, and cache them in the /api/ directory. The `gh-pages` branch will automatically be updated to include these new files.

The following trigger deployments:

* A push to the `master` branch
* An automated update every morning at 04:00:00 UTC