class ExtendedDate extends Date
{
    monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    inStr()
    {
        document.write(this.getDate()+" "+this.monthes[this.getMonth()]+" "+this.getFullYear()+"<br>");
    }
    isPast()
    {
        let obj = new Date();
        if (this.getDate()<obj.getDate())
        {
            alert("дата прошедшая");
            return false;
        }
        else
        {
            alert("дата будущая");
            return true;
        }
    }
    isLeap()
    {
        if ((this.getFullYear() % 4 == 0 && this.getFullYear() % 100 != 0) || this.getFullYear() % 400 == 0)
        {
            alert("Год высокосный");
            return true;
        }
        else
        {
            alert("Год не высокосный");
            return false;
        }
    }
    datePlus()
    {
        this.setDate(this.getDate()+1);
    }
}

let d = prompt("Введите дату", "2024-05-...");
let dd = new ExtendedDate(d);
dd.inStr();
let choice = confirm("Проверим дату?");
if (choice==true)
    dd.isPast();
choice = confirm("Проверим год на высокосность?");
if (choice==true)
    dd.isLeap();
choice = confirm("Увеличим дату на один день?");
if (choice==true)
    dd.datePlus();
dd.inStr();
