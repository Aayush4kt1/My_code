function findLowestAverageSubjectMarks(N, M,Marks) {
    const subT = {}; 
    for (let k = 0; k < M; k++) {
      subT[k] = 0;
    }
  
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        subT[j] += Marks[i][j];
      }
    }
  
    console.log(subT);
  
    let mV = Infinity;
    let mI = null;
  
    for (const key in subT) {
      const value = subT[key];
  
      if (value < mV) {
        mV = value;
        mI = key;
      }
    }
  
    console.log(mI);
  
    return mI;
  }
  function SortStudentMarks(input1, input2, input3) {
    const lowSub = findLowestAverageSubjectMarks(input1, input2, input3);
    const result = [];
  
    for (let i = 0; i < input1; i++) {
      let op = 0;
  
      for (let j = 0; j < input2; j++) {
        if (j !== lowSub) {
          op += input3[i][j];
        }
      }
  
      result.push(op);
    }
  
    console.log(result);
  
    return result;
  }
