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
        phone: integer(),
        driverLic: text({isRequired: true}),
        additionalInfo: text(), 
    }
})