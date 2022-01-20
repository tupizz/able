We want to create a blog from scratch using a MERN stack. This application has two sides: the public home view and the editor backend view (or admin view).

**Must have**

* The post editor should accept Markdown. You can use either your own solution or an existing package.
* Each post should have a category. The category list can be hardcoded in the application.
* The blog's home should list the posts ordered by creation time. In the post editor, you can change the creation time anytime.
* Each post listed in the blog's home should have a link to the post in a single view. The route for a post should be `/{category-name}/{post-title-in-this-format}`.
* The blog's admin view should list the posts ordered by creation time and should list: title, category and creation time. It also should have a link per post to edit the post in the post editor.

**Nice to have**

* Deleting posts from the admin view.

**Won't have**

* This blog engine doesn't need an authentication system.

The app will be connected to a MongoDB instance, which has the same connection information:

```
Host: mongodb:27017
```

**Additional notes**

* There is some boilerplate code in the application, but some components are missing. It's part of this exercise to add and connect those missing pieces.
* You'll probably prefer to solve this exercise on your local machine.
* We use MongoDB in this exercise. This exercise uses [mongoose](https://mongoosejs.com/) as ORM.