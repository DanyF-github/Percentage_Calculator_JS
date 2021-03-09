function perc1() {
  let firstValue = document.form1.a.value/100;
  let secondValue = firstValue*document.form1.b.value;
  document.form1.total1.value=secondValue;
}
function perc2() {
  let firstValue = document.form2.c.value;
  let secondValue = document.form2.d.value;
  let x = firstValue/secondValue;
  let percentage = x*100;
  document.form2.total2.value = percentage;
  }
  function perc3() {
    let from = document.form3.e.value;
    let to = document.form3.f.value;
    let difference = to-from;
    let x= (difference/from)
    let percentage= x*100;
    document.form3.total3.value = percentage; 
    }