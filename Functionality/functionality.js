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

let dropdown = document.getElementById("choose");
let condition = dropdown.value;

function DropTheme() {
    var I = document.getElementById("secI");
    var II = document.getElementById("secII");
    var III = document.getElementById("secIII");
    var IV = document.getElementById("secIV");
    var V = document.getElementById("secV");
    var VI = document.getElementById("secVI");
    var VII = document.getElementById("secVII");
    var VIII = document.getElementById("secVIII");
    var IX = document.getElementById("secIX");
    var X = document.getElementById("secX");
    var XI = document.getElementById("secXI");
    var XII = document.getElementById("secXII");
    var XIII = document.getElementById("secXIII");
    var XIV = document.getElementById("secXIV");
    var XV = document.getElementById("secXV");
    
    if(condition === "ElementI") {
        if(I) {
            I.classList.add("visible");
            I.classList.remove("hidden");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementII") {
        if(II) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("visible");
            II.classList.remove("hidden");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementIII") {
        if(III) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("visible");
            III.classList.remove("hidden");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementIV") {
        if(IV) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("visible");
            IV.classList.remove("hidden");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementV") {
        if(V) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("visible");
            V.classList.remove("hidden");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementVI") {
        if(VI) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("visible");
            VI.classList.remove("hidden");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementVII") {
        if(VII) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("visible");
            VII.classList.remove("hidden");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementVIII") {
        if(VIII) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("visible");
            VIII.classList.remove("hidden");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementIX") {
        if(IX) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("visible");
            IX.classList.remove("hidden");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementX") {
        if(X) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("visible");
            X.classList.remove("hidden");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementXI") {
        if(XI) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("visible");
            XI.classList.remove("hidden");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementXII") {
        if(XII) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("visible");
            XII.classList.remove("hidden");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementXIII") {
        if(XIII) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("visible");
            XIII.classList.remove("hidden");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementXIV") {
        if(XIV) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("visible");
            XIV.classList.remove("hidden");
            XV.classList.add("hidden");
            XV.classList.remove("visible");
        }
    }
    if(condition === "ElementXV") {
        if(XV) {
            I.classList.add("hidden");
            I.classList.remove("visible");
            II.classList.add("hidden");
            II.classList.remove("visible");
            III.classList.add("hidden");
            III.classList.remove("visible");
            IV.classList.add("hidden");
            IV.classList.remove("visible");
            V.classList.add("hidden");
            V.classList.remove("visible");
            VI.classList.add("hidden");
            VI.classList.remove("visible");
            VII.classList.add("hidden");
            VII.classList.remove("visible");
            VIII.classList.add("hidden");
            VIII.classList.remove("visible");
            IX.classList.add("hidden");
            IX.classList.remove("visible");
            X.classList.add("hidden");
            X.classList.remove("visible");
            XI.classList.add("hidden");
            XI.classList.remove("visible");
            XII.classList.add("hidden");
            XII.classList.remove("visible");
            XIII.classList.add("hidden");
            XIII.classList.remove("visible");
            XIV.classList.add("hidden");
            XIV.classList.remove("visible");
            XV.classList.add("visible");
            XV.classList.remove("hidden");
        }
    }
}