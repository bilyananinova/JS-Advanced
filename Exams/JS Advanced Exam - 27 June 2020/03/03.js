class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
        this.data = {}
    }

    newCustomer(ownerName, petName, kind, procedures) {

        if (this.capacity == this.currentWorkload) {
            throw new Error('Sorry, we are not able to accept more patients!')
        }

        if (this.data.hasOwnProperty(ownerName) == false) {
            this.currentWorkload++
            this.clients.push(ownerName)
            this.data[ownerName] = []
            this.data[ownerName].push({ petName, kind, procedures })
        } else {
            this.data[ownerName].forEach(o => {
                if (o.petName == petName && o.procedures.length > 0) {
                    throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${obj.procedures.join(", ")}.`)
                }
            });
            this.data[ownerName].push({ petName, kind, procedures })
            this.currentWorkload++

        }
        return `Welcome ${petName}!`

    }

    onLeaving(ownerName, petName) {
        let hasThisPet = false
        let hasThisProcedures = true

        if (this.clients.includes(ownerName) == false) {
            throw new Error('Sorry, there is no such client!')
        }

        this.data[ownerName].forEach(x => {
            if (x.petName == petName) {
                hasThisPet = true;
            }
        })

        this.data[ownerName].forEach(x => {
            if (x.petName == petName && x.procedures.length == 0) {
                hasThisProcedures = false;
            }
        })

        if (hasThisPet == false || hasThisProcedures == false) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        } else {
            this.data[ownerName].forEach(o => {
                if (o.petName == petName) {
                    this.totalProfit += o.procedures.length * 500
                    this.currentWorkload--;
                    o.procedures = []
                }
            })
            return `Goodbye ${petName}. Stay safe!`
        }

    }

    toString() {
        let output = [];
        let percentage = Math.floor((this.currentWorkload / this.capacity) * 100)
        output.push(`${this.clinicName} is ${percentage}% busy today!`)
        output.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)
        let sort = Object.entries(this.data).sort((a, b) => a[0].localeCompare(b[0]) || a[1].petName.localeCompare(b[1].petName))
        for (let owner of sort) {
            output.push(`${owner[0]} with:`)
            for (const obj of owner[1].sort((a, b) => a.petName.localeCompare(b.petName))) {
                output.push(`---${obj.petName} - a ${obj.kind.toLowerCase()} that needs: ${obj.procedures.join(", ")}`)
            }
        }
        return output.join('\n')
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());


// 'SoftCare is 20% busy today!\nTotal profit: 500.00$\nAnna Morgan\n---Max - a dog that needs: SK456, DFG45, KS456\nJim Jones\n---Tiny - a cat that needs: \n---Tom - a cat that needs: A154B, 2C32B, 12CDB' 
// 'SoftCare is 20% busy today!\nTotal profit: 500.00$\nAnna Morgan with:\n---Max - a dog that needs: SK456, DFG45, KS456\nJim Jones with:\n---Tiny - a cat that needs: \n---Tom - a cat that needs: A154B, 2C32B, 12CDB'