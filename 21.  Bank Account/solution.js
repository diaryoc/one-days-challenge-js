//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    constructor() {
        this.accountStatus = false;
    }

    open() {
        if(this.accountStatus == false){
            this.accountStatus = true;
            this.accountBalance = 0;
        }
        else{
            throw new ValueError('Account opened')
        }
    }

    close() {
        if(this.accountStatus == true){
            this.accountStatus = false;
            this.accountBalance = 0;
        }
        else{
            throw new ValueError('Account closed')
        }
    }

    deposit(value) {
        if(this.accountStatus){
            if(value > 0){
                this.accountBalance += value;
            }
            else{
                throw new ValueError('Not a valid deposit amount')
            }
        }
        else{
            throw new ValueError('Account not available')
        }
    }

    withdraw(value) {
        if(this.accountStatus){
            if(value > 0){
                if(this.accountBalance - value >= 0){
                    this.accountBalance -= value;
                }
                else{
                    throw new ValueError('No Balance')
                }
            }
            else{
                throw new ValueError('Not a valid withdrawal amount')
            }
        }
        else{
            throw new ValueError('Account not available')
        }
    }

    get balance() {
        if(this.accountStatus){
            return this.accountBalance;
        }
        else{
            throw new ValueError('Account not available')
        }
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}