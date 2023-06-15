
function validDegree(){
      const clickDegree=document.getElementById("checkDegree").value;
      const clickDuration=document.getElementById("duration");
      const clickCategorey=document.getElementById("categoreyStudy");
      if (clickDegree==="Bachelor"){
        clickDuration.textContent="4 Year: Degree";
        clickCategorey.textContent="";
      }
       else if (clickDegree==="Master"){
        clickDuration.textContent="2 Year: Degree";
        clickCategorey.textContent="";
      }
       else if (clickDegree==="PHD"){
        clickDuration.textContent="2 Year: Degree";
        clickCategorey.textContent="";
      }
       else{
        clickDuration.textContent="not valid Degree";
        clickCategorey.textContent="";
       }
  
}
function yearSelect(){
    const clickDuration=document.getElementById("years").value;
    const clickCategorey=document.getElementById("categoreyStudy");
    if(clickDuration==="4 Year"){
        clickCategorey.textContent="BS Honers";
    } else if(clickDuration==="2 Year"){
        clickCategorey.textContent="Ms computer Science";
    }
    else if(clickDuration==="2 Year"){
        clickCategorey.textContent="Phd";
    }
    else{
        clickCategorey.textContent="invalid"
    }

    
}