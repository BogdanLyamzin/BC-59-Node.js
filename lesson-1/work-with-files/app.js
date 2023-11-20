// import fs from "fs";
import fs from "fs/promises";
import detectEncoding from "detect-file-encoding-and-language";

const func = async() => {
    const filepath = "./files/file.txt";
    // const buffer = await fs.readFile(filepath);
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile(filepath, "utf-8");
    // console.log(text);
    // const {encoding} = await detectEncoding(filepath);
    // const text = await fs.readFile(filepath, encoding);
    // console.log(text);
    // await fs.appendFile(filepath, "\nPHP forever");
    // await fs.writeFile(filepath, "Mojo the best");
    // await fs.appendFile("./files/file2.txt", "\nPHP forever");
    // await fs.writeFile("./files/file3.txt", "Mojo the best");
    // await fs.unlink("./files/file3.txt");
}

func();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log("error", error);
//     console.log("data", data);
//     fs.writeFile("./files/file2.txt", ()=> {})
// })