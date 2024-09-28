let languageCode = prompt('Enter a language code (es, de, en, fr):').toLowerCase()
let translation
let languages = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
}

if (languageCode === 'es') {
    translation = 'Hola mundo'
} else if (languageCode === 'de') {
    translation = 'Hallo Welt'
}
 else if (languageCode === 'fr') {
    translation = 'Bonjour le monde'
} else {
    languageCode = 'en'
    translation = 'Hello World'
}

console.log(`Hello World translated in ${languages[languageCode]} is: ${translation}`)


/* 
Updated version: 

let languageCode = prompt('Enter a language code (es, de, en, fr):').toLowerCase();

let translations = {
    'en': 'Hello World',
    'es': 'Hola mundo',
    'fr': 'Bonjour le monde',
    'de': 'Hallo Welt'
};

let languages = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German'
};

let translation = translations[languageCode] || translations['en'];
let language = languages[languageCode] || languages['en'];

console.log(`Hello World translated in ${language} is: ${translation}`);

*/