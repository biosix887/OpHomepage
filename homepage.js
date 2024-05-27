function updateTime() {
    // vars timers
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // get html text and change
    document.getElementById('timer').textContent = timeString;
}

//triger update time each 1 sec
setInterval(updateTime, 1000);

function search() {

    //vars query (GET INPUT TEXT) searchEngine(GET SEARCH ENGINE VALUE) url (VAR TO SAVE URL) checkbox (New PAGE OPTION)
    const query = document.getElementById('search').value;
    const searchEngine = document.getElementById('searchEngine').value;
    let url;
    var checkbox = document.getElementById("newPage");


    //search builder
    if (searchEngine !== "type_beat") {
        url = `${searchEngine}${encodeURIComponent(query)}`;
    } else {
        url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " type beat")}`;
    }
    
    // Checkbox is checked open new page : CB Not checked on open same page
    if (checkbox.checked) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}
