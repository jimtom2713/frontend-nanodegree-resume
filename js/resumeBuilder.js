var bio = {
	"name" : "Jimmy Williamson",
	"role" : "Data Scientist",
	"contacts" : {
		"mobile" : "630-201-1004",
		"email" : "jwilliamson528@gmail.com",
		"github" : "jimtom2713",
		"twitter" : "@jigglypuff",
		"location" : "Virginia"
	},
	"bioPic" : "http://i2.cdn.turner.com/cnnnext/dam/assets/150203093408-01-left-shark-0203-large-169.jpg",
	"welcomeMessage" : "What if Left Shark was Right after all?",
	"skills" : ["Python", "Graphical Databases", "NoSQL Databases", "Applied Mathematics"]
};
var work = {
	"jobs": [
		{
		"position" : "Data Scientist",
		"employer" : "Diabolic Creativity",
		"years" : 4,
		"city" : "Ashburn, VA, US",
		"description":"being super duper awesome"
		},
		{
		"position":"Math/Science Tutor",
		"employer":"C2 Education",
		"years":3,
		"city":"Naperville, IL, US",
		"description":"teaching the wee ones"
		}]
};
var education = {
	"schools" : [
		{
		"name": "Lawrence University",
		"city": "Appleton, WI, US",
		'degree':'BA',
		"majors":["Pure Mathematics"],
		"graduation":2007
		},
		{
		"name":"IIT",
		"city":'Chicago, IL, US',
		'degree':'MS',
		"majors":['Applied Mathematics'],
		'graduration':2011
		}]
};
var projects = {
	"project" : [
	{
		"name":"Sample Project",
		"description" :"sample project description",
		"date":"sample project date",
		"image":"https://mangahelpers.com/forum/signaturepics/sigpic51228_4.gif"
	},{
		"name":"Sample Project",
		"description" :"sample project description",
		"date":"sample project date",
		"image":"https://mangahelpers.com/forum/signaturepics/sigpic51228_4.gif"
	},{
		"name":"Sample Project",
		"description" :"sample project description",
		"date":"sample project date",
		"image":"https://mangahelpers.com/forum/signaturepics/sigpic51228_4.gif"
	},{
		"name":"Sample Project",
		"description" :"sample project description",
		"date":"sample project date",
		"image":"https://mangahelpers.com/forum/signaturepics/sigpic51228_4.gif"
	},{
		"name":"Sample Project",
		"description" :"sample project description",
		"date":"sample project date",
		"image":"https://mangahelpers.com/forum/signaturepics/sigpic51228_4.gif"
	}]
};
projects.display = function() {
	//display code goes here
	for (var i=0;i<projects.project.length;i++){
		$('#projects').append(HTMLprojectStart);
		// $('#projects').append(HTMLprojectImage.replace('%data%',projects.project[i].image));
		$('.project-entry:last').append(HTMLprojectTitle.replace('%data%',projects.project[i].name));
		$('.project-entry:last').append(HTMLprojectDates.replace('%data%',projects.project[i].date));
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%',projects.project[i].description));
		$('.project-entry:last').append(HTMLprojectImage.replace('%data%',projects.project[i].image));
	}
}

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace('%data%',bio.bioPic);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedLocation);
$('#header').append(formattedBioPic);

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	for (skill in bio.skills){
		$('#skills').append(HTMLskills.replace('%data%',bio.skills[skill]));
	};
}
function displayWork() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		// $('#workExperience').append(HTMLworkEmployer.replace('%data%',work.jobs[job].employer));
		// $('#workExperience').append(HTMLworkTitle.replace('%data%',work.jobs[job].position));
		// $('#workExperience').append(class work-entry:last);
		var formattedEmployerName = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
		var formattedPosition = HTMLworkTitle.replace('%data%',work.jobs[job].position);
		var formattedJobLocation = HTMLworkLocation.replace('%data%',work.jobs[job].city);
		var formattedDatesWorked = HTMLworkDates.replace('%data%',work.jobs[job].years);
		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployerName + formattedPosition);
		$('.work-entry:last').append(formattedJobLocation);
		$('.work-entry:last').append(formattedDatesWorked);
		$('.work-entry:last').append(formattedDescription);
	};
}


displayWork();
projects.display();
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

// function inName(name) {
// 	newName = name.split(' ');
// 	newName[1] = newName[1].toUpperCase();
// 	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
// 	newName = newName.join(' ');
// 	return newName;
// }