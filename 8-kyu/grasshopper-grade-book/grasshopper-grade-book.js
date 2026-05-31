const getGrade = (s1, s2, s3) =>{
    const sumAverage = ((s1+ s2 + s3)/3)
   switch(true){
        case(sumAverage >= 90):
           return 'A'
        case(sumAverage >=80):
            return 'B'
         case(sumAverage >= 70):
            return 'C'
        case(sumAverage >= 60):
            return 'D'
            default:
            return 'F'
    }  
}