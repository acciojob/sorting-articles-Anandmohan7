//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove leading 'A', 'An', or 'The' for sorting
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, "").trim();
}

// Sort the bands array ignoring 'A', 'An', and 'The'
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Display sorted list in the HTML
const bandList = document.getElementById("bands");
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");
