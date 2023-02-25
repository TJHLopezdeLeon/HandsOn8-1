/*Hands-on Project 8-1
TJ H Lopez de Leon
02/25/23*/

//4
"use strict";
var newAccountArray = {};

//5
function createID() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");
    var fields = document.getElementsByTagName("input");
    var acctid;
    var firstInit;
    var lastInit;
    //6
    if (fname !== "" && fname != null || lname !== "" && lname != null || zip !== "" && zip != null) {
        firstInit = fname.value.charAt(0).toUpperCase();
        lastInit = lname.value.charAt(0).toUpperCase();
        acctid = firstInit + lastInit + zip.value;
        account.value = acctid;
        newAccountArray = [];
        for (var i=0; i<fields.length -1; i++) {
            newAccountArray.push(fields[i].value);
        }
    }
}

//7
function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    if(fname.addEventListener){
        fname.addEventListener("change",createID,false);
        lname.addEventListener("change",createID,false);
        zip.addEventListener("change",createID,false);
    } else if(fname.attachEvent) {
        fname.attachEvent("onchange",createID);
        lname.attachEvent("onchange",createID);
        zip.attachEvent("onchange",createID);
    }
}
if(window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if(window.attachEvent) {
    window.attachEvent("onload",createEventListeners);
}
