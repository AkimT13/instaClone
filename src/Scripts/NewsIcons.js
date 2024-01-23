
const iconsMap = {
    "cnn" : "/public/cnn.svg",
    "fox news" : "",
    "rueters" : "" ,
    "espn" : "",
    "abc news": "",
    "cnbc" : "",
    "cbs news" : "",



}



const getLogoPath = (company) =>{
    return iconsMap.company
}

const getRandomColor = () => {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}


