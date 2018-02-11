FROM httpd:2.4
COPY /dist /usr/local/apache2/htdocs
EXPOSE 8081
CMD ["httpd", "-D", "FOREGROUND"]
