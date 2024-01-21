function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

For Custom Projects : https://wa.me/923224083545

function checkLogin(username, password) {
  var url = 'Copy your Google Sheet URL';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}
For Custom Projects : https://wa.me/923224083545
function AddRecord(usernamee, passwordd, email, phone) {
  var url = 'Copy your Google Sheet URL';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
  
}
