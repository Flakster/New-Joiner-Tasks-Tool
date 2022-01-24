const limitStr = 'Education and Training'

const string_set = str => { 
    return str.replace(/[\n\r]/g,' ').trim() + '\n'
}

const string_cut1 = (originalStr, lastString) => {
    return originalStr.substring(0, originalStr.indexOf(lastString))
}

const string_cut2 = (originalStr, firstStr, lastStr) => {
    return originalStr.substring(originalStr.indexOf(firstStr), originalStr.indexOf(lastStr))
}

const string_cut3 = (originalStr, firstStr) => {
    return originalStr.substring(originalStr.indexOf(firstStr))
}

module.exports = {
    extract_info: (text) => {
        const text1 = text.substring(0,text.indexOf(limitStr))
        const extract = string_set(string_cut1(text1,'Role')) +
        string_set(string_cut2(text1, 'Role', 'Summary')) +
        string_set(string_cut2(text1, 'Summary', 'Domain Experience')) +
        string_set(string_cut2(text1, 'Domain Experience', 'Core Technical Skills')) +
        string_set(string_cut3(text1, 'Core Technical Skills'))
        return extract
    }
}