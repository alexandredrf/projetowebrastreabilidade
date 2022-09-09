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


const cem = []
const naoCem = []

function separandoOArray(array){
    array.forEach(a => {

        if(a.percentage < 100){
            naoCem.push(a)
        }else{
            cem.push(a)
        }
    });

    
// console.log(naoCem)
// console.log(cem)
}

separandoOArray(data)

// console.log(naoCem[0].productionOrderNumber)
// console.log(naoCem[1].productionOrderNumber)


let controle

for( let i = 0 ; i<naoCem.length ;i++){
    if(naoCem[i].productionOrderNumber==naoCem[i+1].productionOrderNumber){
    console.log(naoCem[i].percentage,naoCem[i+1].percentage)

    controle = naoCem[i].percentage + naoCem[i+1].percentage
    console.log(controle)

    if(controle >= 100){
        console.log('PULA ESSE DADO E ZERA A VARIAVEL')
        controle = 0 
    }
    console.log(controle)
}
}