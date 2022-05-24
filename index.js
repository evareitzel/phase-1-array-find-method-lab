// code your solution here

// element, index, array

superbowlWin = (record) => {
    const result = record.find( record => record.result === 'W' );
    return !!result ? result.year : undefined
}

// superbowlWin = (record) => {
//     const result = record.find
//     // ( record => record.result === 'W' );
//     (function(record){
//         record.result === 'W';
//     })
//     if ( result ){
//         return result.year;
//     } else {
//         return undefined;
//     }
// }

// (arg) => obj.result === 'W' => return obj.year; 
    // iterate thru record object
    // use .find() to return "W" result year

// Notes
// Arrow function x2
// Complex problems breakdown into simple solutions