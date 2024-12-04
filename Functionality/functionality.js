// For this reason, I had a lot of JQuery code, which was quite unnecessary until I found AOS.

AOS.init({
    duration: 1000,
});

// Let's get the basic functionality here. We could also add in cosmetics to the website.

// Put this here.
let searchdata;

function preload() {
    searchdata = loadJSON("searchinfo.json");
}

function searchQuery() {
    let InputQuery = document.getElementById("SmallInput").value;
    let startxstop = document.getElementById("SearchTransfer");
    if(InputQuery === "") {
        // Make sure that it does not transfer to another link if the input value is blank.
        startxstop.href = "";
    } else {
        for(let i = 0; i < searchdata.length - 1; i++) {
            if(InputQuery === searchdata.Search[i].Query) {
                
            }
        }
        startxstop.href = "searchresults.html";
    }
}

function lolxd() {

}

// Put this here, it's important since you need this to appear upon loading into this page.

$(document).ready(function() {
    $('.fadeOnLoad').each(function() {
        $(this).animate({'opacity':'1'},1000);
    })
});

// This part for the designer's workshop page requires another fade on load part.

$(document).ready(function() {
    $('.fadeOnLoadII').each(function() {
        $(this).animate({'opacity':'1'},1000);
    });
});

// As for the section that can filter out, we need to have a different section come in for when they choose a certain subject.

const ThemeNodes = [];

function themeFilter() {
    for(let i = 0; i < 100; i++) {
        let collection = document.getElementById("choose");
        
    }
}