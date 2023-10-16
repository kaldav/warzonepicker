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

function displayGroups(groups) {
    const groupsContainer = document.getElementById('groups-container');
    groupsContainer.innerHTML = '';

    groups.forEach((group, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        groupDiv.innerHTML = `<h2>Csapat ${index + 1}</h2><ul>${group.map(person => `<li>${person}</li>`).join('')}</ul>`;
        groupsContainer.appendChild(groupDiv);
    });
}

function addPeople(){
    const selectedPeople = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedPeople.push(checkbox.name!="" ? checkbox.name : document.getElementById(checkbox.getAttribute('data-id')).value);
        }
    });   

    const groups = splitIntoGroups(shuffleArray(selectedPeople));

    displayGroups(groups);
}