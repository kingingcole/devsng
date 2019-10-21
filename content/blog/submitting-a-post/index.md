---
title: Submitting a blog post on Devs NG
date: "2019-10-21T22:12:03.284Z"
description: "Guide on how to submit a blog post on Devs NG publishing platform"
published: true
author: emeruche-cole
type: post
tags: ["admin", "tutorial"]
---

Hello there!
<br />
In this article, I am going to cover a step-by-step guide on how to create and submit an article for it to be published on the Devs NG platform.

As you may have noticed by now, Devs Ng is a platform built with [Gatsby](https://gatsby.com) and hosted on Netlify. There is no authentication or user creation flow, and as such, most pages - article and profile pages - are static pages created by submitting relevant directories and files via a pull request to the Github repo. 
The reason for this kind of implementation is that we gave a thought to this and realised that this would be a great way to portray the strength, importance and relevance of the (new) trends in software development, React, Gatsby and most importantly, open-source. <br /> We believe this implementation will most likely be a good way to get Nigerian developers and tech writers into the world of open-source while sharing their ideas, thoughts and experiences, making them entirely *open-source*.

>This implementation is already in use by a few organisations' blogs including Gatsby and Coding Coach, amongst others. So it is nothing entirely new. 

Without further ado, let's jump right in.
Start by forking the project from the [repo](https://github.com/kingingcole/devsng) and cloning your own copy of the fork. This will be the copy you will be working on. Change into the project directory and fire up the server by running `gatsby develop`. This starts up the local server and listens to file changes to refresh instantly.

For purpose of this tutorial, we will use an imaginary friend, John Jones.
To start with, we will have to create a profile on the platform that should display information like name, posts we have written and social links. To get this done, navigate into `content/authors` folder in root directory and create a new folder with the folder title being your **unique** user identifier. For our imaginary friend, this could be `john-jones`. The path to your profile should then be something like `/content/authors/john-jones/`.  

>Please note that this "profile creation" is a one-time only activity. You are NOT to do this each time you need to submit a blog post.

Within this newly created folder, create an `index.md` file and an image file that will serve as your display picture. Open up the `index.md` file and create your profile in the frontmatter by simply copy-pasting the format below and changing to suit your case:

```
---
name: John Jones
type: profile
bio: A very good looking guy
avatar: "./avatar.jpg"
twitter: https://twitter.com/username
website: https://website.com
github: https://github.com/username
email: johnjones@gmail.com
---
```

Note that the name, type, bio, and avatar are required fields while the rest (social links) are optional. To view your profile page, navigate to https://localhost:8000/profile/{unique-identifier}.
If this is satisfactory, open up a pull request to the main repo with the commit title `profile: {unique-identifier}` and if merged, then *hooray!*, you have a profile page on Devs NG.

Now to creating and submitting articles. Navigate into the `content/blog` directory and create a new folder there with the title being your article's title with the words seperated by hypens, e.g `content/blog/my-new-blog-post/`. Insiude this new folder, create and `index.md` file and move in your assets into it - images, gifs, etc, that will be used by the Markdown file. If you would like to use a featured image for your post, please also move the image into the folder and the title of this particular image should be `featured-image.jpg` or `featured-image.png` or any image extension for that matter.
When this is done, open up the `index.md` file and start to write your post. Begin by creating a frontmatter that should hold details about the new blog post. You can use the format below by copy-pasting: 
```
---
title: Hello World
date: "2019-08-27T22:12:03.284Z"
description: "Hello World"
published: true
author: emeruche-cole
type: post
tags: ["react", "gatsby"]
---
```  

**Title**: Required. Refers to, well, the title of the post.<br />
**Date**: Required. Refers to the date the article was written and sent in for review and approval via a pull request. <br />
**Description**: Optional. Should contain a little info about the article and what it is about. This is majorly for SEO purposes. If not included, an excerpt will be taken and used from the first few words of your article.  <br />
**Published** field should contain a little info about the article and what it is <br />