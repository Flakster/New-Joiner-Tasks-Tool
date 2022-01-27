const limitStr = 'Education and Training'

const labels = {
    "Nam" : 6,
    "Rol" : 6,
    "Sum" : 8,
    "Dom" : 18,
}

// Remove carriage return and repeated spaces 
const string_set = str => { 
    const starting = str.substring(0,3)
    const text = str.substring(labels[starting])
    return text.replace(/[\n\r]/g,' ').trim()
}
// Organize skills in an object
const object_set = str =>{
    let arr = str.split('\n\n').filter(e => e!=='').splice(4)
    arr.splice(1,0,"Databases")
    arr.splice(0,0,"Languages & Technologies")
    const arr2 = [[arr[0], arr[1]], [arr[2], arr[3]], [arr[4], arr[5]], [arr[6], arr[7]]] 
    const obj = Object.fromEntries(arr2)
    return obj
}


const string_cut1 = (originalStr, firstStr, lastStr) => {
    return originalStr.substring(originalStr.indexOf(firstStr), originalStr.indexOf(lastStr))
}

const string_cut2 = (originalStr, firstStr) => {
    return originalStr.substring(originalStr.indexOf(firstStr))
}

module.exports = {
    extract_info: (text) => {
        const text1 = text.substring(0,text.indexOf(limitStr))
        const extract = {
            "Name": string_set(string_cut1(text1,'Name', 'Role')),
            "Role": string_set(string_cut1(text1, 'Role', 'Summary')),
            "Summary": string_set(string_cut1(text1, 'Summary', 'Domain Experience')),
            "Domain Experience": string_set(string_cut1(text1, 'Domain Experience', 'Core Technical Skills')),
            "Core Technical Skills": object_set(string_cut2(text1, 'Core Technical Skills'))
        }
        return JSON.stringify(extract)
    }
}