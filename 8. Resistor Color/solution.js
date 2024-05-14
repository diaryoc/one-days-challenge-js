const colorCode = (color) => {
    let COLORS = color
    return COLORS.indexOf(color);
};

console.log(colorCode(["black","brown","red","orange","yellow","green","blue","violet","grey","white"]))