// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Family Affair", artist: "Mary J. Blige", genre: "R&B" },
    { title: "Dilemma", artist: "Nelly & Kelly Rowland", genre: "R&B" },
    { title: "No One", artist: "Alicia Keys", genre: "R&B" },
    { title: "It Was A Good Day", artist: "Ice Cube", genre: "Rap" },
    { title: "Not Like Us", artist: "Kendrick Lamar", genre: "Rap" },
    { title: "Houdini", artist: "Eminem", genre: "Rap" },
    { title: "This Is America", artist: "Childish Gambino", genre: "Rap" },
    { title: "Going Back To Cali", artist: "The Notorious B.I.G.", genre: "Rap" },
    { title: "Delilah (pull me out of this)", artist: "Fred again..", genre: "EDM" },
    { title: "Fine Day Anthem", artist: "Skrillex, Boyz Noise, Opus III", genre: "EDM" },
    { title: "Runaway (U & I)", artist: "Galantis", genre: "EDM" },
    { title: "Levels", artist: "Avicci", genre: "EDM" },
    { title: "Calling (Lose My Mind)", artist: "Sebastion Ingrosso, Alesso, Ryan Tedder", genre: "EDM" },

    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rap",
    "Groot": "EDM"
    // Add preferences for Drax, Rocket, and Groot
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Define guardianPlaylists as equal to map function array of objects
    const guardiansPlaylists = Object.entries(guardians).map(([guardian, genre]) => ({
        guardian, playlist: songs.filter(song => song.genre === genre)
    }));

    // Grab the playlists div for appending playlists later
    const playlistsDivEl = document.getElementById("playlists");

    guardiansPlaylists.forEach(array => {
        // Create the div to hold the playlist, and the heading element
        const guardianPlaylistDivEl = document.createElement("div");
        const guardianPlaylistHeadingEl = document.createElement("h2");

        // Add playlist class to div, set heading to be equal to respective guardians name + " Playlist"
        guardianPlaylistDivEl.classList.add("playlist");
        guardianPlaylistHeadingEl.textContent = `${array.guardian}'s Playlist`;

        // Append heading to playlist div
        guardianPlaylistDivEl.append(guardianPlaylistHeadingEl);

        array.playlist.forEach(song => {
            // Define the paragraph and anchor tags for each song
            const guardianPlaylistParagraphEl = document.createElement("p");
            const guardianPlaylistAnchorEl = document.createElement("a");

            // Add classes to anchor and paragraph
            guardianPlaylistAnchorEl.classList.add("song-title");
            guardianPlaylistParagraphEl.classList.add("song");

            // Set text of anchor and paragraph elements
            guardianPlaylistAnchorEl.textContent = `${song.title}`;
            guardianPlaylistParagraphEl.textContent = ` by ${song.artist}`;

            // Prepend anchor to paragraph element, append paragraph element to playlist div
            guardianPlaylistParagraphEl.prepend(guardianPlaylistAnchorEl);
            guardianPlaylistDivEl.append(guardianPlaylistParagraphEl);
        })

        // Append completed guardian playlist to the playlists div
        playlistsDivEl.append(guardianPlaylistDivEl);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


