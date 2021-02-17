import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select } from "@keystone-next/fields";


export const User = list({
    fields: {
        username: text({isRequired: true}),
        email: text({isRequired: true, isUnique: true}),
        password: password(),
        name: text({isRequired: true}),
        address: text({isRequired: true}),
        city: text({isRequired: true}),
        state: text({isRequired: true}),
        zipcode: integer(),
        country: text({isRequired: true}),
        phone: integer(),
        driverLic: text({isRequired: true}),
        payment: select({
            options: [
              { label: 'Credit Card', value: 'Credit Card' },
              { label: 'E-Check', value: 'E-Check' },
            ],
            defaultValue: 'Credit Card',
            ui: {
              displayMode: 'segmented-control',
            //   createView: { fieldMode: 'hidden' },
            },
          }),
        additionalInfo: text(), 
    }
})