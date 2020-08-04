const shell = require('shelljs');

const backupUrl = "https://github.com/sankshitpandoh/systemBackupFiles.git";
const userProfile = "sankshit";

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = dd + '-' +  mm + '-' + yyyy;
    return today;
}

function sendToRemote(){
    shell.cd(`/home/${userProfile}/backupRepo`);
    shell.exec(`git add --all && git commit -m "backup for date: ${folderName}" && git push -u origin master`);
    console.log(` All data backed up for ${folderName}`)
}

let folderName = getDate();

shell.cd(`/home/${userProfile}`);
shell.exec("pwd && ls");
console.log(folderName)
shell.exec(`zip -r ${folderName}.zip * -x "*backupRepo*" -x "*.*" -x "*snap*" -x node_modules/\*`);
shell.exec(`mv ${folderName}.zip backupRepo`);

sendToRemote();

