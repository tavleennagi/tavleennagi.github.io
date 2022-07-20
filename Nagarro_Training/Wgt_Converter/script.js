const calcBtn = document.querySelector('#btn')
        const input = document.querySelector('#input')
        const output = document.querySelector('#output')
        calcBtn.addEventListener('click',()=>{
            let kgw = input.value/1000.0;
            output.innerText = kgw+" kg"
        })