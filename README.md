# Website Eng Games 2020

This is the website for the 2020 edition of the Quebec Engineering Games

## Develop

* `yarn install`
* `yarn clean`
* `yarn develop`
* Open [http://localhost:8000](http://localhost:8000) in a browser

## Deploy

* `yarn install`
* `yarn clean`
* `yarn build`
    * Sometimes there are issues and `sudo yarn build` is needed. No idea why.
* `FTP_USERNAME="FTP username" FTP_PASSWORD="FTP password" yarn deploy`
