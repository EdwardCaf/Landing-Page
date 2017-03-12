//HEADER
// BIO OBJECT
var bio = {
    "name": "Edward",
    "role": "Front-end Developer",
    "welcomeMessage": "Hello Everyone! This is my resume!",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "631-793-8149",
        "email": "ed_caf@protonmail.com",
        "github": "EdwardCaf",
        "location": "Bellport"
    },
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery"
    ],
    display: function() {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var myname = "Edward Cafarella";
        var formattedName = HTMLheaderName.replace("%data%", myname);
        var role = "Web Developer";
        var formattedRole = HTMLheaderRole.replace("%data%", role);
        $("#header").append(formattedName);
        $("#header").append(formattedRole);
        $("#header").append(formattedWelcomeMsg);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkill);
        }
    }
};

// WORK OBJECT

var work = {
    "jobs": [{
            "employer": "Target",
            "title": "Backroom logistics team member",
            "location": "Medford NY",
            "dates": "August 2014 - May 2016",
            "description": "I would scan product labels to fill the store's shelves from the backroom and order more of a product if the store was sold out"
        },
        {
            "employer": "Brookhaven Hospital",
            "title": "Nutritional Aide",
            "location": "Brookhaven NY",
            "dates": "March 2016 - present",
            "description": "Set up and deliver food trays to patients. Working throughout the kitchen."
        }
    ],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var job = 0; job < work.jobs.length; job++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

// PROJECT OBJECT

var projects = {
    "projects": [{
        "title": "Pong",
        "dates": "2016",
        "description": "Game of pong created through the Udemy course 'Code your first arcade game.'",
        "url": [
            "projects/Pong/Game.html"
        ],
        "images": [
            "images/pic.png"
        ]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var project = 0; project < projects.projects.length; project++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry").append(formattedTitle);
            $(".project-entry").append(formattedDates);
            $(".project-entry").append(formattedDescription);
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry").append(formattedImage);
            }
        }

    }
};

// EDUCATION OBJECT

var education = {
    "schools": [{
        "name": "Stony Brook University",
        "location": "Stony Brook",
        "majors": [
            "Philosophy"
        ],
        "dates": "2012-2014",
        "degree": "Courses in Computer Science and Philosophy"
    }],
    "onlineCourses": [{
        "title": "Front-end Developer NanoDegree",
        "school": "Udacity",
        "dates": "December 2016 - present",
        "url": [
            "http://www.udacity.com"
        ]
    }],

    // SCHOOL

    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var school = 0; school < education.schools.length; school++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry").append(formattedName);
            $(".education-entry").append(formattedDates);
            $(".education-entry").append(formattedMajor);
            $(".education-entry").append(formattedDegree);
            $(".education-entry").append(formattedLocation);
        }

        // ONLINE COURSES
        for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title).replace("#", education.onlineCourses[onlineClass].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
            $(".education-entry").append(formattedTitle);
            $(".education-entry").append(formattedSchool);
            $(".education-entry").append(formattedOnlineDates);
        }
    }
};

// Internationalize Button
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

// Outputs all Objects
bio.display();
work.display();
education.display();
projects.display();

$(internationalizeButton).insertAfter("#name");
$("#mapDiv").append(googleMap);
