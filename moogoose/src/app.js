
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/channel", { useNewUrlParser: true }).then(() => console.log("suceessful....")).catch((err) => console.log(err));

//schema is structrue of the document

const playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

const Playlist = new mongoose.model("Playlist", playlist);

const createDocument=async()=>{
    try{
        const reactPlaylist= new Playlist({
            name:"yash varshney",
            ctype:" end",
            author:"technical",
            active: true
        })
        const jsPlaylist= new Playlist({
            name:" varshney",
            ctype:" frontend",
            author:"technical",
            active: true
        })
        const anPlaylist= new Playlist({
            name:"yash",
            ctype:" both",
            author:"technical",
            active: true
        })
        const uPlaylist= new Playlist({
            name:"akshat varshney",
            ctype:" hend",
            author:"technical",
            active: true
        })

        const result=await Playlist.insertMany([reactPlaylist,jsPlaylist,anPlaylist,uPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();


// const reactPlaylist = new Playlist({
//     name: "yash varshney",
//     ctype: "front end",
//     author: "technical",
//     active: true
// });

// reactPlaylist.save();