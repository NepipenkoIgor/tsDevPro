
// phone
let phonePattern = /(\+?\d)?\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}/g;
let testPhones = '6641234567, 664 123 4567, +14155552671, 020 713 8750, (415) 555-2671, +1 (415) 555-2671, +1(415) 555-2671, (415)555-2671';
console.log(testPhones.match(phone));


//email
let emailPattern = /\w+@[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}/gi;
let testEmailes = 'a@gmail.com, @gmail.com, gmail@com, 589gfhy@gmail.com, 589tyt @gmail.com, 589tyty@hotmail.ru'; 
console.log(testEmailes.match(emailPattern));


//twitter
let twitterPattern = /\@\w{2,20}/gi;
let testTwits = '@anatol, @ anatol, @66anatol, @6';
console.log(testTwits.match(twitterPattern));


//URL
let urlPattern = /((http|https):\/{2})?(www\.)?\w+\.\w{2,3}$/mgi;
let testUrls = `https://developer.mozilla.org 
                http://developer.org
                developer.mozilla.org 
                developer.org
                www.developer.ua`;
console.log(testUrls.match(urlPattern));
