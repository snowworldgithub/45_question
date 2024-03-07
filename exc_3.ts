let personName: string = "sir muhammad bilal ";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));

function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');}