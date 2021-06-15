name_of_first_guest_array=[];
function submit(){
    var display_guest_array=[];
    for(var j=1;j<=4;j++){
    var Name_of_first_guest=document.getElementById("name_of_first_guest_"+j).value;
    console.log(name_of_first_guest); 
    
    name_of_first_guest_array.push(name_of_first_guest);
    }
    console.log(name_of_first_guest_array);
    var length_of_name_submit_button_array=name_of_first_guest_array.length;
    console.log(length_of_name_of_first_guest_array);
    for(var k=0;k<length_of_name_of_first_guest_array;k++){
display_student_array.push("<h4>name-"+name_of_first_guest_array[k]+"</h4>");
console.log (display_guest_array);
}
console.log (display_student_array);
    document.getElementById("display_name_with_comma").innerHTML=display_student_array;
var remove_comma=display_student_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_comma").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];
    var length_of_name_of_students_array=name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);
    for(var k=0;k<length_of_name_of_students_array;k++){
display_student_array.push("<h4>name-"+name_of_the_student_array[k]+"</h4>");
console.log (display_student_array_sorting);
}
var remove_comma=display_student_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_comma").innerHTML=remove_comma;

}