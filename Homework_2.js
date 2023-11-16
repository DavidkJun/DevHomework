
/*
function largestRadialSum(arr, d) {
    let n = (arr).length;
    let Honor = [];
    for (let i = 0; i < n/d; i++) {
        let maxHonor = 0;
        for (let j = i; j < n ; j += n/d) {
            maxHonor = maxHonor + arr[j];

        }
        Honor.push(maxHonor);
    }
    let max   = Math.max(...Honor);



    return max;

}

 */
/*
function largestRadialSum(arr, d) {
  let n = (arr).length;
    let Honor = [];
    for (let i = 0; i < n/d; i++) {
        let maxHonor = 0;
        for (let j = i; j < n ; j += n/d) {
            maxHonor = maxHonor + arr[j];

        }
        Honor.push(maxHonor);
    }
let max   = Math.max(...Honor);



return max;

}
 */
/*
function groupAnagrams(words){
let n = words.length;
    let groups={};
    for (let i=0; i<n; i++)
    {
        let sorted = words[i].split("");
        sorted = sorted.sort();
        sorted = sorted.join("");
        if(groups[sorted]) groups[sorted].push(words[i]);
        else groups[sorted]=[words[i]];
    }
    return Object.values(groups);
}

 */
/*

 */
