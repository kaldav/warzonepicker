function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function splitIntoGroups(people) {
    if (people.length <= 4) {
        return [people];
    } else {
        const groupSize = Math.ceil(people.length / 2);
        const group1 = people.slice(0, groupSize);
        const group2 = people.slice(groupSize, groupSize * 2);

        if (group2.length < 2) {
            group2.push(group1.pop());
        }

        return [group1, group2];
    }
}

function addPeople(){
    $(".list-group-item > span").html("");
    const selectedPeople = [];
    const checkboxes = document.querySelectorAll('.active');
    checkboxes.forEach(checkbox => {
        selectedPeople.push(checkbox.id);
    });   

    const groups = splitIntoGroups(shuffleArray(selectedPeople));

    groups[0].forEach(id => {
        $("#"+id+" > span").html("<span class='badge badge-danger'>1. csapat</span>");
    });

    groups[1].forEach(id => {
        $("#"+id+" > span").html("<span class='badge badge-warning'>2. csapat</span>");
    });
}

$('.list-group-item').on('click', function(item) {
    if (!item.target.classList.contains('active')) {
        item.target.classList.add('active');
    }
    else {
        item.target.classList.remove('active');
    }

    const selectedPeople = document.querySelectorAll('.active').length;

    $("#progress").css("width", selectedPeople*13+"%");
    $("#progress").html(selectedPeople+" kiválasztott");
});

function randomString(){
    const strings = [
        "Menjé játszani", "Top 3, úgyhogy kussoljatok el!", "Itt vannak! Jó de hol?", 
        "Dávid a király!", "Az kamu!!", "Tanuljatok egy kicsit, ezt nézd!", "Hozok sört, szarok rá!",
        "Mit nyomjunk? Hát négyen vagyunk, legyen quad!", "Hozok egy ilyen Lidlös sört, az jó lesz!",
        "Már boroztam, de szarok rá!"
    ];

    //generate a random string based on date, it should be fixed on a day
    const date = new Date();
    const random = date.getDate() % strings.length;
    $("#string").html(strings[random]);
}