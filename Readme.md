## Minimal CommonJS style modular app example using Parcel as a bundler

### Content

```
├── Readme.md  
├── package-lock.json  
├── package.json  
└── src  
    ├── index.css  
    ├── index.html  
    ├── index.js  
    └── sample-module  
          └── index.js  
```

### Getteing started

- Simply run `npm install`/`npm i` or `yarn` command to install dependencies(only dependency in this project is parcel for development purposes)

### Commands

- `npm run dev` or `yarn dev` - starts development server. Development build is served and can be accessed via [http://localhost:1234](http://localhost:1234). 
Output can be seen in `/dist` directory.
- `npm run build` or `yarn build` - build production version of the app. This can be then deployed to production server. 
Output can be seen in `/build` directory.
