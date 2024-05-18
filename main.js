class Marker
{
    constructor(color, count)
    {
        this.color = color;
        this.count = count;
    }
    CountCons(str)
    {
        let len = 0;
        for (let i=0; i<str.length; i++)
            if (str[i]!=' ')
                len+=0.5;
        return len;
    }
    Print(str)
    {
        if (this.CountCons(str)<=this.count)
        {
            document.write('<p style="color:' + this.color + ';">' + str + '</p>');
        }
        else
        {
            let c = 0;
            while (this.count>0)
            {
                if (str[c]!=' ')
                    this.count-=0.5;
                c++;
            }
            let s = "";
            for (let i=0; i<c; i++)
                s+=str[i];
            document.write('<p style="color:' + this.color + ';">' + s + '</p>');
            alert("Маркер закончился")
        }
    }
}

class MarkerPlus extends Marker
{
    constructor(color, count)
    {
        super(color, count);
    }
    AddInk()
    {
        this.count = 100;
    }
}

let choice;
let color = prompt("введите цвет маркера", "red, green, blue...");
let object = new MarkerPlus(color, 100);

while (choice!=false)
{
    while (object.count>0)
    {
        let message = prompt("Введите текст");
        object.Print(message);
        object.count-=object.CountCons(message);
    }
    choice = confirm("Заправить маркер?");
    if (choice==true)
        object.AddInk();
}

alert("Благодарим за работу с маркером. Хорошего дня!");
