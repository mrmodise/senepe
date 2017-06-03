--insert into user values (1, now(), 'modise@gmail.com', 'Modise User', 'Last Test', 'password','modise');
--insert into user values (2, now(), 'test@gmail.com', 'Test', 'Last', 'password','test');
--insert into user values (3, now(), 'kabo@gmail.com', 'Kabo', 'Last', 'password','kabo');
--insert into photo values (1, now(), 'Myself','4oS_2Pa6.jpeg',0,'Myself','Myself',2);
--insert into photo values (2, now(), 'test','cmncsoHs.jpeg',0,'test','test',2)

INSERT INTO users (ID, USERNAME, PASSWORD, FULLNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES
  (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin admin', 'admin@admin.com', 1,
   PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
INSERT INTO users (ID, USERNAME, PASSWORD, FULLNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES
  (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user user', 'enabled@user.com', 1,
   PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
INSERT INTO users (ID, USERNAME, PASSWORD, FULLNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES
  (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user user', 'disabled@user.com', 0,
   PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));

INSERT INTO AUTHORITY (ID, NAME) VALUES (1, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (2, 'ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 2);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (3, 1);

INSERT INTO PHOTO (PHOTO_ID, CREATED, DESCRIPTION, IMAGE_NAME, LIKES, PHOTO_NAME, TITLE, USER_ID)
VALUES (1, PARSEDATETIME('06-06-2017', 'dd-MM-yyyy'), 'This is a description test', 'contact-bg.jpg', 0, 'morebodi', 'morebodi pic', 1);

INSERT INTO PHOTO (PHOTO_ID, CREATED, DESCRIPTION, IMAGE_NAME, LIKES, PHOTO_NAME, TITLE, USER_ID)
VALUES (2, PARSEDATETIME('06-06-2017', 'dd-MM-yyyy'), 'This is a description test', 'blog-img-2.jpg', 0, 'MODISE', 'MODISE pic', 1);