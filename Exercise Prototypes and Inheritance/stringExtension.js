(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this
        }
    }

    String.prototype.ensureEnd = function (s) {
        let sLen = s.length
        let thisSubstring = this.substr(this.length - sLen);
        let result = ''
        if(thisSubstring === s){
            result = this + ''
        }else{
            result = this + s
        }
        return result
    };

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        let copy = this.slice()
        let thisLen = copy.length
        let result = ''
        if(thisLen <= n){
            result = copy+''
        }else{
            let subString = copy.substring(0,n).trim()
            if(subString.indexOf(' ') >= 0){
                
                strArr = subString.split(' ')
                strArr.pop()
                strArr = strArr.join(' ') + '...'
                result = strArr
            }else{
                if(n>3){
                    let index = n-3
                    result = copy.substr(copy.length - index) + '...';
                }else{
                    result = copy.substr(copy.length - n)
                }
            }
        }
        return result
    };

    String.format = function (s, ...params) {
        result = '';
        let array = s.split(', ')
        let sentances = array.shift()
        let arr = params
        let sen = sentances.split(' ')
        for (let string of sen) {
            if (string.includes("{")){
                let len = arr.length
                if(len > 0){
                    word = arr.shift()
                    let index = sen.indexOf(string)
                    sen[index] =  word
                }
            }    
        }

        result = sen.join(' ')
        return result
    };


})()

let str = 'my string';
str = str.ensureStart('no');
console.log(str);
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
