const applicationName : string = 'Target Force';

const consoleError = (message: string) :void => {
    console.log(
        `%c ${String(applicationName)} %c Error %c ${String(message)}`, 
        'font-weight:bold;background:#2B3467;border: 1px solid #2B3467;padding:1px 1.5px 2px 1px; border-radius:5px 0 0 5px; color:white;' , 
        'background:#EB5353;border: 1px solid #EB5353;padding:1px 1.5px 2px 1px; color:white;',
        'background:white;border: 1px solid #EB5353;padding:1px 3px 2px 1px; border-radius:0 5px 5px 0;'
    );
}
const consoleInfo = (message: string) => {
    console.log(
        `%c ${String(applicationName)} %c Info %c ${String(message)}`, 
        'font-weight:bold;background:#2B3467;border: 1px solid #2B3467;padding:1px 1.5px 2px 1px; border-radius:5px 0 0 5px; color:white;' , 
        'background:#187498;border: 1px solid #187498;padding:1px 1.5px 2px 1px; color:white;',
        'background:white;border: 1px solid #187498;padding:1px 3px 2px 1px; border-radius:0 5px 5px 0;'
    );
}
const consoleWarning = (message: string) => {
    console.log(
        `%c ${String(applicationName)} %c Warning %c ${String(message)}`, 
        'font-weight:bold;background:#2B3467;border: 1px solid #2B3467;padding:1px 1.5px 2px 1px; border-radius:5px 0 0 5px; color:white;' , 
        'background:#F9D923;border: 1px solid #F9D923;padding:1px 1.5px 2px 1px; color:white;',
        'background:white;border: 1px solid #F9D923;padding:1px 3px 2px 1px; border-radius:0 5px 5px 0;'
    );
}
const consoleSuccess = (message: string) => {
    console.log(
        `%c ${String(applicationName)} %c Success %c ${String(message)}`, 
        'font-weight:bold;background:#2B3467;border: 1px solid #2B3467;padding:1px 1.5px 2px 1px; border-radius:5px 0 0 5px; color:white;' , 
        'background:#36AE7C;border: 1px solid #36AE7C;padding:1px 1.5px 2px 1px; color:white;',
        'background:white;border: 1px solid #36AE7C;padding:1px 3px 2px 1px; border-radius:0 5px 5px 0;'
    );
}
export {consoleError, consoleInfo, consoleWarning, consoleSuccess};