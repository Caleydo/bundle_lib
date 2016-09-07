Caleydo Bundle Lib ![Caleydo Web Bundle](https://img.shields.io/badge/Caleydo%20Web-Bundle-FABC15.svg)
==================

This bundle defines which plugins should be bundled in the library version of Caleydo Web. 
References plugins along with their indirect dependencies in `package.json` are bundled together. 

Installation
------------

[Set up a virtual machine using Vagrant](http://www.caleydo.org/documentation/vagrant/) and run these commands inside the virtual machine:

```bash
./manage.sh clone Caleydo/bundle_lib
./manage.sh resolve
```

Building the Bundle
------------

Install [Browserify](http://browserify.org/) inside the virtual machine only once:

```bash
npm install -g browserify
```

Start the build process using the product id:

```bash
grunt build:lib
```

When the process has finished the bundle is located as compressed file in the _caleydo_web_container/\_dist_ directory.

***

<a href="https://caleydo.org"><img src="http://caleydo.org/assets/images/logos/caleydo.svg" align="left" width="200px" hspace="10" vspace="6"></a>
This repository is part of **[Caleydo Web](http://caleydo.org/)**, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the [documentation page](http://caleydo.org/documentation/).




