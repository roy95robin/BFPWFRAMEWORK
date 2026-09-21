
// Reading data from excel 

import xlsx from 'xlsx'

export class excelUtils {
   // which excel sheet need to be read--- file path
   // which sheet to be considered from the excel: name of the sheet
   
   static getExcelData(filepath:string, sheetname:string){
    try {
        // readfile mathod present inside the excel. 
        // readfile will read the data from the file and return the value in workbook formet. 
        // workbook formet is nothing but having sheet name and data 

        const wb= xlsx.readFile(filepath)
        const sheet = wb.Sheets[sheetname]
        // convert the excel to json
        const data = xlsx.utils.sheet_to_json(sheet)
        return data

    }catch(error){
        console.log(error);
    }
   }
}