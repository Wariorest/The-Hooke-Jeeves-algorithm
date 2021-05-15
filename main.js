'use strict'
const eps = 0.01;
let h = 1;
let a = 3;
let b = 3;
let a_h = a;
let b_h = b;

function calculate(x, y) {
    return 6 * (x - y) - 3 * (Math.pow(x, 2)) - 3 * (Math.pow(y, 2));
}


// console.log(temp_processing_result);

function next_ai_calc(x, y, compare_result) {
    if (compare_result < calculate(x + h, y)) {
        a += h;
        base_processing_result = calculate(a, b);
        // console.log(`a+h temp res:${base_processing_result}`);
    }
    if (compare_result < calculate(x - h, y)) {
        a -= h;
        base_processing_result = calculate(a, b);
        // console.log(`a-h a:${a} temp res:${base_processing_result}`);
    }

}

function next_bi_calc(x, y, compare_result) {
    if (compare_result < calculate(x, y + h)) {
        b += h;
        base_processing_result = calculate(a, b);
        // console.log(`b+h temp res:${base_processing_result}`);
    }
    if (compare_result < calculate(x, y - h)) {
        b -= h;
        base_processing_result = calculate(a, b);
        // console.log(`b-h temp res:${base_processing_result}`);
    }
}

function p_i_calc(x, x0) {
    return x0 + 2 * (x - x0);
}



function jh_mehod_calc(){
    
    do {
        if (a == a_h && b == b_h) {
            next_ai_calc(a, b, base_processing_result);
            next_bi_calc(a, b, base_processing_result);
            a = p_i_calc(a, a_h);
            b = p_i_calc(b, b_h);
        }
    
        if (calculate(a, b) < base_processing_result) {
            base_processing_result = calculate(a, b);
        } else if (calculate(a, b) > base_processing_result) {
            
            h=h/2;
            a_h = a;
            b_h = b;
            
        }
        console.log(`base point: ${base_processing_result} a:${a} b:${b} h:${h} ah:${a_h} b:${b_h} h:${h}`);
    } while (h > eps);
}
let base_processing_result = calculate(a, b);
jh_mehod_calc();
