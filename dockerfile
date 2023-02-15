##
## resolvebuilder-docs: This is the downstream resolvbuilder repo. It containerizes
## the documentation and serves it via nodejs.
##
## installation info: https://github.com/resolvebuilderorg/resolvebuilder-docs
##
FROM node:16-alpine

## copy raw content into container
ADD ./website /rslvbldr/docs
WORKDIR /rslvbldr/docs

## install nginx packages & build documentation (note nonzero exit code hack from npm install)
##  reference: https://stackoverflow.com/questions/68250804/how-can-i-ignore-dockerfile-non-zero-return-codes
RUN npm install package.json
RUN npm run build

EXPOSE 3000
CMD npm run serve