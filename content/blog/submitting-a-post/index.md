---
title: Submitting a blog post on DevsNG
date: "2019-11-05"
description: "Definitive guide on how to submit a blog post for publishing on DevsNG publishing platform"
featuredImage: "./featured-image.png"
published: true
author: emeruche-cole
type: post
tags: ["admin", "guide"]
---

Hello there!
<br />
In this article, I am going to cover a step-by-step guide on how to create and submit an article for it to be published on the Devs NG platform.

As you may have noticed by now, Devs Ng is a platform built with [Gatsby](https://gatsby.com) and hosted on Netlify. There is no authentication or user creation flow, and as such, most pages - article and profile pages - are static pages created by submitting relevant directories and files via a pull request to the Github repo. 
The reason for this kind of implementation is that we gave a thought to this and realised that this would be a great way to portray the strength, importance and relevance of the (new) trends in software development - React, Gatsby and most importantly, open-source. <br /> We believe this implementation will most likely be a good way to get Nigerian developers and tech writers into the world of open-source while sharing their ideas, thoughts and experiences, making them entirely *open-source*.

>This implementation is already in use by a few organisations' blogs including Gatsby and Coding Coach, amongst others. So it is nothing entirely new. 

Without further ado, let's jump right in.
Start by forking the project from the [repo](https://github.com/kingingcole/devsng) and cloning your own copy of the fork. This will be the copy you will be working on. Change into the project directory and fire up the server by running `gatsby develop`. This starts up the local server and listens to file changes to refresh instantly.

###Creating a profile
Please know that to create an article on the repo, you ought to have a profile on the platform. If you have a profile already, please note the unique user identifier you used (e.g `john-jones`). This is the same as the name of the **folder** that holds your profile details. If you have this, then head on to [writing an article](#Writing-an-article) <br/>If you do not have a profile yet, please head on to [this article](/post/submitting-a-post/) that explains how to do so after which you can continue with this one.

###Writing an article
Now to creating and submitting articles. 
1. Navigate into the `content/blog` directory and create a new folder there with the title being your article's title with the words seperated by hypens, e.g `content/blog/my-new-blog-post/`. 
2. Inside this new folder, create an `index.md` file and move your assets into it - images, gifs, etc, that will be used by the Markdown file. If you would like to use a featured image for your post, please also move the image into the folder and the title of this particular image should be `featured-image.jpg` or `featured-image.png` or any image extension for that matter.
3. When this is done, open up the `index.md` file and start to write your post. Begin by creating a frontmatter that should hold details about the new blog post. You can use the format below by copy-pasting: 
``` mdx
---
title: Hello World
date: "2019-08-27T22:12:03.284Z"
description: "Hello World"
featuredImage: "./featured-image.jpg"
altText: numerous books open on a board
published: true
author: emeruche-cole
type: post
tags: ["react", "gatsby"]
---
```  

**title**: Required. Refers to, well, the title of the post.<br />
**date**: Required. Refers to the date the article was written and sent in for review and approval via a pull request. <br />
**description**: Optional. Should contain a little info about the article and what it is about. This is majorly for SEO purposes. If not included, an excerpt will be taken and used from the first few words of your article.  <br />
**featuredImg**: Optional. If you would like your article to contain a thumbnail featured image on homepage and a large featured image on article page, include a relative link to the image here.<br />
**altText**: Optional. For accessibilty reasons. This will serve as an `alt text` for the selected featured image. <br />
**published**: Required. Set to `true` for testing purposes and to view your article on localhost. Please set to `false` before submitting a pull request. Once reviewed and approved, the Devs NG team will set it back to `true`.<br />
**author**: Required. Remember the unique user identifier you created when [creating your profile](#Creating-a-profile)? Use that here. Please try as much as possible to verify this information as you might end up using an identifier tht has not been created yet.<br />
**type**: Required. Please leave as `post`.<br />
**tags**: Optional. Add relevant tags for your post. Maximum of two tags. The first is the primary, while the second is a secondary tag. Tags more than 3 will be stripped down to just the first two.

4. With the frontmatter taken care of, proceed to writing your awesome article. Gatsby supports virtually all Markdown syntax and styles. If your post includes images, make sure you have already added them to the article folder and link them up.

>If you need help with Markdown syntax, or need some clarifications about it, you can [learn all about it here](https://markdown-guide.readthedocs.io/en/latest/basics.html).

5. If you are satisfied with your articles and would love to submit it for review and publishing, commit your changes to your own forked copy and you can go ahead and [submit a PR](https://github.com/kingingcole/devsng/pull/new/master). Our review process is quite simple and short. We try to check if meets community standard. To help quicken the process, please ensure your post is well formatted and includes code samples where needed. If after review we discover an issue that prevents us from publishing it, we will notify you via the Github PR conversation.

Thanks, and we can't wait to get your articles coming in.

<a href='https://github.com/kingingcole/devsng/compare' class='open-PR-btn'>Open PR</a>
