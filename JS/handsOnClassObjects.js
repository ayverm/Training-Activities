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
}

const emp1 = new Account("John",5012054390,5000);
emp1.Deposit(5000);
emp1.Withdraw(500);
emp1.CheckBalance();