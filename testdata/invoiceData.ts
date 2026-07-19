export const invoiceData = {

    learningInstanceName: 'InvoiceLearningInstance',

    formFields: [

        {
            fieldName: 'Invoice_number',
            fieldLabel: 'Invoice Number',
            dataType: 'Text'
        },

        {
            fieldName: 'Invoice_date',
            fieldLabel: 'Invoice Date',
            dataType: 'Date'
        }

    ],

    tableFields: [

        {
            fieldName: 'Unit_price',
            fieldLabel: 'Unit price',
            dataType: 'Number'
        },

        {
            fieldName: 'Quantity',
            fieldLabel: 'Quantity',
            dataType: 'Number'
        }

    ],

    rule: {

        condition: 'Starts with',

        value: '100',

        actionType: 'show error',

        actionValue: 'Invalid error',

        secondAction: 'set value',

        secondValue: 'Verified'

    }

};