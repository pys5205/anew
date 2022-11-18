# base image
FROM iojs:onbuild 

# nginx install
COPY ./sig_test.js ./sig_test.js
COPY ./package.json ./package.json

# port
EXPOSE 3000

# exrc
ENTRYPOINT ["node", "sig_test"]
