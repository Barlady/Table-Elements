class TableFront {

      /**
     *  properties
     *  @param [array] _tableClass - css классы оформления
     *  @param [array] data  - выходные данные
     *  @param [array] attribute - управляем что выводим 
     *  @param [array] _element  - куда выводить таблицу
     */

     constructor () {
       
        this._tableClass = [];
        this._element = 'div';
        this.attribute = [];
     } 

    /**
    *  Method set tableClass
    */

        setTableClass(tableClass) {
            if (typeof tableClass === 'object') {
                this._tableClass = tableClass;
                return true;
            }
            return false;
        }
    
    /**
    *  Method set element
    */
    
        setElement(element) {
            if (document.querySelector(element)) {
                this._element = element;
                return true;
            }
            return false;
        }

        render(data2) {
            this.setElement(data.element);
            this.setTableClass(data.tableClass);
            this.attribute = data2.attribute;
            this.data = data2.data2;

            // show table
            const table = document.createElement('table');
            this._tableClass.forEach(cssClass => {
                table.classList.add(cssClass);
            });
            // draw table
            for (let i = 0; i < this.data.length; i++) {
                // console.log(this.data[i]);
                let dataArr = this.data[i]; // одна строка данных
                let tr = document.createElement('tr');
                for (let key in this.attribute) {
                    let td = document.createElement('td');
                    let value = dataArr[key];
                    console.log(value);
                    for( let key in value) {
                       if (key == '3') {
                          td.classList.add('td-blue');
                       }
                       if (key == '4') {
                          td.classList.add('td-green');
                        }
                          td.innerHTML = value[key];
                   
                    console.log(this.attribute[key]);
                  
                  
                   
                    }
                    
                    tr.append(td);
                 
                }
                table.append(tr);
            }
    
            document.querySelector(this._element).append(table);
        }
        
}