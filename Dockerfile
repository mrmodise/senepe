FROM httpd:2.4
COPY /dist /usr/local/apache2/htdocs/senepe
EXPOSE 8080
ENTRYPOINT ["httpd", "-D", "FOREGROUND"]
