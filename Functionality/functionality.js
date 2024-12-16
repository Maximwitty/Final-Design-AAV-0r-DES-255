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

document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.getElementById("choose").style.display;
    let section1 = document.getElementById("secI").style.display;
    let section2 = document.getElementById("secII").style.display;
    let section3 = document.getElementById("secIII").style.display;
    let section4 = document.getElementById("secIV").style.display;
    let section5 = document.getElementById("secV").style.display;
    let section6 = document.getElementById("secVI").style.display;
    let section7 = document.getElementById("secVII").style.display;
    let section8 = document.getElementById("secVIII").style.display;
    let section9 = document.getElementById("secIX").style.display;
    let section10 = document.getElementById("secX").style.display;
    let section11 = document.getElementById("secXI").style.display;
    let section12 = document.getElementById("secXII").style.display;
    let section13 = document.getElementById("secXIII").style.display;
    let section14 = document.getElementById("secXIV").style.display;
    let section15 = document.getElementById("secXV").style.display;

dropdown.addEventListener("change", function() {
    let selectedValue = dropdown.value;

    if(selectedValue === "ElementI") {
        section1.style.display = "flex";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementII") {
        section1.style.display = "none";
        section2.style.display = "flex";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementIII") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "flex";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementIV") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "flex";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementV") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "flex";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementVI") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "flex";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementVII") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "flex";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementVIII") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "flex";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementIX") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "flex";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementX") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "flex";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementXI") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "flex";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementXII") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "flex";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementXIII") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "flex";
        section14.style.display = "none";
        section15.style.display = "none";
    } else if(selectedValue === "ElementXIV") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "flex";
        section15.style.display = "none";
    } else if(selectedValue === "ElementXV") {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";
        section10.style.display = "none";
        section11.style.display = "none";
        section12.style.display = "none";
        section13.style.display = "none";
        section14.style.display = "none";
        section15.style.display = "flex";
    }
});
});