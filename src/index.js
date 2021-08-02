const secureProtocolString = 'https:'
const regexLocal = new RegExp('(?:localhost|127.0.0.1):?(?:\d+)?')
if(!regexLocal.test(location.host)){
    location.protocol = secureProtocolString;
}