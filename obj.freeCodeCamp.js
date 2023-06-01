const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

function updateRecords(records, id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks")) {
      records[id][prop].push(value)
    } else {
      records[id][prop] = []
      records[id][prop].push(value)
    }
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value
  } else if (prop === prop && value === "") {
    delete records[id][prop]
  } else {
    records[id]
  }
  console.log(records)
  return records;
}

updateRecords(recordCollection, 2548, "artist", "");






function lookUpProfile(name, prop) {
  for (let i = 0; i <= contacts.length; i++) {
    if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
      console.log(contacts[i][prop])
      contacts[i][prop];
    } else if (contacts[i].firstName != name) {
      return "No such contact";
    } else {
      return "No such property";
    }
  }
  return contacts[i][prop];
}
lookUpProfile("Akira", "likes");