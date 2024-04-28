
        class TipApp {
            constructor() {
          this.bill = 0;
          this.tip = 0;
          this.person = 0;
          // DOM ELEMENTS
          this.$billEl = document.querySelector('#bill');
          this.$tipEl = document.querySelector('#tip');
          this.$peopleEl = document.querySelector('#people');
          this.$tipAmount = document.querySelector('.tip-unit');
          this.$totalPerson = document.querySelector('.total-unit');
          this.$resetEl = document.querySelector('.btn-reset');
          this.$billOutput = document.querySelector('.bill-output');
          this.$tipOutput = document.querySelector('.tip-output');
          this.$personOutput = document.querySelector('.person-output');
          
          //  ALL EVENTS FUNCTION
           this.addEventListeners();
          }
  
              addEventListeners() {
                document.body.addEventListener('input', (e)=> {
                  this.billDetails(e)
                  this.tipDetails(e)
                  this.personDetails(e)
                });
  
                document.querySelector('form').addEventListener('submit', (e)=> {
                   e.preventDefault();
                   var billInput = this.$billEl.value.length < 1;
                   var tipInput = this.$tipEl.value.length < 1;
                   var personInput = this.$peopleEl.value.length < 1;
                   if (billInput || tipInput || personInput) {
                      this.showError();
                   } else {
                      this.displayResult();
                   }
                   
                });
  
                this.$resetEl.addEventListener('click', (e)=>{
                    this.clearData(e)
                });
  
              }
  
          billDetails(e) {
              var isBillEl = e.target.closest('#bill');
              if (!isBillEl) return;
              if (this.$billEl.value <= 0){
                  setTimeout(()=> {
                      return this.$billOutput.textContent = "Enter positive number above 0";
                  }, 1000)
                  
              } else {
                  this.$billOutput.textContent = null;
                  this.bill = +this.$billEl.value
              return this.bill;
              }   
          }
  
          tipDetails(e) {
            var isTipEl = e.target.closest('#tip');
            if (!isTipEl) return;
            if (this.$tipEl.value <= 0){
                  setTimeout(()=> {
                      return this.$tipOutput.textContent = "Enter positive number above 0";
                  }, 1000)
              } else {
                  this.$tipOutput.textContent = null;
                  this.tip = +this.$tipEl.value
                  return this.tip;
              }
          }
  
          personDetails(e) {
              var isPersonEl = e.target.closest('#people');
              if (!isPersonEl) return;
              if (this.$peopleEl.value <= 0){
                  setTimeout(()=> {
                      return this.$personOutput.textContent = "Enter positive number above 0";
                  }, 1000)
              } else {
                  this.$personOutput.textContent = null;
                  this.person = +this.$peopleEl.value
                   return this.person;
              }  
          }
  
          showError() {
              this.$billOutput.textContent = "Enter your bill";
              this.$tipOutput.textContent = "Enter your tip";
              this.$personOutput.textContent = "Enter number of people";
          }
  
          displayResult() {
           this.$tipAmount.textContent = this.getTipAmount().toFixed(2);
           this.$totalPerson.textContent = this.getTotalPerPerson().toFixed(2);
           document.querySelectorAll('.out').forEach(v => v.textContent = "");
          }
  
          getTipAmount(){
            const tipPercent = ((this.tip) / 100);
            const totalTipAmount = (this.bill * tipPercent) / this.person;
           return totalTipAmount ;
          }
  
          getTotalBillAmount() {
            const totatipAmount = (this.bill * (this.tip) / 100);
            const totalBillAmount = (this.bill + totatipAmount);
            return totalBillAmount;
          }
  
          getTotalPerPerson() {
           const totalBillAmount = this.getTotalBillAmount();
           const totalPerson = (totalBillAmount / this.person);
           return totalPerson;
          }
  
          clearData(e) {
              var isRestEl = e.target.closest('.btn-reset');
              if (!isRestEl) return;
              this.$billEl.value = "";
              this.$tipEl.value = "";
              this.$peopleEl.value = "";
              this.$tipAmount.textContent = "0.00";
              this.$totalPerson.textContent = "0.00";
          }
  
          }
  
          new TipApp();