
 const data = [
    {
    "supplierInvoiceNumber": "31109",
    "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
    "supplierName": "DURLICOUROS ",
    "supplierCode": 101430,
    "invoiceIdentifier": 102313,
    "lotNumber": 26,
    "lotIdentifier": 34327,
    "lotSequence": 1,
    "productionOrderId": 151538,
    "productionOrderNumber": 86741,
    "percentage": 100,
    "batchId": 376278,
    "batchNumber": "2022-2572"
    },
    {
    "supplierInvoiceNumber": "31109",
    "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
    "supplierName": "DURLICOUROS ",
    "supplierCode": 101430,
    "invoiceIdentifier": 102313,
    "lotNumber": 26,
    "lotIdentifier": 34327,
    "lotSequence": 1,
    "productionOrderId": 151537,
    "productionOrderNumber": 86740,
    "percentage": 100,
    "batchId": 376281,
    "batchNumber": "2022-2575"
    },
    {
    "supplierInvoiceNumber": "31109",
    "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
    "supplierName": "DURLICOUROS ",
    "supplierCode": 101430,
    "invoiceIdentifier": 102313,
    "lotNumber": 26,
    "lotIdentifier": 34327,
    "lotSequence": 1,
    "productionOrderId": 151539,
    "productionOrderNumber": 86742,
    "percentage": 100,
    "batchId": 376424,
    "batchNumber": "2022-2718"
    },
    {
    "supplierInvoiceNumber": "31109",
    "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
    "supplierName": "DURLICOUROS ",
    "supplierCode": 101430,
    "invoiceIdentifier": 102313,
    "lotNumber": 26,
    "lotIdentifier": 34327,
    "lotSequence": 1,
    "productionOrderId": 151536,
    "productionOrderNumber": 86739,
    "percentage": 88.83,
    "batchId": 378676,
    "batchNumber": "2022-4970"
    },
    {
    "supplierInvoiceNumber": "31109",
    "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
    "supplierName": "DURLICOUROS ",
    "supplierCode": 101430,
    "invoiceIdentifier": 102313,
    "lotNumber": 26,
    "lotIdentifier": 34327,
    "lotSequence": 2,
    "productionOrderId": 151536,
    "productionOrderNumber": 86739,
    "percentage": 11.17,
    "batchId": 378676,
    "batchNumber": "2022-4970"
    },
    {
        "supplierInvoiceNumber": "31109",
        "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
        "supplierName": "DURLICOUROS ",
        "supplierCode": 101430,
        "invoiceIdentifier": 102313,
        "lotNumber": 26,
        "lotIdentifier": 34327,
        "lotSequence": 1,
        "productionOrderId": 151536,
        "productionOrderNumber": 86743,
        "percentage": 60,
        "batchId": 378676,
        "batchNumber": "2022-4970"
    },
    {
            "supplierInvoiceNumber": "31109",
            "supplierInvoiceKey": "15220100105229000433550010000311091259065096",
            "supplierName": "DURLICOUROS ",
            "supplierCode": 101430,
            "invoiceIdentifier": 102313,
            "lotNumber": 26,
            "lotIdentifier": 34327,
            "lotSequence": 1,
            "productionOrderId": 151536,
            "productionOrderNumber": 86743,
            "percentage": 40,
            "batchId": 378676,
            "batchNumber": "2022-4970"
    }
    ]



let Alexandre = [0]
let p = [0]

 for(i=0; i<=data.length; i++){
    if(data[i].percentage >= 100){
        console.log(data[i].productionOrderNumber, data[i].percentage)
    }
    else{
        // console.log(data[i].productionOrderNumber, data[i].percentage, data[i-1].percentage)
        p = data[i].percentage
        // console.log(p)
            if(p<100){
            // for(p = data[i].percentage; p<=100 ; p=data[i]){
            console.log(data[i].productionOrderNumber, p)
            //p = 
            } 
        } 
    }



// console.log(Alexandre)

// const Alexandre = []
// let tamanho = detalhes.length

//  for(i=0; i< detalhes.length;i++){

//     if (detalhes[i].percentage>= 100){
//         tamanho = tamanho - 1
//         // console.log(detalhes[i].productionOrderNumber, detalhes[i].percentage)
//     }       
//     else{   
        
//         Alexandre.push(detalhes[i])
//         // for(let j=0; j<=Alexandre.length;j++)
//       }
      
// }


// // console.log(Alexandre.length)
// // console.log(Alexandre[1].productionOrderNumber)
// Alexandre.forEach(ale => {
//     console.log(ale.productionOrderNumber)
//     for(let i=0 ; i<Alexandre.length; i++){

//         console.log(Alexandre[i].percentage)
//     }
// });