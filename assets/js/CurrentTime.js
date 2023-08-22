function todayTimeEn() {
    var dt = new Date();
    var m = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    mn = dt.getMonth();
    dn = dt.getDate();
    if(dn<10){
            dn = '0' + dn;
    }
    var curtime = m[mn] + " " + dn + ", " + dt.getFullYear();
    return curtime;
}