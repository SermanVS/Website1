/**
 * Created by Сергей on 01.04.2017.
 */
var words=[];
var g=0;
function Analyze(a) {
    var b='';
    var k=0;

    for (var i=0;i<a.length;i++){
        if ((a[i]!=' ')&&(a[i]!='.')){
            b+=a[i];
        }
        else {
            k+=1;
            words[k]=b;
            b='';
        }
    }
    for (i=1; i<k+1;i++){
        if ((words[i]=='год')|(words[i]=='года')||(words[i]=='лет')){
           Compare(words[i-1]);
           g=i;
        }
    }
    for (i=1; i<k+1;i++){
        b=b+words[i]+' ';
    }
    alert(b);
}
function Compare(c) {
    var p=parseInt(c,10);
    p=p%10;
    if (p==1){words[g]='год';}
    else if ((p>1)&&(p<5)){words[g]='года';}
    else if(p>4){words[g]='лет';}
}