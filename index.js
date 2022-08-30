// letter
const letter = [];
letter["a"] = "..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
letter["b"] = "..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n";
letter["c"] = "..######..\n..#.......\n..#.......\n..#.......\n..######..\n\n";
letter["d"] = "..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n";
letter["e"] = "..######..\n..#.......\n..#####...\n..#.......\n..######..\n\n";
letter["f"] = "..######..\n..#.......\n..#####...\n..#.......\n..#.......\n\n";
letter["g"] = "..######..\n..#.......\n..#####...\n..#....#..\n..#####...\n\n";
letter["h"] = "..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n";
letter["i"] = "..######..\n....##....\n....##....\n....##....\n..######..\n\n";
letter["j"] = "..######..\n....##....\n....##....\n..#.##....\n..####....\n\n";
letter["k"] = "..#...#...\n..#..#....\n..##......\n..#..#....\n..#...#...\n\n";
letter["l"] = "..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n";
letter["m"] = "..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n";
letter["n"] = "..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n";
letter["o"] = "..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
letter["p"] = "..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n";
letter["q"] = "..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n";
letter["r"] = "..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n";
letter["s"] = "..######..\n..#.......\n..######..\n.......#..\n..######..\n\n";
letter["t"] = "..######..\n....##....\n....##....\n....##....\n....##....\n\n";
letter["u"] = "..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n";
letter["v"] = "..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n";
letter["w"] = "..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n";
letter["x"] = "..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n";
letter["y"] = "..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n";
letter["z"] = "..######..\n......#...\n.....#....\n....#.....\n..######..\n\n";
letter["spc"] = "..........\n..........\n..........\n..........\n\n";
letter["dot"] = "----..----\n\n";

function createName() {
  const name = prompt("please enter your name");
  for (let nameChar of name.toLowerCase()) {
    if (nameChar == "a") console.log(letter["a"]);
    else if (nameChar == "b") console.log(letter["b"]);
    else if (nameChar == "b") console.log(letter["b"]);
    else if (nameChar == "c") console.log(letter["c"]);
    else if (nameChar == "d") console.log(letter["d"]);
    else if (nameChar == "e") console.log(letter["e"]);
    else if (nameChar == "f") console.log(letter["f"]);
    else if (nameChar == "g") console.log(letter["g"]);
    else if (nameChar == "h") console.log(letter["h"]);
    else if (nameChar == "i") console.log(letter["i"]);
    else if (nameChar == "j") console.log(letter["j"]);
    else if (nameChar == "k") console.log(letter["k"]);
    else if (nameChar == "l") console.log(letter["l"]);
    else if (nameChar == "m") console.log(letter["m"]);
    else if (nameChar == "n") console.log(letter["n"]);
    else if (nameChar == "o") console.log(letter["o"]);
    else if (nameChar == "p") console.log(letter["p"]);
    else if (nameChar == "q") console.log(letter["q"]);
    else if (nameChar == "r") console.log(letter["r"]);
    else if (nameChar == "s") console.log(letter["s"]);
    else if (nameChar == "t") console.log(letter["t"]);
    else if (nameChar == "u") console.log(letter["u"]);
    else if (nameChar == "v") console.log(letter["v"]);
    else if (nameChar == "w") console.log(letter["w"]);
    else if (nameChar == "x") console.log(letter["x"]);
    else if (nameChar == "y") console.log(letter["y"]);
    else if (nameChar == "z") console.log(letter["z"]);
    else if (nameChar == " ") console.log(letter["spc"]);
    else if (nameChar == ".") console.log(letter["dot"]);
  }
}
createName();
