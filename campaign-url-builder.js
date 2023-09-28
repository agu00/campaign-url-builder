var one = document.getElementById('inputOne');
var two = document.getElementById('inputTwo');
var three = document.getElementById('inputThree');
var four = document.getElementById('inputFour');
var five = document.getElementById('inputFive');    
var six = document.getElementById('inputSix');
var seven = document.getElementById('inputSeven');
var eight = document.getElementById('inputEight');
var nine = document.getElementById('inputNine');
var ten = document.getElementById('inputTen');
// for Display Ads and Banner Ads (no "Other")
var ten2 = document.getElementById('inputTen2');

var am = document.getElementById('am-label');
var as = document.getElementById('as-label');
var as2 = document.getElementById('as2-label');


// show/hide extra fields based on 'URL Used In'

function showExtraFields() {

    if(six.selectedIndex == "27") {

        am.classList.remove('hidden');
        as.classList.remove('hidden');
        seven.classList.remove('hidden');
        eight.classList.remove('hidden');
        nine.classList.remove('hidden');
        ten.classList.remove('hidden');
        as2.classList.add('hidden');
        ten2.classList.add('hidden');

    } else if (six.selectedIndex == "25" || six.selectedIndex == "26") {

        as2.classList.remove('hidden');
        ten2.classList.remove('hidden');
        am.classList.add('hidden');
        as.classList.add('hidden');
        ten.classList.add('hidden');
        seven.classList.add('hidden');
        eight.classList.add('hidden');
        nine.classList.add('hidden');

    } else if (six.selectedIndex < "25") {
        
        as.classList.add('hidden');
        ten.classList.add('hidden');
        am.classList.add('hidden');
        seven.classList.add('hidden');
        eight.classList.add('hidden');
        nine.classList.add('hidden');
        as2.classList.add('hidden');
        ten2.classList.add('hidden');
    }
}
  

