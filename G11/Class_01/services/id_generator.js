import {v4 as uuid} from "uuid";

export class IdFactory {
    generate(){
        return uuid()
    }
}