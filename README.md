# ktquez.com

> Personal blog build with Vue.js and Vuex

```bash

# Install dependencies
npm install


# Serve with hot reload at localhost:8080
npm run dev


# build for production with minification
npm run build

```

## Config
Access the config `` folder/index.js ``  
Modify the url build and that you use in the development

```javascript
build: {
  url: 'http://example.com',  // Domain to deploy
  ...
},
dev: {
  url: 'http://example.com',  // Just edit your .etc file and add the domain you want pointing to 127.0.0.1
  ...
  port: 80,     // Make accessible by the chosen domain
}
```

## Deploy
You can use the Surge to publish  
Access the CNAME file and enter the domain that you will use in surge.
To learn how to [create a test domain](https://surge.sh/help/getting-started-with-surge) if you do not have one, or if you have a domain, [how to configure the DNS zones](https://surge.sh/help/adding-a-custom-domain)

**For example**
```bash
# CNAME
my-domain-test.surge.sh
```

## More questions
If you want a faster communication, find me on [@ktquez](https://twitter.com/ktquez)

# Coming soon 
Soon we will have the Boilerplate easy to install and customizable for publish your blog with the power of Vue.js