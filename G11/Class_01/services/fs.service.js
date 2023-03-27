import fs from "fs/promises";

export class FileService {
    static async writeFile(path, data){
        await fs.writeFile(path, data)
    }

    static async readFile(path){
        const content = await fs.readFile(path, {encoding: "utf8"});

        return JSON.parse(content)
    }
}