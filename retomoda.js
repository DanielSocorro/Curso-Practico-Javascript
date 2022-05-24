function mediaArmonica(array){
    let den = 0
    array.forEach(element => {
        den += 1 / element
    });
    const media = (array.length / den)
    return(media)
}