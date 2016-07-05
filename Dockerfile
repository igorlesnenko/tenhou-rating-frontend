FROM node:6-wheezy

ADD / /var/www/frontend/

EXPOSE 5000

WORKDIR /var/www/frontend/

CMD ["npm", "run", prod"]