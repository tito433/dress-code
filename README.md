####  Deploy to firebase with Bitbucket Pipes

This repo contains a basic example for deploying applications to Firebase using [firebase-deploy](https://bitbucket.org/atlassian/firebase-deploy/src/master/) pipe.
It this example we test, build and deploy a simple ReactJS app created with [create-react-app](https://github.com/facebook/create-react-app) to Firebase.

#### Hot wo use thie example

##### Forking the repo
Create a fork of this repo, see [Forking a Repository](https://confluence.atlassian.com/bitbucket/forking-a-repository-221449527.html).

##### Enabling Pipelines in your repo 

To enable Piplines go to *Project*  > *Settings* > *Pipelines* and toggle the **Enable Pipelines** button. This can also be done from the **Pipelines** tab in your repository sidebar when you enable Pipelines for the first time. See also [Piplines Getting started](https://confluence.atlassian.com/bitbucket/get-started-with-bitbucket-pipelines-792298921.html) for more instructions.

##### Configuring pipe variables

To use this example you'll need to configure `FIREBASE_TOKEN` and `FIREBASE_PROJECT` pipelines variables in your repository. 
To get the firebase token run the below command and follow the instructions:

```
firebase login:ci
```

See **User-defined variables** section in [Variables in pipelines](https://confluence.atlassian.com/bitbucket/variables-in-pipelines-794502608.html) for how to configure Pipelines variables. 



#### Verifying the results of the pipe run

After you've enabled Pipelines and configured all variables you can navigate to the Pipelines section of your fork and explore the current status of the builds. If the build is :successful: you should be able to navigate to `https://<your-project-name>.firebaseapp.com/` URL where your simple rating service should be up and running.