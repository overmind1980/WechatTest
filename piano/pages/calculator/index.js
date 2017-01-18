var helloData = {
    operand1: '',
    operator: '',
    inputValue:''
}

Page({ 
  data: helloData, 
  Touch1: function() {
    this.setData({
      inputValue:this.data.inputValue+'1'
    })
  }, 
  Touch2: function() {
    this.setData({
      inputValue:this.data.inputValue+'2'
    })
  }, 
  Touch3: function() {
    this.setData({
      inputValue:this.data.inputValue+'3'
    })
  }, 
  Touch4: function() {
    this.setData({
      inputValue:this.data.inputValue+'4'
    })
  }, 
  Touch5: function() {
    this.setData({
      inputValue:this.data.inputValue+'5'
    })
  }, 
  Touch6: function() {
    this.setData({
      inputValue:this.data.inputValue+'6'
    })
  }, 
  Touch7: function() {
    this.setData({
      inputValue:this.data.inputValue+'7'
    })
  }, 
  Touch8: function() {
    this.setData({
      inputValue:this.data.inputValue+'8'
    })
  }, 
  Touch9: function() {
    this.setData({
      inputValue:this.data.inputValue+'9'
    })
  }, 
  Touch0: function() {
    this.setData({
      inputValue:this.data.inputValue+'0'
    })
  },
  TouchC:function(){  
    this.setData({
      inputValue:'',
      operator:'',
      operand1:''
    })
  },
  TouchPlus: function(){
    this.setData({
      operand1:this.data.inputValue,
      inputValue:'',
      operator:'+'
    })
    console.log('In Add function..')
  },
  TouchSubtract: function(){
    this.setData({
      operand1:this.data.inputValue,
      inputValue:'',
      operator:'-'
    })
  },
  TouchMultiple: function(){
    this.setData({
      operand1:this.data.inputValue,
      inputValue:'',
      operator:'*'
    })
  },
  TouchDivide: function(){
    this.setData({
      operand1:this.data.inputValue,
      inputValue:'',
      operator:'/'
    })
  },
  TouchEqual: function(){
    console.log('in Equal function')
    console.log('operator==='+this.data.operator)
    console.log('operand1==='+this.data.operand1)
    console.log('inputValue==='+this.data.inputValue)
    var op1 = parseInt(this.data.operand1)
    var op2 =  parseInt(this.data.inputValue)
    if(this.data.operator=='+'){
      this.setData({
        inputValue:op1+op2
      })
    }
    else if(this.data.operator=='-'){
      this.setData({
        inputValue:op1-op2
      })
    }

    else if(this.data.operator=='*'){
      this.setData({
        inputValue:op1*op2
      })
    }

    else if(this.data.operator=='/'){
      this.setData({
        inputValue:op1/op2
      })
    }
  }

})