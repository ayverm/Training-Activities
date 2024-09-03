class Account
{
    constructor(Acc_holder_name,Acc_no,balance)
    {
        this.Acc_holder_name=Acc_holder_name;
        this.Acc_no=Acc_no;
        this.balance=balance;
    }

    Deposit(amount)
    {
        this.balance = amount+this.balance;
        console.log(this.balance);
        
    }

    Withdraw(amount)
    {
        if(this.balance>=500)
        {
            this.balance = this.balance - amount;
            console.log(this.balance);
        }

        else
        {
            console.log("Not emough balance");
        }
    }

    CheckBalance()
    {
        console.log(this.balance);  
    }

    displayDetails()
    {
        console.log(`Account Holder Name :  ${this.Acc_holder_name}`);
        console.log(`Account No :  ${this.Acc_no}`);
        console.log(`Available Balance :  ${this.balance}`);
        
    }
}

class SavingAccount extends Account
{
    constructor(Acc_holder_name,Acc_no,balance,interest=0.02)
    {
        super(Acc_holder_name,Acc_no,balance);
        this.interest = interest;
    }

    Deposit(amount)
    {
        const interestAmount = amount * this.interest /100;
        super.Deposit(amount+interestAmount);
    }

    displayDetails()
    {
        super.displayDetails();
        console.log(`Interest Rate : ${this.interest}`);
        
    }
}

class CurrentAccount extends Account
{
    constructor(Acc_holder_name,Acc_no,balance,overDraftLimit= 500)
    {
        super(Acc_holder_name,Acc_no,balance);
        this.overDraftLimit= overDraftLimit;
    }

    Withdraw(amount)
    {
        if(this.balance >= this.balance+this.overDraftLimit)
        {
            super.Withdraw(amount);
        }
        else
        {
            console.log("No sufficient Balance");
        }
    }

    displayDetails()
    {
        super.displayDetails();
        console.log(`OverDraftLimit : ${this.overDraftLimit}`);
        
    }
}

class UserInterface{
    constructor()
    {
        this.acc=null;
    }
    createAccount()
    {
        this.acc = new SavingAccount('Ayush Verma','1234865',563363,0.04);
    }

    getBalance()
    {
        console.log("Balance : "+this.acc.getBalance());
    }

    getDetails()
    {
        this.acc.displayDetails();
    }

    Deposit(amount)
    {
        this.acc.Deposit(amount);
    }

    Withdraw(amount)
    {
        this.acc.Withdraw(amount);
    }
}

const ui = new UserInterface();
ui.createAccount();
ui.Deposit(3000);
ui.Withdraw(2000);
ui.getDetails();