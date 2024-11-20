function sayiUret(ustlimit = 90)
{
    return Math.ceil(Math.random() * ustlimit);
}

for (var i = 1; i <= 6; i++){
    console.log(i+ ".KOLONUN SAYILARI: ");
    for (var j = 1; j <= 6; j++)
    {
        console.log(sayiUret());
    }
}