# RESTFul Routes

* A Table of All 7 RESTful Routes for blog app!

name  		url						verb			desc.														mongoose method
============================================================================================================================================
INDEX		/blogs					GET				Display a list of all blogs.								Blog.find()
NEW			/blogs/new 				GET				Displays form to make a new blog.							N/A
CREATE		/blogs					POST			Add new blog to DB.											Blog.create()
SHOW        /blogs/:id       	 	GET				Show info about one blog which is given by id.				Blog.findById();
EDIT		/blogs/:id/edit   		GET				Show edit form for one blog.								Blog.findById();
UPDATE		/blogs/:id   			PUT             Update a particular blog, then redirect somewhere.			Blog.findByIdAndUpdate();
DESTROY		/blogs/:id   			DELETE          Delete a particular blog, then redirect somewhere.			Blog.findByIdAndRemove();