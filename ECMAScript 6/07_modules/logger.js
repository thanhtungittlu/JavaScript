import { 
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
} from "./const.js"


function logger(text,type = TYPE_WARN){
    console[type](text)
}
export default logger