Makima Reader

Project Description

This app aims to be a relatively lightweight manga/comic reading app. Users will be able to upload images to the site to be collected as chapters, which are all collected under individual titles. Users will then be able to scroll/click through the pages of each chapter to read the manga/comic. Although many similar sites exist currently, I will aim to make mine functional but visually simplistic and easy to load.


Models including field names and their datatypes


Users:

-username (string)
-email (string)
-password (string)


Series:

-Title (string)
-Author (string)
-Artist
-Updated (date)
-Chapters (int)
-CoverImage (see Chapters: Pages)


Chapters:

-Series (string)
-Uploaded (date)
-Uploader (string)
-Pages (int (ids for images? hyperlinks? local file locations? not sure yet))


A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

-GET/series/chapter/page# (deepest route)

-POST/ (make new series)

-POST/series (add chapter to series)

-PUT/series/chapter (edit chapter of a series)

-PUT/series (edit series info)

-DELETE/series/chapter

-DELETE/series/


Wireframes

![image](https://user-images.githubusercontent.com/79492367/146646281-e3e1caf3-acb4-4a79-999f-df80bf1fdd7a.png)


User Stories

User stories detailing app functionality


As a user, I want to be able to read manga/comics with an easy to use layout.

I want to be able to upload, edit, and delete chapters from individual titles.

I want to be able to upload, edit, and delete titles as well.


MVP Goals

Reader and its functions work

Users can upload series, and can only update and delete content that they uploaded.

Users can upload images without problems, and images are either hosted externally or internally

Basic title based search works


Stretch Goals

Mobile device functionality and compatibility

App is optimized to reduce loading times

Non-logged in users can access GET routes and only GET routes
