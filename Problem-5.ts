function checkString(param: unknown): void {
    if (typeof param === "string") {
      console.log(param);
    } 
    else {
      console.error("Error: Given value is not a string");
    }
}

checkString("This is a string");
checkString(12345);