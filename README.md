# Website Eng Games 2020

This is the website for the 2020 edition of the Quebec Engineering Games

## Develop

* `yarn install`
* `yarn start`
* Open [http://localhost:8000](http://localhost:8000) in a browser

## Deploy

* `yarn install`
* Delete the `/.cache` and `/public` folders. (Gatsby is probably bugged and it doesn't work otherwise)
* `yarn build`
* Connect to the server via ftp at `ftp.jeuxdegenie.qc.ca`
* Put the contents of the `public` directory in `public_html/jdg/2020` on the server.
