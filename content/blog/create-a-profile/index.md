---
title: How to create a profile on DevsNG
date: "2019-11-05"
description: "Definitive guide on how to create a profile on DevsNG platform"
published: true
author: emeruche-cole
type: post
tags: ["admin", "guide"]
---

Hey there!

This article is one where I show you how to create a profile on DevsNG. 
Without further ado, let's jump right in.
>Please note that this "profile creation" is a one-time only activity. You are NOT to do this each time you need to submit a blog post.

1. Start by forking the project from the [repo](https://github.com/kingingcole/devsng) and cloning your own copy of the fork. This will be the copy you will be working on. Change into the project directory and fire up the server by running `gatsby develop`. This starts up the local server and listens to file changes to refresh instantly.

For this tutorial, we will use an imaginary friend, **John Jones**.
We will have to create the profile on the platform that would display information like name, bio, posts we have written and social links. 

2. To get this done, navigate into `content/authors` folder in root directory and create a new folder with the folder title being your **unique** user identifier. For our imaginary friend, this could be `john-jones`. The path to your profile should then be something like `/content/authors/john-jones/`.  

3. Within this newly created folder, create an `index.md` file and an image file that will serve as your display picture. Open up the `index.md` file and create your profile in the frontmatter by simply copy-pasting the format below and changing to suit your case:

``` mdx
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

Note that the name, type, bio, and avatar are required fields while the rest (social links) are optional. 

4. To view your profile page, navigate to `https://localhost:8000/profile/{unique-identifier}`.

5. If this is satisfactory, open up a pull request to the main repo with the commit title `profile: YOUR_NAME` and when merged, then *hooray!*, you have a profile page on Devs NG.

Your new profile page shows just your name, bio, social links, and for now, an empty blog posts section. To add posts, please head over to [this guide](/post/submitting-a-post/).

Please note that you can change/edit any of the information provided at any time. All you have to do is make the changes and open a pull request with subject `edit-profile: YOUR_NAME` and it will be updated when merged. *Stressful*, we know, but at least it keeps your Github busy. Recruiters love that. <br/>
Take care and see you soon. 