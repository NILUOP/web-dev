function get_table() 
{
    let n = document.getElementById("n_for_table").value;

    document.getElementById("m_table").innerHTML = `<li></li>`;

    for (let i = 1; i < 11; i++)
    {
        document.getElementById("m_table").innerHTML += `<li>${n} * ${i} = ${n * i}</li>`;
    }
}

function select_calc()
{
    let n = document.getElementById("calc").value;
    console.log(n)
    let compound = document.getElementById("compound_calc");
    let simple = document.getElementById("simple_calc");
    
    if(n === "select")
    {
        compound.style.display = "none";
        simple.style.display = "none";
    }
    else if(n === "simple calculator")
    {
        compound.style.display = "none";
        simple.style.display = "block";
        // simple_calc();
    }
    else if(n === "compound calculator")
    {
        simple.style.display = "none";
        compound.style.display = "block";
        // compound_calc();
    }
}

function simple_calc()
{
    
    let p = document.getElementById("ps").value;
    let r = document.getElementById("rs").value;
    let t = document.getElementById("ts").value;
    let amount = (p*r*t)/100;
    document.getElementById("results").innerHTML = "simple interest = " + amount.toFixed(2);
}

function compound_calc()
{
    // P(1 + r/n)^(nt)
    let p = document.getElementById("pc").value;
    let r = document.getElementById("rc").value;
    let t = document.getElementById("tc").value;
    let nw = document.getElementById("no_of_times").value;

    let n;
    if(nw == "annualy") {n = 1;}
    else if(nw == "quaterly") {n = 4;}
    else if(nw == "monthly") {n = 12;}
    else if(nw == "weekly") {n = 52;}
    else if(nw == "daily") {n = 365;}
    
    let amount = p*((1+((r/100)/n)) ** (n*t)) - p;
    document.getElementById("resultc").innerHTML = "compound interest = " + amount.toFixed(2);
}

function show_rate()
{
    let rs = document.getElementById("rs");
    let rc = document.getElementById("rc");
    
    if(rs) { document.getElementById("rates").innerHTML = rs.value; }
    if(rc) { document.getElementById("ratec").innerHTML = rc.value; }
}