function campaign_url() {
    
    var outp = document.getElementById('output');
    var five = document.getElementById('inputFive'); 
    var campaign_name = one.value.trim().toLowerCase().split(" ").join("-");
    var keyword_term;

    // URL with anchor
    if (five.value.includes('#')) {
        var anchor = five.value.slice(five.value.indexOf('#'));
        five = five.value.substring(0,five.value.indexOf('#'));
        
        // looking for empty fields
        if (one.value.length == 0 || three.value.length == 0 || four.value.length == 0 || five.length == 0 || six.value == "Choose") {
            alert("Please fill in all fields.");
        // checking if code starts with cmp-
        }  else if (three.value.toLowerCase().includes("cmp-") == false) {
            alert("Please insert valid campaign code. Campaign codes come from CRM, and begin with 'CMP-'. To locate your campaign's code, use advanced find and add the 'Campaign Code' column into the results. CRM automatically generates this.");
        // checking if Term was provided
        } else if (two.value.length === 0) {
            // if Display Ads or Banner Ads
            if (six.selectedIndex == "25" || six.selectedIndex == "26"){
                if (ten2.value.length == 0) {
                    alert("Please fill in all fields."); 
                } else {
                    outp.innerHTML = five + '?utm_source=' + ten2.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                }
            // 
            } else if (six.selectedIndex == "27"){
                if ((seven.value == "Choose Medium" && eight.value.length == 0) || (nine.value == "Choose Source" && ten.value.length == 0)) {
                    alert("Please fill in all fields."); 
                } else {
                    if (eight.value.length == 0) {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five + '?utm_source=' + nine.value + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        } else {
                            outp.innerHTML = five + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        }
                    } else {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five + '?utm_source=' + nine.value + '&utm_medium=' + eight.value.trim().toLowerCase() + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        } else {
                            outp.innerHTML = five + '?utm_source=' + ten.value + '&utm_medium=' + eight.value.trim().toLowerCase().split(" ").join("-") + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        }
                    }
                }
            
            } else {
                outp.innerHTML = five + '?utm_source=' + six.value + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
            }
        } else {
            keyword_term = two.value.trim().toLowerCase().split(" ").join("-");
            
            
            if (six.selectedIndex == "25" || six.selectedIndex == "26"){
                if (ten2.value.length == 0) {
                    alert("Please fill in all fields."); 
                } else {
                    outp.innerHTML = five + '?utm_source=' + ten2.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                }
            } else if (six.selectedIndex == "27"){
                if ((seven.value == "Choose Medium" && eight.value.length == 0) || (nine.value == "Choose Source" && ten.value.length == 0)) {
                    alert("Please fill in all fields."); 
                } else {
                    if (eight.value.length == 0) {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five + '?utm_source=' + nine.value + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        } else {
                            outp.innerHTML = five + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        }
                    } else {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five + '?utm_source=' + nine.value + '&utm_medium=' + eight.value.trim().toLowerCase() + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        } else {
                            outp.innerHTML = five + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + eight.value.trim().toLowerCase().split(" ").join("-") + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term  + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        }
                    }
                }
            
            } else {
                outp.innerHTML = five + '?utm_source=' + six.value + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term  + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
            }
            
        }

    // URL without anchor
    } else {
   
        // looking for empty fields
        if (one.value.length == 0 || three.value.length == 0 || four.value.length == 0 || five.value.length == 0 || six.value == "Choose") {
            alert('Please fill in all fields.');
        // checking if code starts with cmp-
        }  else if (three.value.toLowerCase().includes('cmp-') == false) {
            alert("Please insert valid campaign code. Campaign codes come from CRM, and begin with 'CMP-'. To locate your campaign's code, use advanced find and add the 'Campaign Code' column into the results. CRM automatically generates this.");
        // checking if Term was provided
        } else if (two.value.length === 0) {

            if (six.selectedIndex == "25" || six.selectedIndex == "26"){
                if (ten2.value.length == 0) {
                    alert("Please fill in all fields."); 
                } else {
                    outp.innerHTML = five.value + '?utm_source=' + ten2.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                }
            } else if (six.selectedIndex == "27") {
                if ((seven.value == "Choose Medium" && eight.value.length == 0) || (nine.value == "Choose Source" && ten.value.length == 0)) {
                    alert("Please fill in all fields."); 
                } else {
                    if (eight.value.length == 0) {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five.value + '?utm_source=' + nine.value + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") + anchor;
                        } else {
                            outp.innerHTML = five.value + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        }
                    } else {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five.value + '?utm_source=' + nine.value + '&utm_medium=' + eight.value.trim().toLowerCase() + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        } else {
                            outp.innerHTML = five.value + '?utm_source=' + ten.value + '&utm_medium=' + eight.value.trim().toLowerCase().split(" ").join("-") + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        }
                    }
                }
            
            } else {
                outp.innerHTML = five.value + '?utm_source=' + six.value + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
            }

        } else {
            keyword_term = two.value.trim().toLowerCase().split(" ").join("-");
            
            if (six.selectedIndex == "25" || six.selectedIndex == "26"){
                if (ten2.value.length == 0) {
                    alert("Please fill in all fields."); 
                } else {
                    outp.innerHTML = five.value + '?utm_source=' + ten2.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                }
            } else if (six.selectedIndex == "27") {
                if ((seven.value == "Choose Medium" && eight.value.length == 0) || (nine.value == "Choose Source" && ten.value.length == 0)) {
                    alert("Please fill in all fields."); 
                } else {
                    if (eight.value.length == 0) {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five.value + '?utm_source=' + nine.value + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        } else {
                            outp.innerHTML = five.value + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + seven.value + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        }
                    } else {
                        if (ten.value.length == 0) {
                            outp.innerHTML = five.value + '?utm_source=' + nine.value + '&utm_medium=' + eight.value.trim().toLowerCase() + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
                        } else {
                            outp.innerHTML = five.value + '?utm_source=' + ten.value.trim().toLowerCase().split(" ").join("-") + '&utm_medium=' + eight.value.trim().toLowerCase().split(" ").join("-") + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term  + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-") ;
                        }
                    }
                }
            } else {
                outp.innerHTML = five.value + '?utm_source=' + six.value + '&utm_medium=' + six[six.selectedIndex].className + '&utm_campaign=' + campaign_name + '&utm_term=' + keyword_term  + '&utm_content=' + four.value + '&utm_id=' + three.value.trim().toLowerCase().split(" ").join("-");
            }
        }
    }
}

function copyResult() {
    document.getElementById('output').select();
    document.execCommand('copy');
}

