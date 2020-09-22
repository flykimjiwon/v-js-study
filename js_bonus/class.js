class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes
    }

    increase(run5times){
        this.counter++;
        console.log(this.counter)
        if(this.counter % 5 === 0){
            this.callback&&this.callback(this.counter)
            // if(this.callback){
            //     this.callback(this.counter)
            // }
        }
    }

    
}

const coolCounter = new Counter(printSome);

function printSome(num){
    console.log(`ye~ ${num}`)
}
function alertNum(num){
    alert(`alert! ${num}`)
}

coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()

// const printCounter = new Counter(printSome)
// const alertCounter = new Counter(alertNum)
