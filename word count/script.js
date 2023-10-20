
function count(){
    let word=document.getElementById("myid").value;
    let total=0;
    for(let i=0;i<word.length;i++){
        let a=word[i];
        if(a==" "){
            total++;
        }
    }
    // total+=1;
    document.getElementById("result").innerHTML = (total+1) + " words";
}


/*split() splits a string into an array of substrings, and returns the array:

How,are,you,doing,today?*/