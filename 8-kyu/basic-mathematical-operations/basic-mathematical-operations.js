const basicOp = (Operator, value1, value2) =>(Operator === '+' ? value1 + value2: 
                                             Operator === '-'? value1-value2:
                                             Operator === '*'? value1*value2:
                                             value1/value2);