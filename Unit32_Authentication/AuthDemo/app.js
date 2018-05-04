var express 				= require('express'),
	mongoose 				= require('mongoose'),
	passport				= require('passport'),
	bodyParser  			= require('body-parser'),
	localStrategy 			= require('passport-local'),
	passportLocalMongoose 	= require('passport-local-mongoose'),
	User					= require('./models/user'),
	app 					= express();


// --------------------------------------------------
// ----------------- CONFIGURATION ------------------
mongoose.connect('mongodb://192.168.20.73/auth_demo_app');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Session Based App : 
app.use(require('express-session')({
	secret: "This is a just secret sentence",
	resave: false,
	saveUninitialized: false
}));

// Passport Configration : 
app.use(passport.initialize());
app.use(passport.session());
// Both function come with "UserSchema.plugin(passportLocalMongose);"
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// --------------------------------------------------


// --------------------------------------------------
// -------------------- ROUTES ----------------------
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res) {
	res.render('secret');
});

// --- AUTH ROUTERS :
// Show Register From
app.get('/register', function(req, res) {
	res.render('register');
});

// Handling User SignUp :
app.post('/register', function(req,res) {

	User.register(new User({
		username: req.body.username
	}), req.body.password, function(err, user){
		if(err) {
			console.log(err);
			return res.render('register');	
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('secret');
		})
	})
});

// -- LOGIN ROUTES :
// render login form
app.get('/login', function(req, res) {
	res.render('login');
});
// Handling user login (with middleware):
app.post('/login', passport.authenticate('local', {
	successRedirect:"/secret",
	failureRedirect:"/login"
}) , function(req, res) {
});

// -- LOGOUT ROUTE
app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

// -- Check User is Logged In (MiddleWare) :
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}
// --------------------------------------------------


// --------------------------------------------------
// Listen Port 3000:
app.listen(3000, function() {
	console.log("Server Has Started!");
});
// --------------------------------------------------