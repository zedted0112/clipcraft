async function generatecaptionsFromTranscript(transcript){
// simulate breakingg transcript into 3 captions
return[
    { caption:"AI clip 2", 
        start:0, 
        end:5

    },
    {caption:"AI clip 2", 
        start:6, 
        end:11


    },
    {caption:"AI clip 3", 
        start:12, 
        end:18

    }
]




}

module.exports = {
    generatecaptionsFromTranscript
};