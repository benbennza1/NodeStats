
/** Class aggregating permutation methods. */
class permutationLib{

    /**
     * Counts the number of permutations using n permutate r (nPr).
     * @param {number} n - The n value in nPr
     * @param {number} r - The r value in nPr
     * @return {number} Numerical value representing the evaluation of nPr
     */
    static countPermutation(n, r){
        if(n === 0 || r === 0 || n < r){
            return 1;
        }
        return permutationLib.factorial(n) / permutationLib.factorial(n - r);
    }

    /**
     * Evaluates a factorial n.
     * @param {number} n - Factorial to evaluate
     * @return {number} Result of the factorial evaluation
     */
    static factorial(n){
        if(n === 0){
            return 1;
        }

        let ret = 1;
        for (let i = 1; i <= n; i++){
            ret *= i;
        }
        return ret;
    }

    /**
     * Finds all possible permutations of length k in a given array.
     * @param {number[]} inArr - The input array to permutate
     * @param {number} k - The length of output arrays
     * @return {number[][]} Array of arrays representing all permutations of k length.
     */
    static kPermutations(inArr, k){
        let ret = [];
        if (k > inArr.length){
            return [inArr];
        }

        let newArr = new Array(k, 0);
        const arrUnique = (arr) => {
            let setTest = new Set(arr);
            if (setTest.size === arr.length){
                return true;
            }
            return false;
        }

        const permutate = (curArr, newArr, outSize, idx) => {
            if (idx === outSize){
                if (arrUnique(curArr)){
                    ret.push(curArr);
                }
                return;
            }

            let nextArr = [...curArr];
            for (let i = 0; i < newArr.length; i++){
                nextArr[idx] = newArr[i]
                permutate(nextArr, newArr, outSize, idx+1)
                nextArr = [...curArr];
            }
        }
        permutate(new Array(k), inArr, k, 0);
        return ret;
    }

    /**
     * Finds all possible permutations of in a given array.
     * @param {number[]} The input array to permutate
     * @return {number[][]} Array of arrays representing all permutations.
     */
    static permutation(inArr){
        let ret = [];

        const permute = (arr, size) => {
            if (size === 1) {
                ret.push([...arr]);
            } else {
                for (let i = 0; i < size; i++) {
                    permute(arr, size - 1);

                    if(size % 2 === 0){
                        let temp = arr[size-1];
                        arr[size-1] = arr[i];
                        arr[i] = temp;
                    } else {
                        let temp = arr[size-1];
                        arr[size-1] = arr[0];
                        arr[0] = temp;
                    }
                }
            }
        }

        permute(inArr, inArr.length);
        return ret;
    }
}

/** Class aggregating combinatorics methods. */
class combinationLib{

    /**
     * Counts the number of permutations using n choose r (nCr).
     * @param {number} n - The n value in nCr
     * @param {number} r - The r value in nCr
     * @return {number} Numerical value representing the evaluation of nCr
     */
    static countCombinations(n, r){
        if (n === r || n === 0 || r === 0) {
            return 1;
        }
        return permutationLib.countPermutation(n, r) / permutationLib.factorial(r);
    }

    /**
     * Finds all possible combinations of length k in a given array.
     * @param {number[]} inArr - The input array to combine
     * @param {number} k - The length of the possible combinations
     * @return {array} Array of Sets representing all permutations of k length.
     */
    static combinations(inArr, k){
        let ret = [];
        let N = inArr.length;
        let pointers = Array.of(k);
        let i = 0;
        let r = 0;

        if (k > N){
            return [inArr];
        }

        while (r >= 0){
            if (i <= (N + (r - k))){
                pointers[r] = i;
                
                if (r === k-1){
                    let newComb = []
                    for (let j = 0; j < pointers.length; j++){
                        newComb.push(inArr[pointers[j]]);
                    }
                    ret.push(new Set(newComb));
                    i++
                }
                else
                {
                    i = pointers[r] + 1;
                    r++
                }
            }
            else
            {
                r--;
                if(r >= 0){
                    i = pointers[r]+1;
                }
            }
        }
        return ret;
    }
}

module.exports = {
    combinationLib: combinationLib,
    permutationLib: permutationLib,
};