// Đối tượng Validator
function Validator(options){


    // Hàm từ 1 element con lấy ra element cha của nó dù có trong nhiều thẻ div
    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){ // Kiểm tra xem có phải element cha không
                return element.parentElement  
            }
            element = element.parentElement
        }
    }


    var selectorRules = {}

    // hàm thưc hiện validate
    function validate(inputElement,rule){

        var errorMessage 

        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector)
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector) // .parentElement lấy thằng cha

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        
        // lặp qua từng rule và kiểm tra
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type){
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector+':checked')
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break // Nếu có lỗi thì dừng việc kiểm tra
        }

        if (errorMessage){
            errorElement.innerText = errorMessage
            getParent(inputElement,options.formGroupSelector).classList.add('invalid')
        }else {
             errorElement.innerText = ''
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage // trả về true or false
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    
    if (formElement){

        // Bỏ hành vi mặc định khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault()
            var isFormValid = true

            // Thực hiện lặp qua từng rule và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid){
                    isFormValid = false
                }
            })


            
            if (isFormValid){ // Khi đã nhập đúng hết form dữ liệu
                if (typeof options.onsubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]') // Đây là 1 node list
                    var convert = Array.from(enableInputs) // Convert sang kiểu array
                    var formValues = convert.reduce(function(values,input){
                        
                        switch(input.type){
                            case 'radio':   
                                values[input.name] = formElement.querySelector('input[name="'+ input.name+'"]:checked').value
                                break  
                            case 'checkbox':
                                if (!input.matches(':checked')) {

                                    values[input.name]=[]
                                    return values
                                }
                                
                                if(!Array.isArray(values[input.name])){
                                    values[input.name]=[]
                                }
                                
                                values[input.name].push(input.value)

                                break
                            case 'file': 
                                
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }
                        return values
                        
                    },{})
                    options.onsubmit(formValues)
                    
                }
            }

        }


        //Lặp qua mỗi rule và xử lý (blur, input,...)
        options.rules.forEach(function(rule){
            
            //Lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else{
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector) //trả về node list

            Array.from(inputElements).forEach(function(inputElement){
                            if (inputElement){

                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function (){
                    validate(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () { 
                    var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector) // .parentElement lấy thằng cha
                    errorElement.innerText = ''
                    getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
                }

            }
                
            })


        })
    }
    
}


// Định nghĩa các rules
// Nguyên tắc của các rules: 
// 1: Khi có lỗi thì trả ra mess lỗi
// 2: Khi hợp lệ thì không trả ra gì cả (undefined)
Validator.isRequired = function (selector,message){
    return {
        selector: selector,
        test: function(value){
            return value  ?  undefined : message ||  "Vui lòng nhập trường này"  // trim() loại bỏ các dấu khoảng trắng ở 2 đầu
        },
    }
}

Validator.isEmail = function(selector,message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  // Kiểm tra có phải email hay không
            return regex.test(value) ? undefined :  message ||  "Trường này phải là email"
        },
    }
}

Validator.minLength = function(selector,min,message){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message ||  `Vui lòng nhập tối thiểu ${min} kí tự `
        },
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác"
        },
    }
}