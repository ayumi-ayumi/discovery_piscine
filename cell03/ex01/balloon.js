const body = document.getElementsByTagName("body")[0];
const balloon = document.querySelector(".balloon");
// if (!balloon) {
//     console.error("No element with class 'balloon' found.");
//     return;
// }

let colors = ["green", "blue", "red"];
let i = 0;
let balloon_height = parseInt(getComputedStyle(balloon).height, 10) || 0;
let balloon_width = parseInt(getComputedStyle(balloon).width, 10) || 0;


balloon.addEventListener('click', () => {
    if (i == colors.length)
        i = 0;
    if (balloon_height >= 420 || balloon_width >= 420) {
        balloon_height = 200;
        balloon_width = 200;
    }
    balloon.style.backgroundColor = colors[i];
    balloon_height += 10;
    balloon_width += 10;
    balloon.style.height = balloon_height + "px";
    balloon.style.width = balloon_width + "px";
    i++;
})

balloon.addEventListener('mouseover', () => {
    if (balloon_height > 200 || balloon_width > 200) {
        balloon_height -= 5;
        balloon_width -= 5;
        console.log(colors[i + 1]);
        balloon.style.height = balloon_height + "px";
        balloon.style.width = balloon_width + "px";
        balloon.style.backgroundColor = colors[i - 1];
    }
    if (i == colors.length)
        i = 0;
})

balloon.addEventListener('mouseout', () => {
    if (i == colors.length)
        i = 0;
    if (balloon_height > 200 || balloon_width > 200) {
        balloon_height += 5;
        balloon_width += 5;
        balloon.style.height = balloon_height + "px";
        balloon.style.width = balloon_width + "px";
        balloon.style.backgroundColor = colors[i + 1];
    }
    console.log(colors[i + 1]);
})