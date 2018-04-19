var mongoose 	= require('mongoose'),
	Campground  = require('./models/campground');
	Comment   	= require('./models/comment')

var data = [
	{
		name: "Cloud's Rest", 
		image: "https://images.freeimages.com/images/large-previews/e4c/camping-tent-1058140.jpg",
		description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
	},
	{
		name: "Desert Mesa", 
		image: "https://images.freeimages.com/images/large-previews/a25/empty-campground-1442093.jpg",
		description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
	},
	{
		name: "Canyon Elvor", 
		image: "https://images.freeimages.com/images/large-previews/01c/cabin-in-the-snow-2-1212399.jpg",
		description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
	},
	{
		name: "Clody Mountain", 
		image: "https://images.freeimages.com/images/large-previews/34b/snow-1167779.jpg",
		description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
	}
]

function seedDB() {
	// Remove all campgrounds : 
	Campground.remove({}, function(err) {
		if(err) {
			console.log("Error While Removing : ", err);
		}
		console.log("Removed campgrounds!");

		// Add a few campgrounds
		data.forEach(function(seed) {
			Campground.create(seed, function(err, campground) {
				if(err) {
					console.log("Error While Creating Campground : ", err);
				} else {
					console.log("added a campground");
					// Add a few comments
					Comment.create(
						{
							text: "This place is great, but i wish there was internet",
							author: "Homer"
						}, function(err, comment) {
							if(err) {
								console.log("Error While Creating Comment : ", err);
							} else {
								console.log("added a comment");
								campground.comments.push(comment);
								campground.save();
							}
						})
				}
			})
		});
	});



	
}

module.exports = seedDB;