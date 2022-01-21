module.exports = {
    extract_info: (text) => {
        const text1 = text.substring(text.indexOf('Summary:'),text.indexOf('Domain Experience'))
        const extract = text1.substring(0,text1.indexOf('Role')).replace(/[\n\r]/g,' ').trim() + '\n' +
            text1.substring(text1.indexOf('Role'),text1.indexOf('Summary')).replace(/[\n\r]/g,' ').trim() + '\n' +
            text1.substring(text1.indexOf('Summary')).replace(/[\n\r]/g,' ').trim()
        return extract
    }
}